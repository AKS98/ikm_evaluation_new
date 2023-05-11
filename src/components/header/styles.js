import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: ${(props) => (props.extendedNav ? "100vh" : "5rem")};
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 0.8rem;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;
export const NavBarInnerContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1rem;
  border-bottom: solid 1px #ccc;
`;
export const LeftNavComponents = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  gap: 1rem;
`;
export const MidNavComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  gap: 0rem;

  @media (max-width: 1023px) {
    display: none;
  }
`;
export const RightNavComponents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  gap: 1.5rem;
  @media (max-width: 1023px) {
    display: none;
  }
`;
export const IconHolder = styled.div``;
export const LogoHeader = styled.div`
  font-size: 1.1em;
  font-weight: 600;
`;
export const NavigationSelections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  .selection-icons {
    font-size: 1.6em;
  }
`;
export const NavLabelHolder = styled.div`
  font-size: 1.2em;
  padding-left: 0.8em;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .setting-icons {
    font-size: 1.2em;
  }
`;
export const UserDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const UserLogo = styled.div`
  background: green;
  border-radius: 50%;
  padding: 0.35rem;
  width: 2.5rem;
  text-align: center;
`;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserName = styled.div`
  font-size: 1.2em;
`;
export const UserDesig = styled.div`
  font-size: 0.6em;
  color: #ccc;
`;

// Media Queries

export const OpenLinksButton = styled.div`
  @media (min-width: 1023px) {
    display: none;
  }
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
`;

export const NavBarExtendedContainer= styled.div`
width: 15rem;
position: absolute;
top: 5rem;
padding: 1rem;
height: calc(100% - 5rem);
background-color: #000;
display: flex;
flex-direction: column;
align-items: space-between;
justify-content: space-between;
z-index: 1000;
@media and (max-width: 768px){
    width: 100%;
}
`;
export const MidNavComponentsExtended= styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 0.5rem;
`;
export const RightNavComponentsExtended= styled.div`

`;
export const NavBarBackground= styled.div`
position: fixed;
z-index: 999;
background: transparent;
height: 100vh;
width: 100vw;
top: 0;
left:0
`;
