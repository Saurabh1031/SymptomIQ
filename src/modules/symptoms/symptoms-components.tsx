import styled from "styled-components";

export const SymptomsParentContainer = styled.div`
  display: flex;
  margin-left: 21px;
  //margin-right: 20px;
  flex-direction: column;
  overflow: auto;
  height: calc(100vh - 280px);
`;
export const ContentHeading = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 26px;
`;
export const SubText = styled.div`
    color: var(--charcoal-dark,#838383);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin-top: 8px;
`;
export const SubTextNext = styled.div`
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 15.75px;
`;
export const SymptomsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //margin-top: 8px;
  flex-wrap: wrap;
  width: 92vw;
`;
export const SymptomsData = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  //min-width: 80px;
`;
export const Symptom = styled.div`
  width: 13vw;
  height: 11vh;
  padding: 0.5vh 2.5vh 0.5vh 2.5vh;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
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
export const Svg = styled.div``;
export const SymptomName = styled.div`
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
`;
export const SearchBlock = styled.div`
   display: flex;
    align-items: center;
   // border: 1px dashed grey;
   // border-radius: 6px;
   gap: 7px;
`;
export const SpanSearchIcon = styled.span`
`;
export const InputSearch = styled.input`
  width: 80%;
 // border: 1px solid #d6d6d6;
 // margin-top: 8px;
  border: none;
`;
export const SelectedSymptoms = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;
export const SymptomsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
export const SpanCross = styled.span`
  width: 12px;
  height: 12px;
  color: #828282;
  margin-left: 5px;
  cursor: pointer;
`;
export const SubmitButton = styled.button`
  border-radius: 8px;
  background: #494E9D;
  height: 50px;
  margin: 20px 16px 19px 16px;
  color: #FFF;
  border: none;
  ${({ disabled }: any) => {
    if (disabled) {
      return `color: #838383;
              border-radius: 6px;
              border: 1px solid #ADADAD;
              background: #E7E7E7;`;
    }
  }}
`;
export const SearchedBlock = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;
export const DisplaySearchPains = styled.div`
  position: relative;
  z-index: 1000;
  &:hover {
    background: #e8e8e8;
  }
`;
export const StyleNamefilter = {
  control: styles => ({ ...styles, backgroundColor: 'white', fontFamily: "Nunito sans", fontSize: "14px" }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      fontFamily: "Nunito sans",
      fontSize: "14px",
      fontWeight: isFocused ? "600" : "400",
    };
  },

};
export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;
export const SubText2 = styled.div`
    color: var(--charcoal-dark, #838383);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin-top: 24px;
`;