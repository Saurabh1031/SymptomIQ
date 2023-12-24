import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 295px);
  overflow: auto;
`;
export const StepperContainer = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.4);
  background: #fff;
`;

export const TitleText = styled.div`
    color: #000;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 26px;
    margin-left: 21px;
    margin-right: 13px;
`;

export const Emergency = styled.div`
  margin: 24px 20px 0px 21px;
  border-radius: 6px;
  border: 1px solid #f4939a;
  background: #ffefef;
  display: flex;
`;

export const AttentionCard = styled.div`
    margin: 16px 20px 40px 20px;
    display: flex;
    border-radius: 6px;
    border: 1px solid #F5C278;
    background: #FEFBE4;
`;


export const EmergencyText = styled.p`
  font-family: Nunito Sans;
  color: #313131;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const AttentionText = styled.p`
  font-family: Nunito Sans;
  color: #313131;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const EmergencyDiv = styled.div`
  margin: 16px 10px 16px 16px;
`;
export const AttentionDiv = styled.div`
  margin: 16px 10px 16px 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const CauseHeading = styled.p`
  color: var(--indigo-blue-primary-494-e-9-d, #494e9d);
  font-family: Nunito Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin-left: 21px;
`;

export const CardsContainer = styled.div`
`;
export const Card = styled.div`
  //width: 120px;
  //height: 187px;
  background: #fff;
  flex-wrap: wrap
  //margin: 10px 0px 10px 0px;
  // padding: 12px 21px 12px 13px;
  display: flex;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: linear-gradient(129deg, #e9fffc 0%, #dcdff1 100%);
  //margin: 12px 0px 0px 12px;
`;

export const CardTitle = styled.div`
  font-family: Nunito Sans;
  color: #494e9d;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin-top: 12px;
  margin-bottom: 2px;
`;

export const CardDescription = styled.div`
  font-family: Nunito Sans;
  color: #5a5a5a;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  //margin: 9px 9px 12px 10px;
`;

export const SpecialityContainer = styled.div`
  margin: 24px 0px 0px 21px;
`;

export const SpecialityTitle = styled.div`
  color: var(--indigo-blue-primary-494-e-9-d, #494e9d);
  font-family: Nunito Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin-top: 24px;
  //margin-left: 21px;
`;

export const SpecialityDiv = styled.div`
    border-radius: 10px;
    border: 1px solid #EDEDED;
    background: #FFF;
    display: flex;
    height: 58px;
    margin-top: 16px;
    width: fit-content;
    padding-right: 21px;
`;
export const SpecialityTag = styled.div`
  font-family: Nunito Sans;
  color: #313131;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  margin-left: -21px;
  transform: rotate(90deg);
`;

export const BottomContainer = styled.div`
  height: 89px;
  display: flex;
  background: #fff;
  padding: 1px;
  width: 100%;
`;

export const DoctorIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -28px;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;
export const LoaderContainer = styled.div`
height: calc(100vh - 45px);
display: flex;
flex-direction: column;
justify-content: center;
`;
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
export const DiseaseName = styled.div`
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
`;
export const CardContainer = styled.div`
    background: rgb(255,255,255);
    border-radius: 8px;
    border: 0.75px solid rgb(195,198,235);
    //width: 100%;
    //height: 171px;
    margin: 10px 15px 10px 0px;
`;

export const DetailsCard = styled.div`
    display: flex;
    gap: 13px;
    //flex-direction: column;
    padding: 16px;
    border-bottom: 0.75px solid rgb(195, 198, 235);
    border-radius: 8px 8px 0px 0px;
    background: rgb(248, 248, 255);
`;
export const BottomCard = styled.div`
    background: rgb(255, 255, 255);
    display: flex;
        justify-content: space-between;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
`;
export const TopCard = styled.div`
    height: 34px;
    flex-shrink: 0;
    background: linear-gradient(129deg, #DCDFF1 0%, #E9FFFC 100%);
    color: var(--charcoal-grey-secondary-5-a-5-a-5-a, #5A5A5A);
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 10px;
`;
export const DocListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 20px 0px 21px;
`;
export const ViewAll = styled.div`
color: #494E9D;
font-family: Nunito Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
//padding: 10px 20px 0px 20px;
`;
export const DoctorName = styled.div`
  color: rgb(49, 49, 49);
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  font-family: Nunito Sans;
  font-style: normal;
