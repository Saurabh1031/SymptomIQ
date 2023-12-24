//@ts-nocheck
import Stepper from "@app/components/stepper/Stepper";
import NewHeader from "@app/components/svaas-header"
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ApplyContainer, ApplyToAll, Checkbox, Container, DurationContainer, DurationHeaderText, FirstRow, Input, SecondRow, Select, StepperContainer, SubText, SubmitButton } from "./symp-duration-components";
import CheckBox from "../../components/checkbox";
const SymptomsDuration = () => {
    const history = useHistory();
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [completedStep, setCompletedStep] = useState(false);
    const [data, setData] = useState([]);
    const onlySymptomsNames = history.location.state?.symptomsArray || [];
    const [enabled, setEnabled] = useState<boolean>(true);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const userType = localStorage.getItem("userType") || "myself";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    const dayArr = [
        { label: "Hour(s)", value: "hours" },
        { label: "Day(s)", value: "days" },
        { label: "Week(s)", value: "weeks" },
        { label: "Month(s)", value: "months" },
        { label: "Year(s)", value: "years" },
    ];
    useEffect(() => {
        const newArr = [...onlySymptomsNames];
        //const newArr = ["Fever", "Nausea", "Body Stiffness"];
        const arrData: any = newArr.map((a: any) => {
            return {
                name: a,
                duration_number: "",
                duration: "days",
                checked: false,
            };
        });
        setData(arrData);
    }, []);
    const handleCheckBox = () => {
        if (isChecked) {
            let arr: any = [...data];
            let firstData: any = data[0];
            data.map((_, ind: number) => {
                if (ind > 0) {
                    return (arr[ind] = {
                        ...arr[ind],
                        duration_number: firstData.duration_number,
                        duration: firstData.duration,
                    });
                }
            });
            setData(arr);
        }
    };
    useEffect(() => {
        handleCheckBox();
    }, [isChecked])
    const checkButtonDisability = () => {
        setEnabled(true);
        data.map((d: any) => {
            if (d.duration_number === null || d.duration_number === "") {
                setEnabled(false);
            }
        })
    }
    const checkDurationMatch = () => {
        setIsChecked(true);
        var firstData = {
            number: data[0]?.duration_number === "" ? "NA" : data[0]?.duration_number,
            days: data[0]?.duration === "" ? "NA" : data[0]?.duration,
        }
        for (var i = 1; i < data.length; i++) {
            if (data[i].duration_number != firstData.number || data[i].duration != firstData.days) {
                setIsChecked(false);
                break;
            }
        }
    }
    useEffect(() => {
        checkButtonDisability();
        checkDurationMatch();
    }, [data])
    const selectDuration = (ind: any, e: any) => {
        let newData: any = [...data];
        let selectedData: any = newData[ind];
        selectedData.duration = e.target.value;
        newData[ind] = selectedData;
        const plusObj = newData[ind + 1];
        if (plusObj && plusObj.checked) {
            newData[ind + 1] = { ...plusObj, duration: e.target.value };
        }
        setData(newData);
    };
    const handleOnSubmit = () => {
        history.push({
            pathname: "/severity",
            state: {
                symptomsList: data,
            }
        })
    }
    var checkboxHidden = data[0]?.duration_number === null || data[0]?.duration_number === "";
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
            <Container>
                <DurationHeaderText>
                    {
                        userType === "myself" ? "Sorry to hear that, can you tell since how long have you been experiencing these symptoms?" :
                            someone_else_gender === "male" ? "Sorry to hear that, can you tell since how long is he having the following symptoms?" :
                                someone_else_gender === "female" ? "Sorry to hear that, can you tell since how long is she having the following symptoms?" :
                                    "Sorry to hear that, can you tell since how long are they experiencing these symptoms?"
                    }
                </DurationHeaderText>
                <DurationContainer>
                    {data.length > 0 &&
                        data.map((item: any, ind: number) => (
                            <div>
                                <FirstRow>
                                    {item.name}
                                </FirstRow>
                                <SecondRow className="secondrow">
                                    <Input
                                        type="number"
                                        value={item.duration_number}
                                        min="1"
                                        onChange={(e) => {
                                            let Inputvalue = e.target.value;
                                            let isWholeNumber = /^[1-9]\d*$/.test(Inputvalue);
                                            if (Inputvalue < 1 || Inputvalue > 999 || !isWholeNumber) {
                                                let newData: any = [...data];
                                                let selectedData: any = newData[ind];
                                                selectedData.duration_number = "";
                                                newData[ind] = selectedData;
                                                const plusObj = newData[ind + 1];
                                                if (plusObj && plusObj.checked) {
                                                    newData[ind + 1] = { ...plusObj, duration: "" };
                                                }
                                                setData(newData);
                                            } else {
                                                let newData: any = [...data];
                                                let selectedData: any = newData[ind];
                                                selectedData.duration_number = Inputvalue;
                                                newData[ind] = selectedData;
                                                const plusObj = newData[ind + 1];
                                                if (plusObj && plusObj.checked) {
                                                    newData[ind + 1] = { ...plusObj, duration: Inputvalue };
                                                }
                                                setData(newData);
                                            }
                                        }}
                                    />
                                    <Select
                                        value={item.duration}
                                        onChange={(e) => {
                                            // handleSelection(e, ind);
                                            selectDuration(ind, e);
                                        }}
                                    >
                                        {dayArr.map((opt) => (
                                            <option value={opt.value}>{opt.label}</option>
                                        ))}
                                    </Select>
                                    {(ind === 0 && data.length > 1 && !checkboxHidden) && (
                                        <ApplyContainer>
                                            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                                            <ApplyToAll>Apply to All</ApplyToAll>
                                        </ApplyContainer>
                                    )}
                                </SecondRow>
                            </div>
                        ))}
                </DurationContainer>
            </Container>
            <SubmitButton onClick={handleOnSubmit} disabled={!enabled}>
                <SubText>Next</SubText>
            </SubmitButton>
        </>

    )
}
export default SymptomsDuration;