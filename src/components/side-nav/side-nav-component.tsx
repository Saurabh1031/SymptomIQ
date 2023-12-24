import styled from "styled-components";
import { primaryColor } from "../../styles";

type Props = {
  height?: string;
};
export const Container = styled.div`
  width: 100%;
  min-height: 0%;
  max-height: 0%;
  display: flex;
  flex-direction: column;
  // padding-bottom: 60px;
  background: #FFFFFF;
  // padding: 40px 16px 16px;
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
  position: relative;
  // transform: translateY(120%);
  transition: all 1s ease;
  &.open {
    transform: translateY(0);
  }
  ${({ params }: { params: any }) => {
    if (params.AnimateIt) {
      if (params.height) {
        return `height:${params.height};
        min-height: 25%;
        max-height: 60%;
        `;
      } else if (params.maxHeight) {
        return `max-height:${params.maxHeight}`;
      } else if (params.minHeight) {
        return `min-height:${params.minHeight}`;
      } else {
        return `
        min-height: 25%;
        max-height: 60%;
        `;
      }
    }
  }}
`;

export const Title = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #313131;
  cursor: pointer;
  color: ${primaryColor};
`;
export const Content = styled.p`
  position: absolute;
  font-size: 12px;
  color: grey;
  font-weight: 300;
  // margin: 12px 0 0;
  top: 10px;
  b {
    font-weight: revert;
  }
`;
export const Name = styled.div`
  font-size: 15px;
  line-height: 16px;
  color: black;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: black;
  cursor: pointer;
`;

export const Relation = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #6f6f6f;
`;

export const CloseIcon = styled.span`
  //width: 32px;
  //height: 32px;
  background: #fff;
  // background: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 500;
  //box-shadow: 0px 2px 8px rgb(0 0 0 / 50%);
  cursor: pointer;
  transition: all 0.5s ease;

  width: 36px;
  height: 36px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: none;

  &:hover {
    transform: translateY(-8px) translateX(-50%);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // margin: 30px 16px;
  margin: 0px 16px;
  position: relative;
  align-items: center;
  margin-top: 46px;
`;
export const Hspace = styled.div`
  ${({ size }: { size: number }) => {
    return `height: ${size}px`;
  }}
`;
export const HspaceMin = styled.div`
  ${({ size }: { size: number }) => {
    return `min-height: ${size}px`;
  }}
`;
