import React, { useEffect, useState } from "react";
import {
  Button,
  FirstRow,
  HomeContainer,
  Input,
  Label,
  SecondRow,
  SymptomsAnalyserContainer,
} from "./SymptomComponents";
import SymptomsAnalyserSlider from "./SymptomsAnalyserSlider";

type ArrProps = {
  arr: any;
  levels: any;
  symptomsArr: any;
};
function SymptomsAnalyser({ arr, levels, symptomsArr }: ArrProps) {
  //console.log("arr", arr);
  const [data, setData] = useState([]);
  const [symAnalyseSlider, setSymAnalyseSlider] = useState(false);
  const [btnDisableBg, setBtnDisableBg] = useState(false);
  const onlySymptomsNames = symptomsArr.map((item: any) => item.name);
  //console.log("newArr", newArr);
  useEffect(() => {
    const newArr = [...onlySymptomsNames, ...arr];
    const arrData: any = newArr.map((a: any) => {
      return {
        label: a,
        num: null,
        day: "",
        checked: false,
      };
    });
    setData(arrData);
  }, []);
  const dayArr = [
    { label: "Select", value: "" },
    { label: "Days", value: "days" },
    { label: "Weeks", value: "weeks" },
    { label: "Months", value: "months" },
  ];
  // const handleCheckBox = (index: any) => {
  //   console.log("index", index);
  // };
  // const handleSelection = (event: any, index: number) => {
  //   setSelectedDuration(event.target.value);
  //   setInputArray((prev: any) => [
  //     ...prev,
  //     { value: inputValue, duration: event.target.value },
  //   ]);
  // };
  const handleCheckBox = (index: number, event: any) => {
    let arr: any = [...data];
    let aboveData: any = data[index];
    //console.log(aboveData[index]);
    data.map((_, ind: number) => {
      if (ind > 0) {
        return (arr[ind] = {
          ...arr[ind],
          num: event.target.checked ? aboveData.num : "",
          day: event.target.checked ? aboveData.day : "",
        });
      }
    });
    setData(arr);
    console.log(arr);
  };
  const selectDuration = (ind: any, e: any) => {
    let newData: any = [...data];
    let selectedData: any = newData[ind];
    selectedData.day = e.target.value;
    newData[ind] = selectedData;
    const plusObj = newData[ind + 1];
    if (plusObj && plusObj.checked) {
      newData[ind + 1] = { ...plusObj, day: e.target.value };
    }
    setData(newData);
  };
  const enableButton = () => {
    const val = data.filter((item: any) => item.num && item.day);
    console.log("datalen", data);
    console.log("vallen", val);
    if (val.length === data.length) {
      return false;
    }
    return true;
  };
  return (
    <div>
      {symAnalyseSlider ? (
        <SymptomsAnalyserSlider arr={data} levels={levels} />
      ) : (
        <>
          {data.length > 0 &&
            data.map((item: any, ind: number) => (
              <SymptomsAnalyserContainer>
                <FirstRow>
                  <Label>{item.label}</Label>
                </FirstRow>
                <SecondRow className="secondrow">
                  <input
                    type="number"
                    value={item.num}
                    onChange={(e) => {
                      let newData: any = [...data];
                      let selectedData: any = newData[ind];
                      selectedData.num = e.target.value;
                      newData[ind] = selectedData;
                      const plusObj = newData[ind + 1];
                      if (plusObj && plusObj.checked) {
                        newData[ind + 1] = { ...plusObj, day: e.target.value };
                      }
                      setData(newData);
                    }}
                    style={{ width: "30%" }}
                  />
                  <select
                    value={item.day}
                    onChange={(e) => {
                      // handleSelection(e, ind);
                      selectDuration(ind, e);
                    }}
                  >
                    {dayArr.map((opt) => (
                      <option value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {ind === 0 && (
                    <div>
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckBox(ind, e)}
                      />
                      <span>Apply to All</span>
                    </div>
                  )}
                </SecondRow>
              </SymptomsAnalyserContainer>
            ))}
          <HomeContainer>
            <>{console.log(enableButton())}</>
            <Button
              style={{ marginTop: "50px" }}
              disabled={enableButton()}
              onClick={() => setSymAnalyseSlider(true)}
            >
              Next
            </Button>
          </HomeContainer>
        </>
      )}
    </div>
  );
}

export default SymptomsAnalyser;
