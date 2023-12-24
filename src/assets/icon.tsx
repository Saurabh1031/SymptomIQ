//@ts-nocheck
import React from "react";
import {
  Bodyache,
  CircleExclamation,
  Fever,
  Headache,
  LeftAngle,
  LooseMotions,
  Nausea,
  RunningNose,
  SoreThroat,
  StomachPain,
  SearchIcon,
  BackArrow,
  WarningIcon,
  HalfCircleBg,
  DoctorIcon,
  HalfCircle,
  SinusitisIcon,
  HomeIcon,
  Bacteria,
} from "./icons";

export const iconNames = {
  bodyache: Bodyache,
  CircleExclamation: CircleExclamation,
  fever: Fever,
  headache: Headache,
  LeftAngle: LeftAngle,
  LooseMotions: LooseMotions,
  nausea: Nausea,
  RunningNose: RunningNose,
  SoreThroat: SoreThroat,
  StomachPain: StomachPain,
  SearchIcon: SearchIcon,
  BackArrow: BackArrow,
  WarningIcon: WarningIcon,
  HalfCircleBg: HalfCircleBg,
  DoctorIcon: DoctorIcon,
  HalfCircle: HalfCircle,
  SinusitisIcon: SinusitisIcon,
  HomeIcon: HomeIcon,
  Bacteria: Bacteria 

};
export const iconsList = () => {
  return Object.keys(iconNames);
};
export type IconProps = {
  name: keyof typeof iconNames;
  //params?: any;
};
export default function Icon({ name }: IconProps) {
  //let args: object = { params: params };
  const IconComponent = iconNames[name];
  return <IconComponent />;
}
