import styled from "styled-components";
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 77vh;
  // background-color: #f8f9fa;
`;

export const ErrorText = styled.div`
  color: #d9534f;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #494f9d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const HiText = styled.div`
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 24px;
  color: #6f6f6f;
`;
export const Heading = styled.div`
  font-style: Nunito Sans;
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin: 18px 0px;
  gap: 8px;
  color: #494f9d;
`;
export const Span = styled.span`
    color: #6f6f6f;
    font-size: 25px;
`