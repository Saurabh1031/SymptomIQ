import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.p`
  font-size: 16px;
  color: gray;
  font-weight: 400;
  // margin: 12px 0 0;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
`;
export const ContentHeading = styled.div`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 14px;
  margin-top: 20px;
  text-align: start;
`;
export const WelcomeHeading = styled(ContentHeading)`
  margin-top: 10px;
`;
export const HiText = styled.div`
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 24px;
  color: #6f6f6f;
`;
export const Name = styled.div`
  font-style: Nunito Sans;
  font-weight: 700;
  font-size: 24px;
  color: #494f9d;
`;

export const BoldContent = styled.span`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 18px;
  color: #1d1d1d;
`;
export const ContentSubHeading = styled.div`
  font-family: Nunito Sans;
  color: #6f6f6f;
  font-weight: 400;
  font-size: 14px;
  margin-top: 20px;
`;

export const DoctorImage = styled.img`
  margin-top: 30px;
  width: 90%;
  max-width: 400px;
  margin-top: 30px;
  border-radius: 10px;
`;

export const DoctorImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;