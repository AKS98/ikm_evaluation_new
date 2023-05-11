import React, { useState } from "react";
import { GiGraveFlowers } from "react-icons/gi";
import { headerData } from "./headerData";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  LeftNavComponents,
  LogoHeader,
  IconHolder,
  NavBarContainer,
  NavBarInnerContainer,
  MidNavComponents,
  NavigationSelections,
  NavLabelHolder,
  RightNavComponents,
  UserDesig,
  UserName,
  UserDetails,
  UserDetailsContainer,
  ItemsContainer,
  UserLogo,
  OpenLinksButton,
  NavBarExtendedContainer,
  MidNavComponentsExtended,
  RightNavComponentsExtended,
  NavBarBackground,
} from "./styles";
const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const handleBackgroundClick = () => {
    setExtendNavbar((curr) => !curr);
  };
  return (
    <NavBarContainer extendNavbar={extendNavbar}>
      <NavBarInnerContainer>
        <LeftNavComponents>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? (
              <IconHolder>
                <AiOutlineClose size={30} />
              </IconHolder>
            ) : (
              <IconHolder>
                <RxHamburgerMenu size={30} />
              </IconHolder>
            )}
          </OpenLinksButton>
          <IconHolder>
            <GiGraveFlowers size={30} fill="green" />
          </IconHolder>
          <LogoHeader>Grave Sites Managment</LogoHeader>
        </LeftNavComponents>
        <MidNavComponents>
          {headerData?.map((item) => {
            return (
              <NavigationSelections>
                <IconHolder className="selection-icons">{item.icon}</IconHolder>
                <NavLabelHolder>{item.label}</NavLabelHolder>
              </NavigationSelections>
            );
          })}
        </MidNavComponents>
        <RightNavComponents>
          <ItemsContainer>
            <BsSearch className="setting-icons" />
            <AiOutlineSetting className="setting-icons" />
            <BiHelpCircle className="setting-icons" />
          </ItemsContainer>
          <UserDetailsContainer>
            <UserLogo>JS</UserLogo>
            <UserDetails>
              <UserName>John Snow</UserName>
              <UserDesig>Municipality Officer</UserDesig>
            </UserDetails>
            <RiArrowDropDownLine />
          </UserDetailsContainer>
        </RightNavComponents>
      </NavBarInnerContainer>
      {/* For Tablets and Mobile Devices */}
      {extendNavbar && (
        <NavBarExtendedContainer>
          <MidNavComponentsExtended>
            {headerData?.map((item) => {
              return (
                <NavigationSelections>
                  <IconHolder className="selection-icons">
                    {item.icon}
                  </IconHolder>
                  <NavLabelHolder>{item.label}</NavLabelHolder>
                </NavigationSelections>
              );
            })}
          </MidNavComponentsExtended>
          <RightNavComponentsExtended>
            <UserDetailsContainer>
              <UserLogo>JS</UserLogo>
              <UserDetails>
                <UserName>John Snow</UserName>
                <UserDesig>Municipality Officer</UserDesig>
              </UserDetails>
              <RiArrowDropDownLine />
            </UserDetailsContainer>
          </RightNavComponentsExtended>
        </NavBarExtendedContainer>
      )}
      {/* Background to close */}
      {extendNavbar && <NavBarBackground onClick={handleBackgroundClick} />}
    </NavBarContainer>
  );
};

export default Header;
