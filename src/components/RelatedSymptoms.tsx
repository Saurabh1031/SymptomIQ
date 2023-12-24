import React, { useState } from "react";
import { SearchIcon } from "../assets/icons";
import {
  RelatedSymptomsSubtext,
  RelatedSymptomsCheckBox,
  //RelatedSymptomsData,
  SubText,
  Symptom,
  SymptomsData,
  WelcomeHeading,
  RelatedMap,
  RelatedParent,
  RelatedSymptomsHeading,
  SearchBlock,
  SpanSearchIcon,
  InputSearch,
  SubmitButton,
  CheckBox,
} from "./SymptomComponents";

const Arr = [
  "Body Stiffness",
  "Chils",
  "Cough",
  "Fatigue",
  "Lose of Appetite",
  "Nasal Congestion",
  "Mild Chest Discomfort",
  "Mild Breathing Difficulty",
];
export default function RelatedSymptoms() {
  const [relatedSymptomsArr, setRelatedSymptomsArr] = useState(Arr);
  const [search, setSearch] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [checked, setChecked] = useState(false);
  const handleSubmit = () => {};
  return (
    <div>
      <WelcomeHeading style={{ marginLeft: "20px" }}>
        It must be tough dealing with these symptoms. <br />
        Did she notice any other accompanying symptoms?
      </WelcomeHeading>
      <RelatedSymptomsCheckBox>
        <CheckBox
          type="checkbox"
          checked={checked}
          onClick={(checked) => setChecked(!checked)}
        />
        <RelatedSymptomsSubtext>
          Don't have any related symptoms?
        </RelatedSymptomsSubtext>
      </RelatedSymptomsCheckBox>
      <RelatedSymptomsHeading>
        Choose from suggested symptoms
      </RelatedSymptomsHeading>
      <RelatedParent>
        {relatedSymptomsArr.map((symptom, index) => (
          <RelatedMap key={index}>{symptom}</RelatedMap>
        ))}
      </RelatedParent>
      <SearchBlock style={{ marginLeft: "20px" }}>
        <SpanSearchIcon>{SearchIcon()}</SpanSearchIcon>
        <InputSearch
          placeholder="Search heartburn,stomach cramps etc."
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBlock>
      <SubmitButton disabled={disableButton}>
        <SubText onClick={handleSubmit}>Next</SubText>
      </SubmitButton>
    </div>
  );
}
