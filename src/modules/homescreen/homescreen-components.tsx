import styled from "styled-components";

export const SymptomsText = styled.div`
    color: rgba(0, 0, 0, 1);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //margin: 10px;
  margin: 24px 15px 10px 21px;
  //gap: 12px;
  overflow: auto;
  height: calc(100vh - 224px);
`;

export const NamesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 16px;
`;
export const NameItem = styled.div`
  border-radius: 4px;
  border: 0.75px solid #DFDEDE;
  background: #FFF;
  /* height: 40px; */
  color: #5A5A5A;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  padding: 13px 16px 13px 16px;
  ${({ selected }: any) => {
    if (selected)
      return ` 
      color: #494E9D;
      border-radius: 4px;
      border: 1px solid #494E9D;
      background: #F8F8FF;
    `;
  }}
`;

export const AboutHeader = styled.div`
  color: #494e9d;
  /* font-family: Nunito Sans; */
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 15px 0 15px 12px;
`;
export const InputLabel = styled.div`
  color: #000;
  /* font-family: Nunito Sans; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f6f8;
  padding: 16px 17px 16px 16px;
  height: auto;
  border-radius: 8px;
  margin-top: 24px;
`;
export const DetailsHeading = styled.div`
    color: #494E9D;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const AgeTitle = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 24px;
`;
export const AgeParent = styled.div`
    display: flex;
    width: 23vw;
    /* height: 18%; */
    padding: 8px 8px 8px 16px;
    align-items: center;
    //gap: 73px;
    justify-content: space-between;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid var(--charcoal-light, #D6D6D6);
    background: var(--white, #FFF);
    padding: 8px 8px 8px 16px;
    margin-top: 8px;
`;
export const Input = styled.input`
  font-family: Nunito Sans;
  border: none;
  outline: none;
  width: 6vh;
`;
export const SpanYears = styled.div`
  font-family: Nunito Sans;
  font-size: 12px;
  font-weight: 600;
  color: #6f6f6f;
`;
export const GenderTitle = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 24px;
`;
export const GenderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;
export const Gender = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.75px solid #DFDEDE;
  background: #FFF;
  color: #5A5A5A;
  //width: 33vh;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  padding: 13px 28px 13px 28px;
  &.selected {
    background-color: #494e9d;
    color: #ffffff;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const DashedLine = styled.div`
  border: 0.5px solid #dfdede;
  margin-top: 16px;
`;
export const SubText = styled.div`
  font-weight: 400px;
  font-size: 14px;
  margin-top: 10px;
    margin-bottom: 10px;
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
export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;