import styled from "styled-components";

export const SubText = styled.div`
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 15.75px;
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
export const WelcomeHeading = styled.div`
    margin-top:26px;
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    width: 90%;
`;
export const RelatedSymptomsCheckBox = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  gap: 5px;
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 17px;
  height: 17px;
  border-radius: 3px;
  border: 1px solid #494E9D;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #333;
    border-color: #333;
  }
`;
export const RelatedSymptomsSubtext = styled.span`
    color: var(--charcoal-dark, #838383);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
`;
export const RelatedSymptomsHeading = styled.div`
    color: var(--charcoal-dark, #838383);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin-top: 24px;
`;
export const RelatedParent = styled.div`
    margin-top: 8px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 19px;
`;
export const RelatedMap = styled.div`
  border-radius: 10px;
  border: 1px solid #EEE;
  background: #FFF;
  width: 145px;
  height: 40px;
  color: #000;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &.selected {
    color: #fff;
    background: #494E9D;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const SearchBlock = styled.div`
    display: flex;
    align-items: center;
`;
export const SpanSearchIcon = styled.span`
`;
export const InputSearch = styled.input`
  width: 80%;
 // border: 1px solid #d6d6d6;
  margin-top: 8px;
  outline: none;
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
export const Container = styled.div`
    height: calc(100vh - 270px);
    overflow: auto;
    margin-left: 20px;
`;
export const SubTexts = styled.div`
    color: var(--charcoal-dark, #838383);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin-top: 24px;
`;
export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    //margin-left: 21px;
    margin-bottom: 40px;
    &.disabled {
     opacity: 0.5;
     cursor: not-allowed;
    }
`;
