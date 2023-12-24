import styled from "styled-components";

export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;

export const Container = styled.div`
  margin-top: 26px;
`;
export const OuestionWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 8px;
  align-items: center;
`;
export const Question = styled.div`
  font-family: Nunito Sans;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  //margin-right: 10px;
`;

export const SmokeButton = styled.div`
  color: rgba(90, 90, 90, 0.50);
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  padding: 13px 16px 13px 16px;
  border-radius: 4px;
  border: 0.75px solid #DFDEDE;
  background: #fff;
  &.selected {
      color: #494E9D;
      border-radius: 4px;
      border: 1px solid #494E9D;
      background: #F8F8FF;
  }
  &.disabled {
    color: rgba(90, 90, 90, 0.50);
  }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 16px;
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
`;
export const AnalyzButton = styled.button<{ selected?: boolean }>`
  width: 90%;
  height: 50px;
  border-radius: 8px;
  background: ${(props) => (props.selected ? "#494e9d" : "#ADADAD")};
  color: ${(props) => (props.selected ? "#fff" : "#838383")};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.75px;
`;
export const MainContainer = styled.div`
  height: calc(100vh - 270px);
  overflow: auto;
  margin-left: 21px;
`
export const SidenavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 54;
`;
export const AboutSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  //height: calc(100vh - 401px);
  border-radius: 9px;
  background: #F6F6F8;
  margin: 0px 19px 35px 19px;
  padding: 16px 18px 16px 18px;
`;
export const Label = styled.span`
  font-family: Nunito Sans;
  color: #313131;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Para = styled.div`
  font-family: Nunito Sans;
  color: var(--black-secondary-313131, #313131);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
export const SubText = styled.div`
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 15.75px;
`;
export const DashedLine = styled.div`
  background: var(--charcoal-lightest-1, #D6D6D6);
  opacity: 0.5;
  width: 335px;
  height: 1px;
  margin: 24px 0 0 0;
`;
export const ButtonRow = styled.div`
  display: flex;
  gap: 5vw;
  margin-top: 16px;
`;