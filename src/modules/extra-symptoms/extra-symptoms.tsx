//@ts-nocheck
import Stepper from "@app/components/stepper/Stepper";
import NewHeader from "@app/components/svaas-header";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Checkbox, Container, InputSearch, RelatedMap, RelatedParent, RelatedSymptomsCheckBox, RelatedSymptomsHeading, RelatedSymptomsSubtext, SearchBarContainer, SearchBlock, SpanSearchIcon, StepperContainer, StyleNamefilter, SubText, SubTexts, SubmitButton, WelcomeHeading } from "./extra-symptoms-components";
import { SearchIcon } from "@app/assets/icons";
import { get_symptoms, update_other_symptoms } from "@app/@services";
import Select from "react-select";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import ErrorPage from "@app/components/error-page/error-page";
import SearchBar from "@app/components/search-bar/search-bar";
import CheckBox from "@app/components/checkbox/checkbox";
const ExtraSymptoms = () => {
    const history = useHistory();
    // const Arr = [
    //     "Body Stiffness",
    //     "Chils",
    //     "Cough",
    //     "Fatigue",
    //     "Lose of Appetite",
    //     "Nasal Congestion",
    //     "Mild Chest Discomfort",
    //     "Mild Breathing Difficulty",
    // ];
    const Arr = history.location.state?.other_symptoms || [];
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [completedStep, setCompletedStep] = useState(false);
    const [relatedSymptomsArr, setRelatedSymptomsArr] = useState(Arr);
    const [search, setSearch] = useState<string>("");
    const [disableButton, setDisableButton] = useState<boolean>(false);
    const [disabled, setDisabled] = useState(false);
    const [selectedSymptoms, setSelectedSymptoms] = useState<any>([]);
    const [symptomsList, setSymptomsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const [searchBarSymptoms, setSearchBarSymptoms] = useState<any>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const userType = localStorage.getItem("userType") || "myself";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    const getAllSymptoms = async () => {
        setLoading(true);
        setErrorScreen(false);
        await get_symptoms().then((res) => {
            if (res.status === 200 || res.status === 201) {
                let arr = res.data && res.data.map((symptom: string) => {
                    return {
                        label: symptom,
                        value: symptom
                    }
                })
                setSymptomsList(arr);
                setLoading(false);
            } else {
                setLoading(false);
                setErrorScreen(true);
                //console.log("API failed");
            }
        })
    }
    useEffect(() => {
        getAllSymptoms();
    }, [])

    useEffect(() => {
        setSelectedSymptoms([]);
        setSearchBarSymptoms([]);
        setDisabled(isChecked);
    }, [isChecked])

    useEffect(() => {
        const filteredArr = selectedSymptoms && selectedSymptoms.filter((item2: any) => !searchBarSymptoms.some(item1 => item1.toLowerCase() === item2.toLowerCase()));
        setSelectedSymptoms(filteredArr);
    }, [searchBarSymptoms])

    const handleSubmit = async () => {
        setLoading(true);
        setErrorScreen(false);
        const finalSymptoms = [...selectedSymptoms, ...searchBarSymptoms];
        await update_other_symptoms(finalSymptoms).then((res) => {
            // console.log(res.data);
            if (res.status === 200 || res.status === 201) {
                history.push({
                    pathname: "/history"
                })
                setLoading(false);
            } else {
                setLoading(false);
                setErrorScreen(true);
                //console.log("API Failed");
            }
        })
    };
    const handleSelectSymptoms = (symptom: any, idx: number) => {
        if (!disabled) {
            const lowercaseSymptomName = symptom.toLowerCase();
            if (selectedSymptoms.some(existingSymptom => existingSymptom.toLowerCase() === lowercaseSymptomName) ||
                searchBarSymptoms.some(existingSymptom => existingSymptom.toLowerCase() === lowercaseSymptomName)) {
                let arr = selectedSymptoms.filter((value) => value.toLowerCase() !== symptom.toLowerCase())
                setSelectedSymptoms(arr);
            } else {
                setSelectedSymptoms([...selectedSymptoms, symptom]);
            }
        }
    };
    // console.log("selectedSymptoms ", selectedSymptoms);
    return (
        <>
            <NewHeader
                className="specialities"
                title="SymptomIQ"
                showBackButton={true}
                onBack={() => {
                    history.push({ pathname: "/symptoms" });
                }}
            />
            <StepperContainer>
                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                    completedStep={completedStep}
                />
            </StepperContainer>
            {errorScreen ?
                <ErrorPage /> :
                <> <Container>
                    {loading && <SvaasLoader />}
                    <WelcomeHeading>
                        {
                            userType === "myself" ? "It must be tough dealing with these symptoms. Did you notice any other accompanying symptoms?" :
                                someone_else_gender === "male" ? "It must be tough dealing with these symptoms. Did he notice any other accompanying symptoms?" :
                                    someone_else_gender === "female" ? "It must be tough dealing with these symptoms. Did she notice any other accompanying symptoms?" :
                                        "It must be tough dealing with these symptoms. Did they notice any other accompanying symptoms?"
                        }
                    </WelcomeHeading>
                    <RelatedSymptomsCheckBox>
                        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                        <RelatedSymptomsSubtext>
                            Don't have any related symptoms?
                        </RelatedSymptomsSubtext>
                    </RelatedSymptomsCheckBox>
                    <RelatedSymptomsHeading>
                        Choose from suggested symptoms
                    </RelatedSymptomsHeading>
                    <RelatedParent>
                        {relatedSymptomsArr.map((symptom, index) => (
                            <RelatedMap key={index}
                                onClick={() => handleSelectSymptoms(symptom, index)}
                                className={disabled ? "disabled" : selectedSymptoms.includes(symptom) ? "selected" : ""}>{symptom}</RelatedMap>
                        ))}
                    </RelatedParent>
                    <SearchBarContainer className={disabled ? "disabled" : ""}>
                        <SubTexts>
                            Any other symptom you wish to add?
                        </SubTexts>
                        <SearchBar symptomsList={symptomsList} setSearchBarSymptoms={setSearchBarSymptoms} searchBarSymptoms={searchBarSymptoms} disabled={disabled} fromPage="SymptomsPage" />
                    </SearchBarContainer>
                </Container>
                    <SubmitButton disabled={(![...selectedSymptoms, ...searchBarSymptoms].length && !disabled)} onClick={handleSubmit}>
                        <SubText>Next</SubText>
                    </SubmitButton></>}
        </>
    )
}
export default ExtraSymptoms;