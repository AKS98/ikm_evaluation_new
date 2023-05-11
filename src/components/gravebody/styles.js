import styled from "styled-components";

export const GraveBodyContainer= styled.div`
padding: 1rem 2rem;
position: relative;
`;
export const MainHeaderContainer= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
.burial-header {
    color: green;
    font-size: 1.5rem;
    font-weight: 600;
}
`;
export const StatusContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props)=> props?.status === "active" ? "green" : "gray"};
border-radius: 0.8rem;
padding: 0.5rem 1rem;
color: #FFF;
text-transform: capitalize;
`;

export const ItemsContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.8rem;
`;
export const PortalBackground= styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background: gray;
opacity: 0.3;
z-index: 999;
`;