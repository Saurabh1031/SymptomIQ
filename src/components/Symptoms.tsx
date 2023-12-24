import React, { useState } from "react";
//@ts-ignore
import notfoundImage from "../assets/images/notfound.png";

import {
  ContentHeading,
  DisplaySearchPains,
  InputSearch,
  NotFoundImg,
  NotFoundMessage,
  SearchBlock,
  SearchNotFoundContent,
  SearchedBlock,
  SelectedSymptom,
  SelectedSymptoms,
  SpanCross,
  SpanSearchIcon,
  SubText,
  SubmitButton,
  Svg,
  Symptom,
  SymptomName,
  SymptomsContainer,
  SymptomsData,
  SymptomsFlex,
  SymptomsParentContainer,
} from "./SymptomComponents";
import SymptomsAnalyser from "./SymptomsAnalyser";
import {
  Bodyache,
  Fever,
  Headache,
  LooseMotions,
  Nausea,
  RunningNose,
  SoreThroat,
  StomachPain,
  SearchIcon,
} from "../assets/icons";

export default function Symptoms() {
  const [search, setSearch] = useState<string>("");
  const [arr, setArr] = useState<any>([]);
  const [symtomAnalyser, setSymtomAnalyser] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [enableBg, setEnableBg] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [symptomType, setSymptomType] = useState({ type: "" });
  const [symptomsArr, setSymptomsArr] = useState<any>([]);
  const [notfound, setNotfound] = useState<boolean>(false);
  const symptoms = [
    { icon: Fever, name: "Fever" },
    { icon: Bodyache, name: "Body Stiffness" },
    { icon: Headache, name: "Headache" },
    { icon: Nausea, name: "Nausea" },
    { icon: StomachPain, name: "Stomach Pain" },
    { icon: LooseMotions, name: "Loose Motions" },
    { icon: RunningNose, name: "Runny Nose" },
    { icon: SoreThroat, name: "Sore Throat" },
  ];
  const levels = {
    Fever: ["99.5F-100.9F", "101F-102.9F", ">103F"],
    default: ["Mild", "Moderate", "Severe"],
  };
  console.log("symsarr", symptomsArr);
  const [pains, setPains] = useState([
    "Pain",
    "Leg pain",
    "Ear pain",
    "Arm pain",
    "Chest pain",
    "Jaw pain",
    "Hip pain",
    "Foot pain",
    "Hand pain",
  ]);
  const removeFromArr = (res: number) => {
    let arrData = [...arr];
    arrData = arrData.filter((data) => data !== res);
    setArr(arrData);
    setDisableButton(!arrData.length);
    console.log("remove", arr.length);
  };
  const selectSymptom = (res: any) => {
    if (arr.includes(res)) return;
    let selectedSymptom = symptoms.find((sign) => sign.name === res);
    let indications: any = [...symptomsArr];
    indications = indications.concat(selectedSymptom);
    setSymptomsArr(indications);
    setDisableButton(false);
    setSymptomType({ type: res });
    console.log("arrlen", arr.length);
  };
  const selectPain = (res: any) => {
    let arrData: any = [...arr];
    let signs: any = [...pains];
    let sign = signs.filter((symptom: any) => symptom === res);
    arrData = arrData.concat(sign);
    setArr(arrData);
    setDisableButton(false);
    setSymptomType({ type: res });
    setSearch("");
  };
  const handleSubmit = () => {
    setSymtomAnalyser(true);
  };
  const filteredPains = (pains: any, search: any) => {
    return pains.filter((item: any) => {
      if (search === "") {
        return item;
      } else if (item.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
  };
  return (
    <>
      {symtomAnalyser ? (
        <SymptomsAnalyser arr={arr} levels={levels} symptomsArr={symptomsArr} />
      ) : (
        <SymptomsParentContainer>
          <ContentHeading>
            Can you tell what symptoms are bothering her?
          </ContentHeading>
          <SubText style={{ marginTop: "10px" }}>
            Choose from common symptoms
          </SubText>
          <SymptomsContainer>
            {symptoms.map((symptom, id) => (
              <SymptomsData>
                <Symptom
                  onClick={(event) => {
                    if (event.currentTarget.classList.contains("selected")) {
                      //event.currentTarget.classList.remove("selected");
                      event.currentTarget.firstElementChild?.setAttribute(
                        "src",
                        symptom.name
                      );
                    } else {
                      event.currentTarget.classList.add("selected");
                      event.currentTarget.firstElementChild?.setAttribute(
                        "src",
                        symptom.name
                      );
                    }
                    selectSymptom(symptom.name);
                  }}
                  key={id}
                >
                  <Svg>{symptom.icon()}</Svg>
                  <SymptomName>{symptom.name}</SymptomName>
                </Symptom>
              </SymptomsData>
            ))}
          </SymptomsContainer>
          <SubText style={{ marginTop: "10px" }}>
            Any other symptom you wish to add?
          </SubText>
          <SearchBlock>
            <div>{SearchIcon()}</div>
            <InputSearch
              placeholder="Search heartburn,stomach cramps etc."
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBlock>
          {arr.length ? (
            <div>
              <SelectedSymptoms>
                <SubText>Symptoms added</SubText>
                <SymptomsFlex>
                  {arr.length > 0 &&
                    arr.map((result: any, ind: any): any => (
                      <SelectedSymptom key={ind}>
                        {result}
                        <SpanCross onClick={() => removeFromArr(result)}>
                          X
                        </SpanCross>
                      </SelectedSymptom>
                    ))}
                </SymptomsFlex>
              </SelectedSymptoms>
            </div>
          ) : null}
          <SubmitButton disabled={disableButton}>
            <SubText onClick={handleSubmit}>Next</SubText>
          </SubmitButton>
          <SearchedBlock>
            {search &&
              filteredPains(pains, search).map((res: any, id: number) => (
                <DisplaySearchPains key={id} onClick={() => selectPain(res)}>
                  {res}
                </DisplaySearchPains>
              ))}
            {(search || !filteredPains(pains, search).length) && (
              <>
                <NotFoundImg src={notfoundImage} />
                <NotFoundMessage>Search not found</NotFoundMessage>
                <SearchNotFoundContent>
                  Try again or seek medical advice if you have concerns about
                  your health.
                </SearchNotFoundContent>
              </>
            )}
          </SearchedBlock>
        </SymptomsParentContainer>
      )}
    </>
  );
}
