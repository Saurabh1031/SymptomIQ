import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Button, Para, StepperContainer } from "../SymptomComponents";
import "./Stepper.css";
import Tick from "@app/assets/icons/tick";
type StepperProps = {
  steps: string[];
  currentStep: any;
  completedStep: any;
};
export default function Stepper({
  steps,
  currentStep,
  completedStep,
}: StepperProps) {
  return (
    <>
      <StepperContainer>
        {steps?.map((step, ind: number) => (
          <div
            key={ind}
            className={`step-item ${currentStep === ind + 1 && "active"} ${(ind + 1 < currentStep || completedStep) && "complete"
              }`}
          >
            <div className="step">
              {/* <TiTick size={20} /> */}
              <Tick />
            </div>
            <Para className={(currentStep >= ind + 1) ? "active" : ""}>
              {step}
            </Para>
          </div>
        ))}
      </StepperContainer>
    </>
  );
}
