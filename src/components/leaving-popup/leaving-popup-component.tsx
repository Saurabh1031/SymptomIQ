import styled from "styled-components";

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
export const SideContainer = styled.div`
    width: auto;
    border-radius: 9px;
    background: #F6F6F8;
    margin: 5px 15px 25px 15px
`
export const Header = styled.div`
  color: #494E9D;
  text-align: center;
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 24px 22px 22px 22px;`;
export const Description = styled.div`
  padding: 0px 22px 21px 22px;
  color: var(--black-secondary-313131, #313131);
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;
export const RetakeTest = styled.button`
  width: 41%;
  height: 50px;
  border-radius: 8px;
  background: #494e9d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-family: Nunito Sans;
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
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 19px;
`;