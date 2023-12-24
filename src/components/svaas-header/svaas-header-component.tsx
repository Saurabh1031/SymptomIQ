import styled from "styled-components";
import { blackColor, boldFont, primaryColor, whiteColor } from "../../styles";

type Props = {
  height: string;
  showConfirmed?: boolean;
};
export const Container = styled.div`
  background: linear-gradient(98.1deg, #e9fffc 8.51%, #dcdff1 88.61%);
  display: flex;
  // justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px 20px;
  // padding: 30px 16px 20px;
  transition: all 1s ease;
  height: calc(12vh);
  justify-content: end;
  &.svaas-header {
    &.scrolled {
      .location-pill {
        display: none;
      }
    }
  }
`;
export const Title = styled.h1`
font-family: Nunito Sans;
font-style: normal;
font-weight: 600;
line-height: 24px;
  ${boldFont};
  font-size: 20px;
  line-height: 24px;
  color: ${blackColor};
  margin: 0;
`;
export const SubTitle = styled.sub`
  color: ${primaryColor};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  // margin-left: 20px;
  display: flex;
  min-height: 18px;
  // margin-left: 50px;
  // margin-top: -16px;
`;

export const For = styled.div`
  cursor: pointer;
`;
export const AddresHolder = styled.div`
  padding: 0 8px;
  background: linear-gradient(
    91.89deg,
    rgba(227, 227, 227, 0.49) 17.94%,
    rgba(255, 255, 255, 0.7) 63.38%,
    rgba(234, 234, 234, 0.49) 93.15%
  );
  border: 0.75px solid #ffffff;
  box-shadow: -4px -4px 15px -4px rgba(49, 49, 49, 0.1);
  backdrop-filter: blur(40px);
  border-radius: 16px;
  cursor: pointer;
  margin-right: 20px;
  // width: 100px;
  width: auto;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #7c7c7b;
  display: flex;
  align-items: center;
  height: 24px;
  ${({ marque }: { marque: boolean }) => {
    if (marque == true) {
      return `width:180px;`;
    }
  }}
`;
export const IconHolder = styled.div`
  z-index: 10;
  background: #fff;
  height: 20px;
  padding-right: 6px;
`;
export const Location = styled.div`
  white-space: nowrap;
  color: ${primaryColor};
  display: flex;
  align-items: center;
  font-size: 12px;
  svg {
    width: 16px;
    height: 16px;
    margin: 0 4px 0px 0px;
    fill: ${whiteColor};
    ${boldFont};
    stroke-width: 2px;
    stroke: ${primaryColor};
    path {
      fill: ${whiteColor};
      stroke: ${primaryColor};
    }
  }
  ${({ marque }: { marque: boolean }) => {
    if (marque) {
      return `		
					-moz-transform: translateX(100%);
					-webkit-transform: translateX(100%);
					transform: translateX(100%);
					-moz-animation: scroll-left 2s linear infinite;
					-webkit-animation: scroll-left 2s linear infinite;
					animation: scroll-left 10s linear infinite;`;
    }
  }}
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  color: #6f6f6f;
  margin-top: 16px;
`;
export const DropdownText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${primaryColor};
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
`;
export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  // top:13%;
  // margin-top: 6%;
  right: 20px;
  // gap: 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  // height: 100%;
  // align-items: left;
  // justify-content: center;
`;

export const LocationPill = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  width: 180px;
  span {
    white-space: nowrap;
    overflow: hidden;
    b {
      font-family: NunitoSans700;
    }
  }
  background: linear-gradient(
    91.89deg,
    rgba(227, 227, 227, 0.49) 17.94%,
    rgba(255, 255, 255, 0.7) 63.38%,
    rgba(234, 234, 234, 0.49) 93.15%
  );
  border-radius: 16px;
  border: 0.75px solid #ffffff;
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0px 8px;
  gap: 4px;
  font-size: 12px;
  color: ${primaryColor};
  transition: all 0.5s ease;
  svg {
    width: 16px;
    height: 16px;
    margin: 0 4px 0px 0px;
    fill: ${whiteColor};
    ${boldFont};
    stroke-width: 2px;
    stroke: ${primaryColor};
    path {
      fill: ${whiteColor};
      stroke: ${primaryColor};
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  justify-content: flex-start;
  align-items: baseline;

  svg {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    path {
      stroke: ${primaryColor};
    }
  }
  &:hover {
    svg {
      transform: translateX(-5px);
    }
  }
`;
export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderRight = styled.div`
  // height: 100%;
  // display: flex;
  align-items: center;
  // align-items: flex-end;
`;

export const SearchWrapper = styled.div`
  height: 40px;
`;

export const Avtar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* margin-right: 8px;
  margin-left: 12px; */
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  ${({ imgSrc }: { imgSrc: any }) => {
    if (imgSrc != null) {
      return `
          background-image: url(${imgSrc});
          background-repeat:no-repeat;
          background-size:100%;
          `;
    }
  }};
`;

export const Menu = styled.span`
  ${({ showConfirmed }: Props) => {
    if (showConfirmed) {
      return `top:70px;
    svg {
      path{
      fill:${whiteColor};
    }
  }`;
    }
  }}
`;
export const CartHolder = styled.div`
  display: flex;
  align-items: center;
`;
export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 1;
`;
export const Cartcount = styled.div`
  background: #494e9d;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -6px;
  right: -10px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
`;
export const Hamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
`;

export const LogoutContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  svg {
    width: 22px;
    height: 22px;
    path {
      fill: #494e9d;
    }
  }
`;
export const IconBorder = styled.div`
  cursor: pointer;
  border: 2px solid #494e9d;
  padding: 2px;
  border-radius: 50%;
  outline: none;
`;
