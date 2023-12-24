//@ts-nocheck
import NewHeader from "../../components/svaas-header"
import Stepper from "@app/components/stepper/Stepper";
import { Checkbox, ContentHeading, InputSearch, RelatedSymptomsCheckBox, RelatedSymptomsSubtext, SearchBlock, SearchContainer, SpanCross, SpanSearchIcon, StepperContainer, StyleNamefilter, SubText, SubTextNext, SubmitButton, Svg, Symptom, SymptomName, SymptomsContainer, SymptomsData, SymptomsFlex, SymptomsParentContainer } from "./medical-history-components";
import { useEffect, useState } from "react";
import { Bodyache, Fever, Headache, HeartDisease, HyperTension, HypoThyrodism, KidneyDisease, LooseMotions, Nausea, RunningNose, SearchIcon, SoreThroat, StomachPain } from "@app/assets/icons";
import { useHistory } from "react-router";
import { get_pre_conditions, update_pre_conditions } from "@app/@services";
import Diabetis from "@app/assets/icons/diabetis";
import Asthama from "@app/assets/icons/asthama";
import SearchBar from "@app/components/search-bar/search-bar";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import ErrorPage from "@app/components/error-page/error-page";
import CheckBox from "../../components/checkbox";
const MedicalHistory = () => {
    const history = useHistory();
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(3);
    const [completedStep, setCompletedStep] = useState(false);
    const [selectedConditions, setSelectedConditions] = useState<any>([]);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const [conditionsList, setConditionsList] = useState([]);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const userType = localStorage.getItem("userType") || "";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    const userDetails = JSON.parse(localStorage.getItem("create_chat")) || {};
    const medical_conditions = [
        { icon: Diabetis, name: "Diabetes", value: "Diabetes" },
        { icon: HyperTension, name: "Hypertension", value: "Hypertension" },
        { icon: HeartDisease, name: "Heart disease", value: "Heart disease" },
        { icon: HypoThyrodism, name: "Hypothyroid", value: "Hypothyroid" },
        { icon: KidneyDisease, name: "Kidney disease", value: "Kidney disease" },
        { icon: Asthama, name: "Asthma", value: "Asthma" },
        { icon: RunningNose, name: "Brain stroke", value: "Brain stroke" },
        { icon: SoreThroat, name: "High cholesterol", value: "High cholesterol" },
    ];
    const [searchBarConditions, setSearchBarConditions] = useState<any>([]);
    const handleSelectConditions = (condition: any, idx: number) => {
        if (!disabled) {
            const lowercaseConditionName = condition.value.toLowerCase();
            if (selectedConditions.some(existingCondition => existingCondition.toLowerCase() === lowercaseConditionName) ||
                searchBarConditions.some(existingCondition => existingCondition.toLowerCase() === lowercaseConditionName)) {
                let arr = selectedConditions.filter((value) => value.toLowerCase() !== condition.value.toLowerCase())
                setSelectedConditions(arr);
            } else {
                setSelectedConditions([...selectedConditions, condition.value]);
            }
        }
    };
    const getAllPreMedicalConditions = async () => {
        setLoading(true);
        setErrorScreen(false);
        await get_pre_conditions().then((res) => {
            if (res.status === 200 || res.status === 201) {
                //console.log(res.data);
                let arr = res.data && res.data.map((condition: string) => {
                    return {
                        label: condition,
                        value: condition
                    }
                })
                const filteredArr = arr.filter((item2: any) => !medical_conditions.some(item1 => item1.value.toLowerCase() === item2.value.toLowerCase()));
                //console.log("filteredArr: ", filteredArr);
                setConditionsList(filteredArr);
                setLoading(false);
            } else {
                setLoading(false);
                setErrorScreen(true);
                //console.log("API FAILED");
            }
        })
    }
    useEffect(() => {
        getAllPreMedicalConditions();
    }, [])

    useEffect(() => {
        setSelectedConditions([]);
        setSearchBarConditions([]);
        setDisabled(isChecked);
    }, [isChecked])

    useEffect(() => {
        const filteredArr = selectedConditions && selectedConditions.filter((item2: any) => !searchBarConditions.some(item1 => item1.toLowerCase() === item2.toLowerCase()));
        setSelectedConditions(filteredArr);
    }, [searchBarConditions])

    const handleOnSubmit = async () => {
        setLoading(true);
        setErrorScreen(false);
        const All_medical_conditions = [...selectedConditions, ...searchBarConditions];
        await update_pre_conditions(All_medical_conditions).then((res) => {
            if (res.status === 200 || res.status === 201) {
                setLoading(false);
                if (userDetails?.age >= 18)
                    history.push({ pathname: "/habits" })
                else
                    history.push({ pathname: "/outcome" })
            } else {
                setLoading(false);
                setErrorScreen(true);
            }
        })
    }
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
            {loading && <SvaasLoader />}
            {errorScreen ?
                <ErrorPage /> :
                <>
                    <SymptomsParentContainer>
                        <ContentHeading>
                            {
                                userType === "myself" ? "Do you have any existing medical conditions apart from the selected symptoms?" :
                                    someone_else_gender === "male" ? "Does he have any existing medical conditions apart from the selected symptoms?" :
                                        someone_else_gender === "female" ? "Does she have any existing medical conditions apart from the selected symptoms?" :
                                            "Do they have any existing medical conditions apart from the selected symptoms?"
                            }
                        </ContentHeading>
                        <RelatedSymptomsCheckBox>
                            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                            <RelatedSymptomsSubtext>
                                Don't have any pre-existing conditions
                            </RelatedSymptomsSubtext>
                        </RelatedSymptomsCheckBox>
                        <SubText>
                            Choose from common conditions
                        </SubText>
                        <SymptomsContainer>
                            {medical_conditions.map((condition, idx) => (
                                <Symptom
                                    key={idx}
                                    onClick={() => handleSelectConditions(condition, idx)}
                                    className={disabled ? "disabled" : selectedConditions.includes(condition.value) ? "selected" : ""}
                                >
                                    <Svg>{condition.icon(disabled)}</Svg>
                                    <SymptomName>{condition.name}</SymptomName>
                                </Symptom>
                            ))}
                        </SymptomsContainer>
                        <SearchContainer className={disabled ? "disabled" : ""}>
                            <SubText>
                                Any other condition you wish to add?
                            </SubText>
                            <SearchBar symptomsList={conditionsList} setSearchBarSymptoms={setSearchBarConditions} searchBarSymptoms={searchBarConditions} disabled={disabled} fromPage="ConditionsPage" />
                        </SearchContainer>
                    </SymptomsParentContainer>
                    <SubmitButton disabled={(![...selectedConditions, ...searchBarConditions].length && !disabled)} onClick={handleOnSubmit}>
                        <SubTextNext>Next</SubTextNext>
                    </SubmitButton>
                </>
            }
        </>
    );
};
export default MedicalHistory;
