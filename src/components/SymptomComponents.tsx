import styled from "styled-components";
//import dateIcon from "../assets/images/date-icon.svg";
//import searchIcon from "../assets/images/search-icon.svg";
//import { whiteColor, blackColor, boldFont } from "@app/styles";
//import { primaryColor, semiBoldFont, titleGray } from "../../../styles";

// type Props = {
//   height?: string;
// };
//import crossSymbol from "../assets/images/"
export const AppContainer = styled.div`
  margin: 0px;
  &.otherBg {
    background-color: #ffffff;
  }
  //background-color: #f6f6f8;
`;
export const CrossIcon = styled.img``;
export const Name = styled.div`
  font-style: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  color: #494f9d;
`;
export const HiText = styled.div`
  font-style: Nunito Sans;
  font-weight: 400;
  font-size: 24px;
  color: #6f6f6f;
`;
export const HContainer = styled.div`
  width: 100%;
  height: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  box-sizing: border-box;
  // transform: translateY(120%);
  border-radius: 24px 24px 0 0;
  transition: all 1s ease;
  &.open {
    transform: translateY(0);
  }
`;
export const HomeContainer = styled.div`
  margin: 10px;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-family: "Nunito Sans";
  margin-top: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #313131;
  text-align: center;
`;
export const Content = styled.p`
  font-size: 16px;
  color: gray;
  font-weight: 400;
  // margin: 12px 0 0;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
`;
export const Button = styled.button`
  width: 300px;
  height: 45px;
  margin: 10px;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500px;
  font-size: 16px;
  color: white;
  border: none;
  cursor: pointer;
  background: #111e9c;
  bottom: 5px;
  ${({ disabled }: any) => {
    if (disabled) {
      return `background: #eeeeee;`;
    }
  }}
`;

export const CloseIcon = styled.span`
  //width: 32px;
  //height: 32px;
  // background: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 500;
  //box-shadow: 0px 2px 8px rgb(0 0 0 / 50%);
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: -20px;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: none;
  &:hover {
    transform: translateY(-8px) translateX(-50%);
  }

  //   svg {
  //     width: 28px;
  //     height: 28px;
  //   }
`;
export const SympChekerParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 0px;
  height: 120px;
  gap: 10px;
  background-image: linear-gradient(to right, #e9fffc, #dcdff1);
  margin-bottom: 10px;
`;
export const SymptomAnalyserTitle = styled.div``;
export const Heading = styled.div`
  font-style: Nunito Sans;
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
`;
export const ExclamationCircle = styled.div`
  //margin-left: 20px;
  transform: rotate(180deg);
`;
export const ContentHeading = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-top: 20px;
`;
export const BoldContent = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #1d1d1d;
`;
export const ContentSubHeading = styled.div`
  color: #6f6f6f;
  font-weight: 400;
  font-size: 14px;
  margin-top: 20px;
`;
export const WelcomeHeading = styled(ContentHeading)`
  margin-top: 10px;
`;
export const Gender = styled.div`
  text-align: center;
  border: 1px solid #d2d2d2;
  padding: 4px 12px;
  &.selcted {
    background-color: #494e9d;
    color: #ffffff;
  }
  background-color: #ffffff;
  border-radius: 4px;
`;
export const GenderContainer = styled.div`
  margin-top: 20px;
`;
export const GenderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;
export const SecondPageContainer = styled.div`
  margin-top: 5px;
`;
export const UserValue = styled.div`
  margin-top: 24px;
  padding: 8px;
  border: 1px solid;
`;
export const SmokeContainer = styled.div`
  margin-top: 36px;
`;
export const Options = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const Option = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  padding: 4px;
  margin-left: 20px;
  &.selected {
    border-color: #494e9d;
    background-color: #f8f8ff;
  }
`;

export const ExtraDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f8;
  margin: 10px;
  padding: 10px;
  height: auto;
  border-radius: 8px;
`;
export const AgeParent = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: fit-content;
  padding: 5px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const AgeTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
