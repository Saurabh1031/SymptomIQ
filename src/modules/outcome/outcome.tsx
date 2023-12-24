//@ts-nocheck
import { useHistory } from "react-router";
import NewHeader from "../../components/svaas-header"
import Stepper from "@app/components/stepper/Stepper";
import { useEffect, useState } from "react";
import { Amount, AttentionCard, AttentionDiv, AttentionText, BookConsult, BookConsultCTA, BottomCard, BottomCardContainer, BottomContainer, ButtonContainer, Card, CardContainer, CardDescription, CardTitle, CardsContainer, CauseHeading, CausesContainer, CloseTest, ConsultFee, Description, Details, DetailsCard, DetailsCardCont, DetailsContainer, DetailsExp, DetailsLowerPara, DetailsName, DetailsPara, DetailsProfileDiv, DetailsQual, DetailsSpecialist, DiseaseName, DocListHeading, DoctorAvailableContainer, DoctorIconWrapper, DoctorName, Emergency, EmergencyDiv, EmergencyText, HeaderContainer, HeaderIcon, HeaderName, IconContainer, IconWrapper, LoaderContainer, LogoWrapper, LowerDetails, MainContainer, PerConsult, PerSession, ProfileDiv, QualContainer, Qualifications, RetakeTest, SideContainer, SidenavContainer, SpecialityContainer, SpecialityDiv, SpecialityTag, SpecialityTitle, SplashBody, SplashContainer, SplashDesc, SplashSliderContainer, SplashTitle, StepperContainer, TitleText, TopCard, ViewAll } from "./outcome-components";
import { Bacteria, DoctorIcon, HalfCircle, HalfCircleBg } from "@app/assets/icons";
import { getDoctorUsingFetch, getFindSpecialitiesDoc, get_chat_results } from "@app/@services";
import { HomeIcon } from "@app/assets/icons";
import ErrorPage from "@app/components/error-page/error-page";
import SideNav from "@app/components/side-nav/side-nav";
import Message from "@app/assets/icons/message";
import Location from "@app/assets/icons/location";
import VideoCall from "@app/assets/icons/videocall";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeavingMidway from "@app/components/leaving-popup/leaving-popup";
import LoaderScreen from "@app/components/loader-screen";
const Outcome = () => {
    const history = useHistory();
    const steps = ["About", "Symptoms", "History", "Outcome"];
    const [currentStep, setCurrentStep] = useState<number>(4);
    const [completedStep, setCompletedStep] = useState(true);
    const [userData, setUserData] = useState<any>({});
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [errorScreen, setErrorScreen] = useState<boolean>(false);
    const [showAboutDisease, setShowAboutDisease] = useState<boolean>(false);
    const [diseaseName, setDiseaseName] = useState<any>("");
    const [diseaseDesc, setDiseaseDesc] = useState<any>("");
    const [onlineDoctorsList, setOnlineDoctorsList] = useState<any>([]);
    const [specialization, setSpecialization] = useState<any>();
    const [leavingMidway, setLeavingMidway] = useState<boolean>(false);
    const [startAnalyze, setStartAnalyze] = useState(false);
    const [progress, setProgress] = useState(0);
    const userType = localStorage.getItem("userType") || "";
    const userId = localStorage.getItem("userid") || "";
    const someone_else_gender = localStorage.getItem("someone_else_gender") || "";
    useEffect(() => {
        getUserOutcome();
        //getDoctorsList();
    }, []);
    const sliderProfile = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 4000,
    };
    const handleRetakeTest = () => {
        history.push({
            pathname: "/home"
        })
    }
    const handleCloseClick = () => {
        setLeavingMidway(true);
    }
    const CapitalizeFirstnLastName = (firstname: string, lastname: string) => {
        let firstLetter = firstname && firstname.length >= 1 && firstname[0].toUpperCase();
        let lastLetter = lastname && lastname.length >= 1 && lastname[0].toUpperCase();
        return `${firstLetter}${lastLetter}`
    }
    const getUserOutcome = async () => {
        setLoading(true);
        setStartAnalyze(true);
        setProgress(0);
        setErrorScreen(false);
        await get_chat_results().then((res) => {
            if (res && (res.status == 201 || res.status == 200)) {
                setUserData(res.data);
                setCount(res.data?.condtions?.conditions?.length);
                getDoctorsList(res.data?.specialities);
                setLoading(false);
                setStartAnalyze(false);
                setProgress(0);
            } else {
                setLoading(false);
                setStartAnalyze(false);
                setProgress(0);
                setErrorScreen(true);
                //console.log("API failed");
            }
        });
    };
    const getDoctorsList = async (specializations: any) => {
        const data = await getDoctorUsingFetch(specializations[0]);
        let onlineDoctors = data?.getDoctors?.data && data?.getDoctors?.data.filter((doctor: any) => doctor?.consultationType.toLowerCase() === "online")
        onlineDoctors = onlineDoctors?.length > 2 ? onlineDoctors.splice(0, 3) : onlineDoctors;
        setOnlineDoctorsList(onlineDoctors);
        setSpecialization(specializations[0]);
        // getFindSpecialitiesDoc().then((res) => {
        //     console.log("doctors data ", res);
        // })
    }
    //console.log("onlinedoctorsList: ", onlineDoctorsList);
    const handleCardClick = (data: any) => {
        setDiseaseName(data?.condition_name);
        setDiseaseDesc(data?.long_description);
        setShowAboutDisease(true);
    }
    const handleViewAllSpecialists = () => {
        sessionStorage.clear();
        window.location.href = `${process.env.REACT_APP_HOST}app/svaasportal/doctors?specialization=${specialization}&fromPage=healthBot&profile=${userId}`;
    }
    const handleBookConsultationClick = (doctorDetails: any) => {
        sessionStorage.clear();
        const id = doctorDetails?.erxDoctorId || 0;
        window.location.href = `${process.env.REACT_APP_HOST}app/svaasportal/doctors/doctorDetails/${id}?fromPage=healthBot&bookAgain=true&profile=${userId}`;
    }
    return (
        <>
            <NewHeader
                className="specialities"
                title="SymptomIQ"
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
                <ErrorPage /> : loading ?
                    <LoaderScreen startAnalyze={startAnalyze} setStartAnalyze={setStartAnalyze} setProgress={setProgress} progress={progress} /> :
                    <>
                        <MainContainer>
                            <TitleText>
                                {
                                    userType === "myself" ? "Based on your selected symptoms, it is possible that you may be experiencing any of the below conditions:" :
                                        someone_else_gender === "male" ? "Based on your selected symptoms, it is possible that he may be experiencing any of the below conditions:" :
                                            someone_else_gender === "female" ? "Based on your selected symptoms, it is possible that she may be experiencing any of the below conditions:" :
                                                "Based on your selected symptoms, it is possible that they may be experiencing any of the below conditions:"
                                }
                            </TitleText>
                            {userData?.emergency?.toUpperCase() === "YES" ? (
                                <Emergency>
                                    <EmergencyDiv>
                                        <EmergencyText>
                                            Some of the symptoms you mentioned can be caused by serious
                                            medical conditions. It is recommended to visit a hospital or speak
                                            with a healthcare professional as soon as you can to rule out
                                            any potential emergencies and receive appropriate treatment
                                            immediately.
                                        </EmergencyText>
                                    </EmergencyDiv>
                                    <IconContainer>
                                        <HalfCircle strokeColor="#F4939A" fillColor="#F4939A" />
                                    </IconContainer>
                                </Emergency>
                            ) : null}
                            <CausesContainer>
                                <CauseHeading>Possible Causes ({count})</CauseHeading>
                                <SplashSliderContainer>
                                    <Slider {...sliderProfile}>
                                        {userData?.condtions?.conditions?.map((data: any) => {
                                            let description = data.short_description || "";
                                            if (description.length > 50) {
                                                description = description.substring(0, 50) + "...";
                                            }
                                            return (
                                                <Card onClick={() => { /* handleCardClick(data) */ }}>
                                                    <SplashBody>
                                                        <LogoWrapper>
                                                            <Bacteria />
                                                        </LogoWrapper>
                                                        <CardTitle>{data.condition_name}</CardTitle>
                                                        <CardDescription>{description}</CardDescription>
                                                    </SplashBody>
                                                </Card>
                                            );
                                        })}
                                    </Slider>
                                </SplashSliderContainer>
                            </CausesContainer>
                            <SpecialityContainer>
                                <SpecialityTitle>Speciality to Consult</SpecialityTitle>
                                {userData?.specialities && userData?.specialities?.length ?
                                    <SpecialityDiv>
                                        <IconWrapper>
                                            <HalfCircleBg />
                                        </IconWrapper>
                                        <DoctorIconWrapper>
                                            <DoctorIcon />
                                        </DoctorIconWrapper>
                                        <SpecialityTag>{userData.specialities[0]}</SpecialityTag>
                                    </SpecialityDiv> :
                                    null}
                            </SpecialityContainer>
                        </MainContainer>
                        <BottomContainer>
                            <ButtonContainer>
                                <RetakeTest onClick={handleRetakeTest}>Retake Test</RetakeTest>
                                <CloseTest onClick={() => { }}>Close</CloseTest>
                            </ButtonContainer>
                        </BottomContainer>
                    </>}
            {showAboutDisease ?
                <SidenavContainer>
                    <SideNav
                        className="closeClassName"
                        maxHeight="100%"
                        minHeight="70%"
                        isSpaceNeeded={true}
                        onClose={() => {
                            setShowAboutDisease(false);
                        }}
                        title=""
                        closeClassName={"open"}>
                        <SideContainer>
                            <DiseaseName>{diseaseName}</DiseaseName>
                            <Description>{diseaseDesc}</Description>
                        </SideContainer>
                    </SideNav>
                </SidenavContainer> : null}
            {leavingMidway ?
                <LeavingMidway onclose={setLeavingMidway} /> : null}
        </>
    );
};
export default Outcome;
