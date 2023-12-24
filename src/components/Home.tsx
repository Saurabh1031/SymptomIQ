import React, { forwardRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLeft } from "react-icons/ai";
import CrossSymbol from "../assets/icons/cross-symbol";
//@ts-ignore
import doctorPatientImage from "../assets/images/doctorPatient.png";
import {
  Title,
  CloseIcon,
  Content,
  Button,
  HomeContainer,
  AppContainer,
  ContentHeading,
  Options,
  Option,
  ExtraDetails,
  GenderOptions,
  Gender,
  SympChekerParent,
  SymptomAnalyserTitle,
  ExclamationCircle,
  WelcomeHeading,
  DatePickerBox,
  InputDateIcon,
  Svg,
  Name,
  HiText,
  ContentSubHeading,
  BoldContent,
  HContainer,
} from "./SymptomComponents";
import SecondPage from "./SecondPage";
import Symptoms from "./Symptoms";
import SymptomAnalyzer from "./SympAnalyzer";
import SvaasLoader from "@app/assets/icons/svaasLoader";

export default function Home() {
  const search = window.location.search;
  const name = new URLSearchParams(search).get("name");
  const dob = new URLSearchParams(search).get("dob");
  const gender = new URLSearchParams(search).get("gender");
  const userid = new URLSearchParams(search).get("userid");
  const email = new URLSearchParams(search).get("email");
  console.log(name, dob, gender, userid, email);
  const [homeContainer, setHomeContainer] = useState<boolean>(true);
  const [isHomeClass, setHomeClass] = useState<boolean>(true);
  const [addictDetails, setAddictDetails] = useState({
    smoke: "",
    drink: "",
  });
  const [showPages, setShowPages] = useState({
    firstPage: false,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
    sympAnalyzer: false,
  });
  const [pregnant, setPregnant] = useState("");
  const [date, setDate] = useState();
  const CustomDatePicker = forwardRef(
    ({ value, onClick, onChange }: any, ref: any) => (
      <InputDateIcon
        placeholder="DD-MM-YYYY"
        value={value}
        onClick={onClick}
        onChange={onChange}
        ref={ref}
      ></InputDateIcon>
    )
  );
  const setSecondPageDetails = (name: string, value: string) => {
    if (name === "pregnant") {
      setPregnant(value);
    } else {
      setAddictDetails({ ...addictDetails, [name]: value });
    }
  };

  const handleClick = () => {
    setHomeContainer(false);
    setHomeClass(false);
    setShowPages({ ...showPages, firstPage: true });
    setTimeout(() => {
      setShowPages({ ...showPages, firstPage: false, sympAnalyzer: true });
    }, 5000);
    //currentStep === steps.length && setCompletedStep(true);
  };
  const changeDatePicker = (d: any) => {
    setDate(d);
    setShowPages({ ...showPages, secondPage: true });
  };
  return (
    <AppContainer>
      {homeContainer ? (
        <HContainer>
          <CloseIcon>
            <Svg>{CrossSymbol()}</Svg>
          </CloseIcon>
          <HomeContainer>
            <Title style={{ color: "#494e9d" }}>Disclaimer</Title>
            <Content>
              This Symptom checker is not a substitute for professional medical
              advice or treatment. If you have severe symptoms or suspects a
              serious condition, seek immediate medical attention. While this
              tool can be helpful in identifying potential health concerns,
              don't disregard or delay professional advice.
            </Content>
          </HomeContainer>
          <Button onClick={handleClick} className="enableBg">
            I agree and continue
          </Button>
        </HContainer>
      ) : null}
      {showPages.firstPage ? (
        <Content>
          <WelcomeHeading>
            <HiText>Hi</HiText>
            <br />
            <Name>
              {name?.charAt(0).toUpperCase()}
              {name?.slice(1)}
            </Name>
          </WelcomeHeading>
          <img
            src={doctorPatientImage}
            alt="doctor patient pic"
            style={{ marginTop: "30px", width: "100%" }}
          />
          <ContentHeading style={{ textAlign: "center" }}>
            Welcome to the <BoldContent>SymptomIQ!</BoldContent>
            <ContentSubHeading>
              Please answer the following questions to find out what might be
              causing your symptoms
            </ContentSubHeading>
          </ContentHeading>
        </Content>
      ) : null}
      {showPages.sympAnalyzer ? <SymptomAnalyzer /> : null}
    </AppContainer>
  );
}