`;
export const InputYears = styled.input`
  border: none;
  outline: none;
  background-color: white;
  width: 42px;
`;
export const SpanYears = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6f6f6f;
`;
export const GenderTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
`;
export const DetailsHeading = styled.div`
  color: #494e9d;
  font-weight: 700;
  font-size: 18px;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
`;
export const InputDateIcon = styled.input`
  padding-left: 30px;
  height: 25px;
  background-position-x: 5px;
  background-position-y: 5px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
`;
export const InputSearch = styled(InputDateIcon)`
  width: 80%;
 // border: 1px solid #d6d6d6;
  margin-top: 8px;
  outline: none;
`;
export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: #d9d9d9;
  border-radius: 50%;
`;
export const CommonHeader = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-top: 40px;
`;
export const SubText = styled.div`
  font-weight: 400px;
  font-size: 14px;
`;
export const SearchedBlock = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;
export const SelectedSymptoms = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;
export const SelectedSymptom = styled.div`
  color: #aaaaaa;
  background-color: #eeeeee;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
`;
export const SpanCross = styled.span`
  width: 12px;
  height: 12px;
  color: #828282;
  margin-left: 5px;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  box-sizing: border-box;
  left: 20px;
  right: 20px;
  bottom: 14px;
  height: 47px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #ffffff;
  background: #111e9c;
  position: fixed;
  ${({ disabled }: any) => {
    if (disabled) {
      return `background: #eeeeee;color: #000000`;
    }
  }}
`;
export const DatePickerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
  outline: none;
`;
export const SymptomsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
export const SymptomsData = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;
export const Symptom = styled.div`
  width: 69px;
  height: 72px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.selected {
    color: #ffffff;
    background: #494e9d;
    svg {
      path {
        stroke: #ffffff;
      }
    }
  }
`;
export const Image = styled.img``;
export const SymptomName = styled.div`
  font-style: Nunito Sans;
  font-size: 10px;
  font-weight: 400;
`;
export const SymptomsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 12px;
  flex-wrap: wrap;
  width: 100%;
`;
export const SymptomsParentContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
export const SymptomsAnalyserContainer = styled.div``;
export const Label = styled.div``;
export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 20px;
`;
export const SymptomSlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  gap: 10px;
`;
export const InputSlider = styled.input`
  width: 100%;
  height: 10px;
  &.sliderBlue {
    accent-color: #111e6c;
  }
`;
export const SymtomTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #111e9c;
  font-weight: 600;
`;
export const StepperContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 14px 10px 12px 10px;
`;
export const Para = styled.p`
  color: #A9A9A9;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  &.active {
    color: #000;
  }
`;
export const DisplaySearchPains = styled.div`
  position: relative;
  z-index: 1000;
  &:hover {
    background: #e8e8e8;
  }
`;
export const NotFoundImg = styled.img``;
export const NotFoundMessage = styled.div`
  width: 287px;
  margin-left: 50px;
  color: #666bb8;
  font-style: Nunito Sans;
  font-weight: 700;
  font-size: 28px;
`;
export const SearchNotFoundContent = styled.div`
  width: 253px;
  color: #6f6f6f;
  margin-top: 5px;
  margin-left: 54px;
  font-style: Nunito Sans;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;
export const SearchBlock = styled.div`
    display: flex;
    align-items: center;
    border: 1px dashed grey;
    border-radius: 6px;
`;
export const SpanSearchIcon = styled.span`
`;
export const Svg = styled.div``;
export const RelatedSymptomsSubtext = styled.span`
  font-style: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
`;
export const RelatedSymptomsCheckBox = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  gap: 5px;
`;
export const RelatedSymptomsHeading = styled.div`
  font-style: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 10px;
`;
export const RelatedParent = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const RelatedMap = styled.div`
  width: 140px;
  height: 40px;
  font-style: Nunito Sans;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CheckBox = styled.input.attrs((props) => ({
  type: props.type || "input",
}))`
  background-color: #494e9d;
`;
