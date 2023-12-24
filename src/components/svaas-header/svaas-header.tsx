// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  SubTitle,
  HeaderWrapper,
  HeaderLeft,
  TitleWrapper,
} from "./svaas-header-component";
import Icon from "@app/assets/icon";
import { BackArrow } from "@app/assets/icons";
type Props = {
  showBackButton?: boolean;
  title: string;
  subTitle?: string;
  showFor?: { show: boolean; value: string };
  showLocation?: { show: boolean; location: any; onLocationClick?: any };
  onClickFor?: () => void;
  onBack?: () => void;
  loadProfiles?: () => void;
  onMenu?: () => void;
  onCart?: () => void;
  onLabsCart?: () => void;
  height?: string;
  showMenu?: boolean;
  showCart?: boolean;
  cartCount?: number;
  titleClassName?: string;
  className?: any;
  onSearch?: any;
  submitSearch?: any;
  searchValue?: string;
  showSearch?: boolean;
  showNotification?: boolean;
  userImg?: any;
  showConfirmed?: any;
  cartCountCode?: any; // cart item operation code
  showEdit?: boolean;
  onEdit?: any;
  onKeyPressFn?: any;
  showLabCart?: any;
  cartCountLabs?: any;
  diagnosticSearchPlaceholder?: boolean;
  doctorsPlaceholder?: boolean;
  specialistsPlaceholder?: boolean;
  inputRef?: any;
  showAHCLabCart?: any;
  AHCcartCount?: any;
};
export default function Header(Props: Props) {
  const goBack = () => {
    Props.onBack && Props.onBack();
  };
  const loadProfiles = () => {
    Props.loadProfiles && Props.loadProfiles();
  };
  const goMenu = () => {
    Props.onMenu && Props.onMenu();
  };
  const goCart = () => {
    Props.onCart && Props.onCart();
  };
  const goLabsCart = () => {
    Props.onLabsCart && Props.onLabsCart();
  };
  return (
    <>
      {/* {showLogout && (
        <LogoutDialog
          onClose={() => {
            setShowLogout(false);
          }}
        />
      )} */}
      <Container
        id="svaasHeader"
        className={"svaas-header " + (Props.className ? Props.className : "")}
      >
        <HeaderWrapper>
          <HeaderLeft>
            <TitleWrapper className="titleWrapper">
              {Props.onBack && (
                <span onClick={() => goBack()}>
                  {/* <Icon name="backArrow" /> */}
                  {BackArrow()}
                </span>
              )}

              <Title className={Props.titleClassName}>
                {Props.title}
                {Props.subTitle && (
                  <SubTitle className="subTitleWrapper">
                    {Props.subTitle}
                  </SubTitle>
                )}
              </Title>
            </TitleWrapper>
          </HeaderLeft>
        </HeaderWrapper>
      </Container>
    </>
  );
}
