import React, { useState, useEffect, useRef, createRef } from "react";
import CrossSymbol from "@app/assets/icons/cross-symbol";
import {
  Container,
  Title,
  CloseIcon,
  Content,
  SubTitle,
  Header,
  Hspace,
  HspaceMin,
} from "./side-nav-component";
//import { classNames } from "react-select/src/utils";

type Props = {
  closeClassName: string;
  children: any; //DependentDetails[];
  onClose: () => void;
  title?: string;
  height?: string;
  subTitle?: string;
  content?: string;
  onSubTitleClick?: any;
  contentClassName?: any;
  maxHeight?: any;
  minHeight?: any;
  className?: string;
  isSpaceNeeded?: boolean;
  floatButtonNeeded?: boolean;
  CustomHeader?: any;
};

export default function SideNav({
  closeClassName,
  onClose,
  title,
  children,
  height,
  subTitle,
  content,
  onSubTitleClick,
  contentClassName,
  maxHeight,
  minHeight,
  className,
  isSpaceNeeded = true,
  floatButtonNeeded = true,
  CustomHeader,
}: Props) {
  const popupEle: any = useRef();
  const [AnimateIt, setAnimateIt] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      let body: any = document.getElementById("symptom_analyzer");
      body.classList.add("bodyOverlay");
      popupEle.current.parentNode.classList.add("SidenavBGOpen");
      setAnimateIt(true);
    }, 20);
  }, []);
  return (
    <Container
      ref={popupEle}
      params={{
        height: height,
        maxHeight: maxHeight,
        minHeight: minHeight,
        AnimateIt: AnimateIt,
      }}
      className={closeClassName}>
      {floatButtonNeeded && (
        <CloseIcon
          onClick={() => {
            popupEle.current.parentNode.classList.remove("SidenavBGOpen");
            popupEle.current.parentNode.classList.add("SidenavBGClose");

            let body: any = document.getElementById("symptom_analyzer");
            body.classList.remove("bodyOverlay");

            setAnimateIt(false);
            setTimeout(() => {
              onClose();
            }, 800);
          }}>
          {CrossSymbol()}
        </CloseIcon>
      )}
      {/* <Hspace size={30} /> */}
      {/* <CustomHeaderJSx/> */}
      {/* {CustomHeaderJSx && <CustomHeaderJSx/>} */}
      {CustomHeader && <CustomHeader />}
      {!CustomHeader && (
        <Header className={className}>
          <Title>{title ? title : ""}</Title>
          <SubTitle onClick={onSubTitleClick}>
            {subTitle ? subTitle : ""}
          </SubTitle>
        </Header>
      )}
      {isSpaceNeeded && <HspaceMin size={20} />}
      {content && (
        <Content className={contentClassName ? contentClassName : ""}>
          {content}
        </Content>
      )}
      {children}
    </Container>
  );
}
