//@ts-nocheck
import { useHistory } from "react-router";
import NewHeader from "../../components/svaas-header"
import Stepper from "@app/components/stepper/Stepper";
import { useState } from "react";
import { AboutSideContainer, AnalyzButton, BottomContainer, ButtonRow, ButtonWrapper, Container, DashedLine, Label, MainContainer, OuestionWrapper, Para, Question, SidenavContainer, SmokeButton, SmokeTypeSideContainer, StepperContainer, SubText, SubmitButton } from "./habits-component";
import { WarningIcon } from "@app/assets/icons";
import { update_alcohol, update_smoker } from "@app/@services";
import SvaasLoader from "@app/assets/icons/svaasLoader";
import SideNav from "@app/components/side-nav/side-nav";
import ErrorPage from "@app/components/error-page/error-page";
const Habits = () => {
    const history = useHistory();
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(3);
    const [completedStep, setCompletedStep] = useState(false);
    const [smokeType, setSmokeType] = useState<string>("");
    const [alcoholType, setAlcoholType] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [showAboutSmoke, setShowAboutSmoke] = useState<boolean>(false);
    const [showAboutAlcohol, setShowAboutAlcohol] = useState<boolean>(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const userType = localStorage.getItem("userType") || "myself";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    const SmokeTypeFirstRow = [
        "Former smoker",
        "Social smoker"
    ];
    const SmokeTypeSecondRow = [
        "Regular smoker",
        "Non smoker"
    ];
    const AlcoholTypeFirstRow = [
        "Former alcoholic",
        "Social drinker"
    ];
    const AlcoholTypeSecondRow = [
        "Regular drinker",
        "Non alcoholic"
    ];
    const handleSubmit = async () => {
        if (smokeType && alcoholType) {
            setLoading(true);
            setErrorScreen(false);
            await update_smoker(smokeType).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setLoading(false);
                    update_alcohol(alcoholType).then((resp) => {
                        if (resp.status === 200 || resp.status === 201) {
                            history.push({
                                pathname: "/outcome"
                            })
                            setLoading(false);
                        } else {
                            setLoading(false);
                            setErrorScreen(true);
                            //console.log("Alcohol API failed");
                        }
                    })
                } else {
                    setLoading(false);
                    setErrorScreen(true);
                    //console.log("API Failed");
                }
            })
        }
    }
    return (
        <>
            <NewHeader
                className="specialities"
                title="BodyCheck"
                showBackButton={true}
                onBack={() => {
                    history.push({ pathname: "/history" });
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
                    <MainContainer>
                        {loading && <SvaasLoader />}
                        <Container>
                            <OuestionWrapper>
                                <Question>
                                    {
                                        userType === "myself" ? "Do you usually smoke ?" :
                                            someone_else_gender === "male" ? "Does he usually smoke ?" :
                                                someone_else_gender === "female" ? "Does she usually smoke ?" :
                                                    "Do they usually smoke ?"
                                    }
                                </Question>
                                <div onClick={() => setShowAboutSmoke(true)}><WarningIcon /></div>
                            </OuestionWrapper>
                            <ButtonWrapper>
                                <ButtonRow>
                                    {SmokeTypeFirstRow.map((data: any) => {
                                        return (
                                            <>
                                                <SmokeButton
                                                    //color={smokeType === data ? "#494e9d" : "#5A5A5A"}
                                                    className={smokeType === "" ? "" : smokeType === data ? "selected" : "disabled"}
                                                    onClick={() => {
                                                        setSmokeType(data);
                                                        //submitSmokeType();
                                                    }}
                                                >
                                                    {data}
                                                </SmokeButton>
                                            </>
                                        );
                                    })}
                                </ButtonRow>
                                <ButtonRow>
                                    {SmokeTypeSecondRow.map((data: any) => {
                                        return (
                                            <>
                                                <SmokeButton
                                                    //color={smokeType === data ? "#494e9d" : "#5A5A5A"}
                                                    className={smokeType === "" ? "" : smokeType === data ? "selected" : "disabled"}
                                                    onClick={() => {
                                                        setSmokeType(data);
                                                        //submitSmokeType();
                                                    }}
                                                >
                                                    {data}
                                                </SmokeButton>
                                            </>
                                        );
                                    })}
                                </ButtonRow>
                            </ButtonWrapper>
                        </Container>
                        <DashedLine />
                        <Container>
                            <OuestionWrapper>
                                <Question>
                                    {
                                        userType === "myself" ? "Do you usually consume alcohol ?" :
                                            someone_else_gender === "male" ? "Does he usually consume alcohol ?" :
                                                someone_else_gender === "female" ? "Does she usually consume alcohol ?" :
                                                    "Do they usually consume alcohol ?"
                                    }
                                </Question>
                                <div onClick={() => setShowAboutAlcohol(true)}><WarningIcon /></div>
                            </OuestionWrapper>
                            <ButtonWrapper>
                                <ButtonRow>
                                    {AlcoholTypeFirstRow.map((data: any) => {
                                        return (
                                            <>
                                                <SmokeButton
                                                    className={alcoholType === "" ? "" : alcoholType === data ? "selected" : "disabled"}
                                                    onClick={() => {
                                                        setAlcoholType(data);
                                                        //submitAlcholType();
                                                    }}
                                                >
                                                    {data}
                                                </SmokeButton>
                                            </>
                                        );
                                    })}
                                </ButtonRow>
                                <ButtonRow>
                                    {AlcoholTypeSecondRow.map((data: any) => {
                                        return (
                                            <>
                                                <SmokeButton
                                                    className={alcoholType === "" ? "" : alcoholType === data ? "selected" : "disabled"}
                                                    onClick={() => {
                                                        setAlcoholType(data);
                                                        //submitAlcholType();
                                                    }}
                                                >
                                                    {data}
                                                </SmokeButton>
                                            </>
                                        );
                                    })}
                                </ButtonRow>
                            </ButtonWrapper>
                        </Container>
                    </MainContainer>
                    <SubmitButton disabled={!smokeType || !alcoholType} onClick={handleSubmit}>
                        <SubText>Analyze</SubText>
                    </SubmitButton>
                </>
            }
            {showAboutSmoke ?
                <SidenavContainer>
                    <SideNav
                        className="closeClassName"
                        maxHeight="100%"
                        minHeight="70%"
                        isSpaceNeeded={true}
                        onClose={() => {
                            setShowAboutSmoke(false);
                        }}
                        title=""
                        closeClassName={"open"}>
                        <AboutSideContainer>
                            <div><Label>Former Smoker: </Label><Para> Smoked at least 100 cigarettes in his or her lifetime but who had quit smoking.</Para></div>
                            <div><Label>Social Smoker: </Label><Para>Smoked at least 100 cigarettes in his or her lifetime, who smokes now, but does not smoke more than once a week.</Para></div>
                            <div><Label>Regular Smoker: </Label><Para>Smoked at least 100 cigarettes in his or her lifetime, and who now smokes more than once a week.</Para></div>
                            <div><Label>Non Smoker: </Label><Para>Never smoked or smoked less than 100 cigarettes in their lifetime.</Para></div>
                        </AboutSideContainer>
                    </SideNav>
                </SidenavContainer> : null}
            {showAboutAlcohol ?
                <SidenavContainer>
                    <SideNav
                        className="closeClassName"
                        maxHeight="100%"
                        minHeight="70%"
                        isSpaceNeeded={true}
                        onClose={() => {
                            setShowAboutAlcohol(false);
                        }}
                        title=""
                        closeClassName={"open"}>
                        <AboutSideContainer>
                            <div><Label>Former Alcoholic: </Label><Para>Consumed atleast 12 drinks in his or her lifetime but no drinks in the past year.</Para></div>
                            <div><Label>Social Drinker: </Label><Para>Average consuption of 3 drinks or fewer per week.</Para></div>
                            <div><Label>Regular Drinker: </Label><Para>Average consuption of more than 7 drinks per week for women; more than 14 drinks per week for men.</Para></div>
                            <div><Label>Non Alcoholic: </Label><Para>Never consumed alcohol or had fewer than 12 drinks in lifetime.</Para></div>
                            <div>
                                <Label>Definition of a drink:</Label>
                                <ul>
                                    <li><Para>12 ounces (355 mL) of beer with 5% alcohol content</Para></li>
                                    <li><Para>8 ounces (237 mL) of malt liquor with 7% alcohol content</Para></li>
                                    <li><Para>5 ounces (148 mL) of wine with 12% alcohol content</Para></li>
                                    <li><Para>1.5 ounces (44 mL) or a "shot" of 80-proof (40% alcohol content) distilled spirits or liquor (e.g., gin, rum, vodka, whiskey)</Para></li>
                                </ul>
                            </div>
                        </AboutSideContainer>
                    </SideNav>
                </SidenavContainer> : null}
        </>
    );
};
export default Habits;
