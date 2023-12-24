import styled from "styled-components";
export const CommonHeader = styled.div`
    font-family: Nunito Sans;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 26px;
`;
export const SymptomSlidersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;
export const InputSlider = styled.input`
  width: 100%;
  height: 4px;
  margin-top: 8px;
  &.sliderBlue {
    accent-color: #494E9D;
  }
`;
export const SymtomTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #111e9c;
  font-weight: 600;
  margin-top: 5px;
  gap: 41px;
`;
export const SubText = styled.div`
    display: flex;
    justify-content: center;
    color: rgba(73, 78, 157, 0.40);
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    ${({ selected }: any) => {
    if (selected)
      return `color: var(--p-indigo-blue-normal, #494E9D);`;
  }}
`;
export const HomeContainer = styled.div`
  margin: 10px;
  border-radius: 5px;
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
export const Label = styled.div`
    font-family: Nunito Sans;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
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
export const SubTextNext = styled.div`
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 15.75px;
`;
export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 32px;
    width: 98%;
`;
export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;
export const Container = styled.div`
height: calc(100vh - 270px);
overflow: auto;
margin-left: 21px;
margin-right: 20px;
`