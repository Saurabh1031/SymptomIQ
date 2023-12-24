import styled from "styled-components";
export const ErrorContainer = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    //height: calc(100vh - 362px);
`;
export const Heading = styled.div`
color: #666BB8;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
`;
export const Content = styled.div`
color: #6F6F6F;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;
export const Container = styled.div`
display: flex;
    flex-direction: column;
    gap: 11px;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 325px);
`;
export const BottomContainer = styled.div`
  height: 89px;
  display: flex;
  background: #fff;
  padding: 1px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;
export const RetakeTest = styled.button`
  font-family: Nunito Sans;
  width: 41%;
  height: 50px;
  border-radius: 8px;
  background: #494e9d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.75px;
  border: none;
`;
export const CloseTest = styled.button`
  font-family: Nunito Sans;
  color: #494e9d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 15.75px;
  width: 41%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #494e9d;
  background: #fff;
`;
