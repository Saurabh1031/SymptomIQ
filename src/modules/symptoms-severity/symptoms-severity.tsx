//@ts-nocheck
import Stepper from "@app/components/stepper/Stepper";
import NewHeader from "@app/components/svaas-header";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CommonHeader, Container, InputSlider, Label, SliderContainer, StepperContainer, SubText, SubTextNext, SubmitButton, SymptomSlidersContainer, SymtomTypesContainer } from "./severity-components";
import { get_symptoms_attributes, update_symptoms } from "@app/@services";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import ErrorPage from "@app/components/error-page/error-page";
const SymptomsSeverity = () => {
    const history = useHistory();
    const arr = history.location.state?.symptomsList || [];
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [completedStep, setCompletedStep] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const [symptomsDetails, setSymptomsDetails] = useState<any>([]);
    const [symptomsAttributes, setSymptomsAttributes] = useState<any>([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    useEffect(() => {
        setIsButtonDisabled(true);
        const newData = arr.map((data: any) => ({ ...data, severity: "", selectedSeverity: "" }));
        setSymptomsDetails(newData);
        const symptomsName = arr.map((symptom: any) => symptom.name);
        get_all_symptoms_attributes(symptomsName);
    }, []);
    useEffect(() => {
        if (symptomsAttributes && symptomsAttributes.length) {
            let details = symptomsDetails ? symptomsDetails.map((symptom: any, ind: any) => ({
                ...symptom, severity: symptomsAttributes[ind]?.Attributes[0] ? symptomsAttributes[ind]?.Attributes[0] : "",
                selectedSeverity: symptomsAttributes[ind]?.Attributes[0] ? symptomsAttributes[ind]?.Attributes[0] : ""
            })) : [];
            setSymptomsDetails(details);
        }
    }, [symptomsAttributes])
    const get_all_symptoms_attributes = async (symptomsName: any) => {
        await get_symptoms_attributes(symptomsName).then((res: any) => {
            if (res.status === 200 || res.status === 201) {
                setSymptomsAttributes(res.data);
                setIsButtonDisabled(false);
            } else {
                setErrorScreen(true);
                setLoading(false);
                setSymptomsAttributes([]);
            }
        })
    }

    const handleChangeSliderValue = (e: any, ind: number) => {
        let symptomlist = [...symptomsDetails];
        let severityNo = e.target.value;    //50
        switch (severityNo) {
            case "0":
                symptomlist[ind] = {
                    ...symptomlist[ind], severity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[0] : "",
                    selectedSeverity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[0] : ""
                };
                break;
            case "50":
                symptomlist[ind] = {
                    ...symptomlist[ind], severity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[1] : "",
                    selectedSeverity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[1] : ""
                };
                break;
            case "100":
                symptomlist[ind] = {
                    ...symptomlist[ind], severity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[2] : "",
                    selectedSeverity: symptomsAttributes[ind] ? symptomsAttributes[ind].Attributes[2] : ""
                };
                break;
            default:
            // pass
        }
        setSymptomsDetails(symptomlist);
    };

    const submit_symptoms = async (body: any) => {
        setLoading(true);
        setErrorScreen(false);
        await update_symptoms(body).then((res) => {
            if (res.status === 200 || res.status === 201) {
                const other_symptoms = res.data;
                if (other_symptoms.length === 1 && (other_symptoms[0].toLowerCase().includes("none") || other_symptoms[0].toLowerCase().includes("no other"))) {
                    history.push({
                        pathname: "/history",
                    })
                    setLoading(false);
                } else {
                    history.push({
                        pathname: "./extras",
                        state: {
                            other_symptoms: other_symptoms
                        }
                    })
                    setLoading(false);
                }
            } else {
                setErrorScreen(true);
                setLoading(false);
            }
        })
    }
    const handleOnSubmit = () => {
        submit_symptoms(symptomsDetails);
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
            {errorScreen ?
                <ErrorPage /> :
                <>
                    <Container>
                        {loading && <SvaasLoader />}
                        <CommonHeader>How severe are these symptoms?</CommonHeader>
                        <SliderContainer>
                            {symptomsDetails && symptomsDetails.map((symptom: any, ind: number) => {
                                if (symptom?.severity != "")
                                    return (
                                        <SymptomSlidersContainer>
                                            <Label>{symptom.name}</Label>
                                            <InputSlider
                                                type="range"
                                                min="0"
                                                max="100"
                                                defaultValue="0"
                                                step="50"
                                                onInput={(e) => handleChangeSliderValue(e, ind)}
                                                className="sliderBlue"
                                            />
                                            <SymtomTypesContainer>
                                                {symptomsAttributes[ind] && symptomsAttributes[ind].Attributes?.map((attribute: any) => (
                                                    <SubText selected={attribute == symptom.selectedSeverity}>
                                                        {attribute}
                                                    </SubText>
                                                ))}
                                            </SymtomTypesContainer>
                                        </SymptomSlidersContainer>
                                    )
                            })}
                        </SliderContainer>
                    </Container>
                    <SubmitButton onClick={handleOnSubmit} disabled={isButtonDisabled}>
                        <SubTextNext>Next</SubTextNext>
                    </SubmitButton> </>}
        </>
    )
}
export default SymptomsSeverity;