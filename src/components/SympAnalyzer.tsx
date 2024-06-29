import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AgeParent,
  AgeTitle,
  ContentHeading,
  DatePickerBox,
  DetailsHeading,
  ExtraDetails,
  Gender,
  GenderOptions,
  GenderTitle,
  Heading,
  Input,
  InputYears,
  Option,
  Options,
  SpanYears,
  SympChekerParent,
  SymptomAnalyserTitle,
} from "./SymptomComponents";
import { AiOutlineLeft } from "react-icons/ai";
import Stepper from "./stepper/Stepper";
import SecondPage from "./SecondPage";
import Symptoms from "./Symptoms";

export default function SymptomAnalyzer() {
  console.log(2121);
  const steps = ["About", "Symptoms", "History", "Outcome"];
  const options = ["My Self", "Someone Else", "Shreya", "Harshit"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedStep, setCompletedStep] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [personDetails, setPersonDetails] = useState(true);
  const genderOptions = ["Male", "Female", "Others"];
  const [chatId, setChatId] = useState("");
  const [showPages, setShowPages] = useState({
    firstPage: false,
    secondPage: false,
    thirdPage: false,
    sympAnalyzer: false,
    fourthPage: false,
  });
  const [details, setDetails] = useState({
    type: "",
  });
  const [extraDetails, setExtraDetails] = useState({ age: "", gender: "" });
  const [addictDetails, setAddictDetails] = useState({
    smoke: "",
    drink: "",
  });
  const handleGender = (gender: any) => {
    if (gender === "Female") {
      setShowPages({
        ...showPages,
        firstPage: false,
        secondPage: true,
      });
      setExtraDetails({
        ...extraDetails,
        gender: gender,
      });
    } else if (gender === "Male") {
      setShowPages({
        ...showPages,
        firstPage: false,
        secondPage: false,
        sympAnalyzer: false,
        thirdPage: true,
      });
      setPersonDetails(false);
      setShowDetails(false);
      setExtraDetails({
        ...extraDetails,
        gender: gender,
      });
    }
  };
  let dummyObj = {
    user_id: "123",
    tenant: "svaas",
    channel: "app",
    self_flag: true,
    gender: "Male",
    age: "25",
    is_pregnant: true,
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .post("https://svaaschatbot.azurewebsites.net/api/chat/create_chat", {
        user_id: "123",
        tenant: "svaas",
        channel: "app",
        self_flag: true,
        gender: "Male",
        age: "25",
        is_pregnant: true,
      })
      .then((res) => console.log(res.status, "res"))
      .catch((err) => console.log(err, "err"));

    // const axios = require("axios");
    // let data = JSON.stringify({
    //   user_id: "123",
    //   tenant: "svaas",
    //   channel: "app",
    //   self_flag: true,
    //   gender: "Male",
    //   age: "25",
    //   is_pregnant: true,
    // });

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://svaaschatbot.azurewebsites.net/api/chat/create_chat",
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios
    //   .request(config)
    //   .then((response: any) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <SympChekerParent>
        <AiOutlineLeft />
        <SymptomAnalyserTitle>BodyCheck</SymptomAnalyserTitle>
      </SympChekerParent>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        completedStep={completedStep}
      />
      {personDetails ? (
        <>
          <Heading>Who are you checking symptoms for?</Heading>
          <Options>
            {options.map((option, ind) => (
              <Option
                key={ind}
                className={details.type === option ? "selected" : ""}
                onClick={() => {
                  setDetails({ type: option });
                  setShowDetails(true);
                  setExtraDetails({ age: "", gender: "" });
                }}
              >
                {option}
              </Option>
            ))}
          </Options>
        </>
      ) : null}
      {showDetails && (
        <ExtraDetails>
          <DetailsHeading>Please describe more about them..</DetailsHeading>
          <div
            style={{ border: "0.5px solid #dfdede", marginTop: "10px" }}
          ></div>
          <AgeTitle>Age</AgeTitle>
          <AgeParent>
            <InputYears
              value={extraDetails.age}
              onChange={(e) =>
                setExtraDetails({ ...extraDetails, age: e.target.value })
              }
            />
            <SpanYears>Years</SpanYears>
          </AgeParent>
          <GenderTitle>Gender</GenderTitle>
          <GenderOptions>
            {genderOptions.map((gender) => (
              <Gender
                key={gender}
                className={gender === extraDetails.gender ? "selcted" : ""}
                onClick={() => handleGender(gender)}
              >
                {gender}
              </Gender>
            ))}
          </GenderOptions>
          {showPages.secondPage ? (
            <SecondPage
              selectedGender={extraDetails.gender}
              selectedUserValue={details.type}
              addictDetails={addictDetails}
              //   setSecondPageDetails={setSecondPageDetails}
              setShowPages={setShowPages}
              showPages={showPages}
              extraDetails={extraDetails}
              setExtraDetails={setExtraDetails}
              setPersonDetails={setPersonDetails}
              setShowDetails={setShowDetails}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              completedStep={completedStep}
            />
          ) : null}
        </ExtraDetails>
      )}
      {showPages.thirdPage ? <Symptoms /> : null}
    </div>
  );
}
