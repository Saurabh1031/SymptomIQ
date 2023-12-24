import React, { useState } from "react";
import {
  ContentHeading,
  Gender,
  GenderOptions,
  SmokeContainer,
} from "./SymptomComponents";
type Props = {
  value: string;
  saveAddictDetails: any;
};
function SmokeChecker({ value, saveAddictDetails }: Props) {
  const smokeOptions = ["Yes", "No"];
  const [selectedOptions, setSelectedOptions] = useState<any>({
    smoke: "",
    drink: "",
  });
  const renderComponent = (heading: string, type: string) => {
    return (
      <>
        <ContentHeading>{heading}</ContentHeading>
        <GenderOptions>
          {smokeOptions.map((option: string) => (
            <Gender
              key={option}
              onClick={() => {
                setSelectedOptions({ ...selectedOptions, [type]: option });
                saveAddictDetails(type, option);
              }}
              className={selectedOptions[type] === option ? "selcted" : ""}
            >
              {option}
            </Gender>
          ))}
        </GenderOptions>
      </>
    );
  };
  return (
    <SmokeContainer>
      {renderComponent("Do you smoke?", "smoke")}
      {selectedOptions.smoke === "Yes" ? (
        <div style={{ marginTop: "24px" }}>
          {renderComponent("Do you Drink alcohol?", "drink")}
        </div>
      ) : null}
    </SmokeContainer>
  );
}

export default SmokeChecker;
