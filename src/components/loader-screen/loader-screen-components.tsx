import styled from "styled-components";

export const Image = styled.img`
  width: 250px;
  height: 279px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeaderText = styled.div`
    margin-top: 34px;
    color: #6F6F6F;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.75px;
`;
export const ProgressContainer = styled.div`
    display: flex;
    width: 226px;
    height: 4px;
    background-color: #E3E4F9;
    margin-top: 36px;
    border-radius: 5px;
`;
export const ProgressBar = styled.div`
    height: 100%;
    border-radius: 5px;
    background-color: #494E9D;
    transition: width 0.2s ease-in-out;
`;