`;
export const ConsultFee = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    color: var(--black-secondary-313131, #313131);
    font-family: Nunito Sans;
    font-size: 15.616px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.568px;
`;
export const PerSession = styled.span`
color: #6F6F6F;
font-family: Nunito Sans;
font-size: 9.76px;
font-style: normal;
font-weight: 400;
line-height: 11.712px; /* 120% */
`;
export const Qualifications = styled.div`
color: #6F6F6F;
font-family: Nunito Sans;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 18px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: 4px 0px;
gap: 8px;
`;
export const BookConsultCTA = styled.button`
    min-width: 100px;
    gap: 3px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 16px;
    outline: none;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 700;
    width: 50%;
    height: 50px;
    padding: 10px 15px;
    background: rgb(255, 255, 255);
    color: rgb(73, 78, 157);
    border: 1px solid rgb(216, 217, 234);
`;

export const ProfileDiv = styled.div`
width: 52px;
height: 52px;
/* flex-shrink: 0; */
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background: #BE90D4;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #fff;
`;

export const QualContainer = styled.div`
  display: flex;
  gap: 11px
;
`;
export const CausesContainer = styled.div`
  margin-top: 24px;
`;
export const DetailsContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #E3E4F9;
  background: #FFF;
  width: 89vw;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 8px 10px;
  gap: 6px;
  background: linear-gradient(129deg, #DCDFF1 0%, #E9FFFC 100%);
  //height: 34px;
`;
export const HeaderName = styled.div`
    color: var(--charcoal-grey-secondary-5-a-5-a-5-a, #5A5A5A);
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;
export const HeaderIcon = styled.div`
  display: flex;
  align-item: center;
`;
export const DetailsCardCont = styled.div`
    display: flex;
    padding: 10px 0px 13px 14px;
    gap: 16px;
`;
export const DetailsProfileDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: mediumpurple;
    color: #fff;
`;
export const Details = styled.div`
  width: 63vw;
  flex-wrap: wrap;
`;
export const DetailsName = styled.div`
  color: #313131;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
`;
export const DetailsPara = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
`;
export const DetailsLowerPara = styled.div`
  display: flex;
  gap: 12px;
`;
export const DetailsQual = styled.div`
    color: #6F6F6F;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;
export const DetailsSpecialist = styled.div`
    color: #6F6F6F;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
`;
export const DetailsExp = styled.div`
  color: #6F6F6F;
  font-family: Nunito Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;
export const BottomCardContainer = styled.div`
  display: flex;
  padding: 0px 14px 10px 18px;
  justify-content: space-between;
`;
export const LowerDetails = styled.div`
  align-items: center;
  display: flex;
  gap: 3px;
  color: #6F6F6F;
  font-family: Nunito Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */
`;
export const BookConsult = styled.div`
    display: inline-flex;
    padding: 10px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #494E9D;
    color: #FFF;
    text-align: center;
    font-family: Nunito Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;
export const Amount = styled.div`
    color: var(--black-secondary-313131, #313131);
    font-family: Nunito Sans;
    font-size: 15.616px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.568px; /* 112.5% */
`;
export const PerConsult = styled.div`
  margin-bottom: 4.35px;
  color: #6F6F6F;
  font-family: Nunito Sans;
  font-size: 9.76px;
  font-style: normal;
  font-weight: 400;
  line-height: 11.712px; /* 120% */
`;
export const DoctorAvailableContainer = styled.div`
  margin-left: 21px;
  margin-top: 17px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;
export const SplashSliderContainer = styled.div`
  //margin-left: 21px;
.slick-dots li {
    position: relative;
    display: inline-block;
    height: unset;
    width: unset;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}
.slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    height: unset;
    width: unset;
}
.slick-dots li.slick-active button {
    font-size: 0;
    line-height: 0;
    display: block;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    width: 27px;
}
  .slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 8px !important;
  background: #494E9D !important;
  height: 8px !important;
  border-radius: 10px !important;
  text-align: center;
  color: black;
  content: " " !important;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  width: 27px !important;
  color: #52579F;
}

`;
export const SplashContainer = styled.div`
  display: flex;
  margin: 42px 16px 0px 16px;
  padding: 5px;
  background-color: green;
  border-radius: 8px;
  /* gap: 24px; */
`;
export const SplashBody = styled.div`
    border-radius: 8px;
    min-height: 113px;
    max-height: 151px;
    box-shadow: 1px 1px 30px 1px rgb(49 49 49 / 10%);
    margin: 14px;
    padding: 9px;
`;
export const SplashTitle = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
`;
export const SplashDesc = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
`;