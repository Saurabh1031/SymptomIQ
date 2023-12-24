//@ts-nocheck
import { useEffect, useState } from "react";
import Stepper from "@app/components/stepper/Stepper";
import NewHeader from "../../components/svaas-header";
import {
  AboutContainer,
  AboutHeader,
  AgeParent,
  AgeTitle,
  Container,
  DashedLine,
  DetailsHeading,
  Gender,
  GenderOptions,
  GenderTitle,
  Input,
  InputLabel,
  InputYears,
  NameItem,
  NamesList,
  SpanYears,
  StepperContainer,
  SubText,
  SubmitButton,
  SymptomsText,
} from "./homescreen-components";
import { useHistory } from "react-router";
import { create_chat } from "@app/@services";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import LeavingMidway from "@app/components/leaving-popup/leaving-popup";
const HomeScreen = () => {
  const name = localStorage.getItem('name') || "";
  const genderName = localStorage.getItem('gender')?.toLowerCase() || "";
  const dob = localStorage.getItem('dob') || "";
  const userid = localStorage.getItem('userid') || "";
  const calculateAge = (dateOfBirth) => {
    const dobParts = dateOfBirth ? dateOfBirth.split('-') : [0, 0, 0];
    const dob = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]); // Month is 0-indexed in JavaScript Date
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  }
  const ageFromDob = calculateAge(dob);
  const steps = ["About", "Symptoms", "History", "Outcome"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedStep, setCompletedStep] = useState(false);
  const [userType, setUserType] = useState<any>("");
  const [gender, setGender] = useState<any>(genderName);
  const [age, setAge] = useState<any>(ageFromDob);
  const [isPregnant, setIsPregnant] = useState<any>();
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const [leavingMidway, setLeavingMidway] = useState<boolean>(false);
  const history = useHistory();
  const [timeoutId, setTimeoutId] = useState(null);
  const UserNames = [
    {
      label: "Myself",
      value: "myself",
    },
    {
      label: "Someone else",
      value: "someone else",
    },
  ];
  const GenderList = [{
    label: "Male",
    value: "male"
  }, {
    label: "Female",
    value: "female"
  }, {
    label: "Others",
    value: "others"
  }]
  const PregnancyStatuses = [{
    label: "Pregnant",
    value: true
  }, {
    label: "Not Pregnant",
    value: false
  }]
  useEffect(() => {
    const handleBackButton = () => {
      //console.log('Back button was clicked on /home!');
      sessionStorage.clear();
    };
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  const getUserInformations = async (param: any) => {
    setLoading(true);
    await create_chat(param).then((res) => {
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("create_chat", JSON.stringify(param));
        localStorage.setItem("chatid", res.data);
        setLoading(false);
        history.push({ pathname: "/symptoms" });
      } else {
        setLoading(false);
        //console.log("API failed");
      }
    })
  }
  const handleGenderchange = (gen: any) => {
    if (userType === "someone else" && age) {
      localStorage.setItem("someone_else_gender", gen.value)
      setGender(gen.value);
      if (gen.value === "male") {
        setIsPregnant(false);
        const param = {
          user_id: userid,
          tenant: "svaas",
          channel: "app",
          self_flag: userType === "myself" ? true : false,
          gender: "male",
          age: age,
          is_pregnant: false,
        }
        getUserInformations(param);
      } else if (gen.value === "others") {
        setIsPregnant(false);
        const param = {
          user_id: userid,
          tenant: "svaas",
          channel: "app",
          self_flag: userType === "myself" ? true : false,
          gender: "non-binary",
          age: age,
          is_pregnant: false,
        }
        getUserInformations(param);
      } else {  //female
        if (age < 18 || age > 50) {
          setIsPregnant(false);
          const param = {
            user_id: userid,
            tenant: "svaas",
            channel: "app",
            self_flag: userType === "myself" ? true : false,
            gender: "female",
            age: age,
            is_pregnant: false,
          }
          getUserInformations(param);
        }
      }
    }
  }
  const handleUserTypeSelection = (name: any) => {
    var showForFewSeconds;
    setUserType(name.value);
    localStorage.setItem("userType", name.value);
    if (name.value === "myself") {
      if (genderName === "male") {
        const param = {
          user_id: userid,
          tenant: "svaas",
          channel: "app",
          self_flag: true,
          gender: "male",
          age: ageFromDob,
          is_pregnant: false
        }
        showForFewSeconds = setTimeout(() => getUserInformations(param), 3000);
        setTimeoutId(showForFewSeconds);
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      } else if (genderName === "others") {
        const param = {
          user_id: userid,
          tenant: "svaas",
          channel: "app",
          self_flag: true,
          gender: "non-binary",
          age: ageFromDob,
          is_pregnant: false
        }
        showForFewSeconds = setTimeout(() => getUserInformations(param), 3000);
        setTimeoutId(showForFewSeconds);
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      } else {  //female 
        if (ageFromDob < 18 || ageFromDob > 50) {
          const param = {
            user_id: userid,
            tenant: "svaas",
            channel: "app",
            self_flag: true,
            gender: "female",
            age: ageFromDob,
            is_pregnant: false
          }
          showForFewSeconds = setTimeout(() => getUserInformations(param), 3000);
          setTimeoutId(showForFewSeconds);
          return () => {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          };
        }
      }
      setAge(ageFromDob);
      setGender(genderName);
      setIsPregnant("");
    } else if (name.value === "someone else") {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setAge("");
      setGender("");
      setIsPregnant("");
    }
  }
  const handlePregnancySelection = (status) => {
    if (age) {
      setIsPregnant(status.value);
      const param = {
        user_id: userid,
        tenant: "svaas",
        channel: "app",
        self_flag: userType === "myself" ? true : false,
        gender: "female",
        age: age,
        is_pregnant: status.value
      }
      getUserInformations(param);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    sessionStorage.clear();
  }, [])
  const handleBackClick = () => {
    setLeavingMidway(true);
  }
  const onChangeAgeHandler = (e: any) => {
    let age = e.target.value;
    let isWholeNumber = /^[1-9]\d*$/.test(age);
    if (age < 1 || age > 120 || !isWholeNumber)
      setAge("");
    else
      setAge(age);
    setGender("");
    setIsPregnant("");
  }
  return (
    <>
      {
        showWelcome ? <WelcomeScreen name={name} /> :
          <>
            <NewHeader
              className="specialities"
              title="SymptomIQ"
              showBackButton={true}
              onBack={() => {
                //handleBackClick();
              }}
            />
            <StepperContainer>
              <Stepper
                steps={steps}
                currentStep={currentStep}
                completedStep={completedStep}
              />
            </StepperContainer>
            <Container>
              {loading && <SvaasLoader />}
              <SymptomsText>Who are you checking symptoms for?</SymptomsText>
              <NamesList>
                {UserNames &&
                  UserNames.map((name, idx) => {
                    return (
                      <NameItem
                        key={idx}
                        selected={userType === name.value}
                        onClick={() => handleUserTypeSelection(name)}
                      >
                        {name.label}
                      </NameItem>
                    );
                  })}
              </NamesList>
              {userType &&
                <AboutContainer>
                  <DetailsHeading>Please describe more about {userType === "myself" ? "yourself..." : "them..."}</DetailsHeading>
                  <DashedLine />
                  <AgeTitle>Age</AgeTitle>
                  <AgeParent>
                    <Input
                      value={userType == "myself" ? ageFromDob : age}
                      min="1"
                      max="120"
                      type="number"
                      onChange={(e) => onChangeAgeHandler(e)}
                      disabled={userType === "myself"}
                    />
                    <SpanYears>Years</SpanYears>
                  </AgeParent>
                  <GenderTitle>Gender</GenderTitle>
                  <GenderOptions>
                    {GenderList.map((gen, idx) => (
                      <Gender
                        key={idx}
                        className={userType == "myself" ? (gen.value === genderName ? "selected" : "") : !age ? "disabled" : gen.value === gender ? "selected" : ""}
                        onClick={() => handleGenderchange(gen)}
                      >
                        {gen.label}
                      </Gender>
                    ))}
                  </GenderOptions>
                  {((userType === "someone else" && gender === "female" && (age >= 18 && age <= 50)) || (userType === "myself" && genderName === "female" && (ageFromDob >= 18 && ageFromDob <= 50))) &&
                    <>
                      <GenderTitle>Pregnancy Status</GenderTitle>
                      <GenderOptions>
                        {PregnancyStatuses.map((status, idx) => (
                          <Gender
                            key={idx}
                            className={!age ? "disabled" : status.value === isPregnant ? "selected" : ""}
                            onClick={() => handlePregnancySelection(status)}
                          >
                            {status.label}
                          </Gender>
                        ))}
                      </GenderOptions>
                    </>}
                </AboutContainer>}
              {/* <SubmitButton disabled={false} onClick={handleOnSubmit}>
                <SubText>Next</SubText>
              </SubmitButton> */}
            </Container>
          </>
      }
      {leavingMidway ? <LeavingMidway onclose={setLeavingMidway} /> : null}
    </>
  );

};
export default HomeScreen;
