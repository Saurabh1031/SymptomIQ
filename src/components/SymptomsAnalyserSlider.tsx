import React, { useEffect, useState } from "react";
import RelatedSymptoms from "./RelatedSymptoms";
import {
  Button,
  CommonHeader,
  HomeContainer,
  InputSlider,
  SubText,
  SymptomSlidersContainer,
  SymtomTypesContainer,
} from "./SymptomComponents";

type ArrProps = {
  arr: any;
  levels: any;
};

export default function SymptomsAnalyserSlider({ arr, levels }: ArrProps) {
  //abc
  const [sliderValue, setSliderValue] = useState<any>([]);
  const [relatedSympts, setRelatedSympts] = useState<boolean>(false);
  console.log("slidervalue", sliderValue);
  const handleChangeSliderValue = (e: any, ind: number) => {
    const newObj: any = [...sliderValue];
    newObj[ind] = { ...newObj[ind], val: e.target.value };
    setSliderValue(newObj);
  };
  useEffect(() => {
    const newData = arr.map((data: any) => ({ label: data, val: 0 }));
    setSliderValue(newData);
  }, []);
  return (
    <div>
      {relatedSympts ? (
        <RelatedSymptoms />
      ) : (
        <>
          <CommonHeader>How severe are these symptoms?</CommonHeader>
          {arr.map(({ label: item }: any, ind: number) => (
            <SymptomSlidersContainer>
              <div>{item}</div>
              <InputSlider
                type="range"
                min="0"
                max="100"
                value={sliderValue[ind]?.val}
                step="50"
                onInput={(e) => handleChangeSliderValue(e, ind)}
                className="sliderBlue"
              />
              <SymtomTypesContainer>
                <SubText>
                  {levels[item] ? levels[item][0] : levels.default[0]}
                </SubText>
                <SubText>
                  {levels[item] ? levels[item][1] : levels.default[1]}
                </SubText>
                <SubText>
                  {levels[item] ? levels[item][2] : levels.default[2]}
                </SubText>
              </SymtomTypesContainer>
            </SymptomSlidersContainer>
          ))}
          <HomeContainer>
            <Button
              style={{ background: "#111e69" }}
              onClick={() => setRelatedSympts(true)}
            >
              Next
            </Button>
          </HomeContainer>
        </>
      )}
    </div>
  );
}
