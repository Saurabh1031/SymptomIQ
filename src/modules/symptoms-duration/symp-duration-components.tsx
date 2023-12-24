import styled from "styled-components";
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
export const SubText = styled.div`
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 15.75px;
`;
export const FirstRow = styled.div`
  display: flex;
  font-family: Nunito Sans;
  justify-content: space-between;
  margin-top: 18px;
   // margin-bottom: 9px;
  font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 8px;
`;
export const DurationHeaderText = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 26px;
`;
export const DurationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`
export const Input = styled.input`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    height: 20px;
    width: 15%;
    border-radius: 4px;
    border: 1px solid #E8E8E8;
    background: var(--white-background-ffffff, #FFF);
    padding: 0.5rem;
}
`;
export const Select = styled.select`
    display: flex;
    /* width: 103px; */
    /* height: 34px; */
    padding: 7.5px 6.5px 7.5px 6.5px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* gap: 10px; */
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #E8E8E8;
    background: var(--white-background-ffffff, #FFF);
    color: var(--indigo-blue-primary-494-e-9-d, #494E9D);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
`;
export const ApplyToAll = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17px;
    color: #838383;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
`;
export const ApplyContainer = styled.div`
    display: flex;
    gap: 5px;
    margin-left: 5vw;
`;
export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;
export const Container = styled.div`
  overflow: auto;
  height: calc(100vh - 270px);
  margin: 0 21px 0 20px;
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