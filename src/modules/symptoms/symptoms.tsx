//@ts-nocheck
import NewHeader from "../../components/svaas-header"
import Stepper from "@app/components/stepper/Stepper";
import { ContentHeading, InputSearch, SearchBlock, SelectedSymptoms, SpanCross, SpanSearchIcon, StepperContainer, StyleNamefilter, SubText, SubText2, SubTextNext, SubmitButton, Svg, Symptom, SymptomName, SymptomsContainer, SymptomsData, SymptomsFlex, SymptomsParentContainer } from "./symptoms-components";
import { useEffect, useState } from "react";
import { Bodyache, Fever, Headache, LooseMotions, Nausea, RunningNose, SearchIcon, SoreThroat, StomachPain } from "@app/assets/icons";
import { useHistory } from "react-router";
import Select from "react-select";
import { get_symptoms } from "@app/@services";
import { values } from "lodash";
import SearchBar from "@app/components/search-bar/search-bar";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import ErrorPage from "@app/components/error-page/error-page";
const Symptoms = () => {
    const history = useHistory();
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [completedStep, setCompletedStep] = useState(false);
    const [selectedSymptoms, setSelectedSymptoms] = useState<any>([]);
    const [symptomsList, setSymptomsList] = useState([]);
    const [searchBarSymptoms, setSearchBarSymptoms] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const userType = localStorage.getItem("userType") || "myself";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    const symptoms = [
        { icon: Fever, name: "Fever", value: "Fever" },
        { icon: Bodyache, name: "Body pains", value: "Body pains" },
        { icon: Headache, name: "Headache", value: "Headache" },
        { icon: Nausea, name: "Nausea", value: "Nausea" },
        { icon: StomachPain, name: "Stomach pain", value: "Stomach pain" },
        { icon: LooseMotions, name: "Loose motions", value: "Loose motions" },
        { icon: RunningNose, name: "Runny nose", value: "Runny nose" },
        { icon: SoreThroat, name: "Sore throat", value: "Sore throat" },
    ];
    const handleOnsubmit = () => {
        history.push({
            pathname: "/duration", state: {
                symptomsArray: [...selectedSymptoms, ...searchBarSymptoms]
            }
        })
    }
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
                const filteredArr = arr.filter((item2: any) => !symptoms.some(item1 => item1.value.toLowerCase() === item2.value.toLowerCase()));
                //console.log("filteredArr: ", filteredArr);
                setSymptomsList(filteredArr);
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
    // useEffect(() => {
    //     const handleBackButton = () => {
    //         console.log('Back button was clicked on /symptoms!');
    //         sessionStorage.clear();
    //     };
    //     window.addEventListener('popstate', handleBackButton);
    //     return () => {
    //         window.removeEventListener('popstate', handleBackButton);
    //     };
    // }, []);
    useEffect(() => {
        const filteredArr = selectedSymptoms && selectedSymptoms.filter((item2: any) => !searchBarSymptoms.some(item1 => item1.toLowerCase() === item2.toLowerCase()));
        setSelectedSymptoms(filteredArr);
    }, [searchBarSymptoms])
    const handleSelectSymptoms = (symptom: any, idx: number) => {
        const lowercaseSymptomName = symptom.value.toLowerCase();
        if (selectedSymptoms.some(existingSymptom => existingSymptom.toLowerCase() === lowercaseSymptomName) ||
            searchBarSymptoms.some(existingSymptom => existingSymptom.toLowerCase() === lowercaseSymptomName)) {
            let arr = selectedSymptoms.filter((value) => value.toLowerCase() !== symptom.value.toLowerCase())
            setSelectedSymptoms(arr);
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom.value]);
        }
    };
    return (
        <>
            {loading && <SvaasLoader />}
            <NewHeader
                className="specialities"
                title="BodyCheck"
                showBackButton={true}
                onBack={() => {
                    history.push({ pathname: "/home" });
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
                <>
                    <SymptomsParentContainer>
                        <ContentHeading>
                            {
                                userType === "myself" ? "Can you tell what symptoms are bothering you ?" :
                                    someone_else_gender === "male" ? "Can you tell what symptoms are bothering him ?" :
                                        someone_else_gender === "female" ? "Can you tell what symptoms are bothering her ?" :
                                            "Can you tell what symptoms are bothering them ?"
                            }
                        </ContentHeading>
                        <SubText>
                            Choose from common symptoms
                        </SubText>
                        <SymptomsContainer>
                            {symptoms.map((symptom, idx) => (
                                <Symptom
                                    key={idx}
                                    onClick={() => handleSelectSymptoms(symptom, idx)}
                                    className={selectedSymptoms.includes(symptom.value) ? "selected" : ""}
                                >
                                    <Svg>{symptom.icon()}</Svg>
                                    <SymptomName>{symptom.name}</SymptomName>
                                </Symptom>
                            ))}
                        </SymptomsContainer>
                        <SubText2>
                            Any other symptom you wish to add?
                        </SubText2>
                        <SearchBar symptomsList={symptomsList} setSearchBarSymptoms={setSearchBarSymptoms} searchBarSymptoms={searchBarSymptoms} disabled={false} fromPage="SymptomsPage" />
                    </SymptomsParentContainer>
                    <SubmitButton disabled={([...selectedSymptoms, ...searchBarSymptoms].length <= 0)} onClick={handleOnsubmit}>
                        <SubTextNext>Next</SubTextNext>
                    </SubmitButton>
                </>}
        </>
    );
};
export default Symptoms;
