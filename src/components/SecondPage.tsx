import React, { useState } from "react";
import {
  AppContainer,
  ContentHeading,
  Gender,
  GenderContainer,
  GenderOptions,
  SecondPageContainer,
  SympChekerParent,
  SymptomAnalyserTitle,
} from "./SymptomComponents";
//import SmokeChecker from "./SmokeChecker";

type Props = {
  selectedGender: string;
  //setSecondPageDetails: any;
  selectedUserValue: string;
  addictDetails: any;
  showPages: any;
  setShowPages: any;
  extraDetails: any;
  setExtraDetails: any;
  setPersonDetails: any;
  setShowDetails: any;
  currentStep: any;
  setCurrentStep: any;
  completedStep: any;
};
export default function SecondPage({
  selectedUserValue,
  selectedGender,
  //setSecondPageDetails,
  addictDetails,
  showPages,
  setShowPages,
  extraDetails,
  setExtraDetails,
  setPersonDetails,
  setShowDetails,
  currentStep,
  setCurrentStep,
  completedStep,
}: Props) {
  const options = ["Pregnant", "Not Pregnant"];
  const [pregnant, setPregnant] = useState("");

  return (
    <>
      <SecondPageContainer>
        {selectedGender === "Female" ? (
          <GenderContainer>
            <ContentHeading>Pregnancy Status</ContentHeading>
            <GenderOptions>
              {options.map((option) => (
                <Gender
                  key={option}
                  className={pregnant === option ? "selcted" : ""}
                  onClick={() => {
                    //   setSecondPageDetails("pregnant", option);
                    setPregnant(option);
                    setExtraDetails({ ...extraDetails, gender: "" });
                    setShowPages({
                      ...showPages,
                      secondPage: false,
                      sympAnalyzer: false,
                      thirdPage: true,
                    });
                    setPersonDetails(false);
                    setShowDetails(false);
                    setCurrentStep((currentStep: any) => currentStep + 1);
                  }}
                >
                  {option}
                </Gender>
              ))}
            </GenderOptions>
          </GenderContainer>
        ) : null}
        {/* {selectedGender === "Male" ? (
        <SmokeChecker
          value={addictDetails?.smoke}
          saveAddictDetails={setSecondPageDetails}
        />
      ) : null} */}
      </SecondPageContainer>
    </>
  );
}
