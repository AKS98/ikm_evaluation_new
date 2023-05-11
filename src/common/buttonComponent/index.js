import React, { useEffect } from "react";
import styled from "styled-components";

const ButtonComponent = (props) => {
  const handleClick = () => {
    props.handleOnClick(props);
  };
  return (
    <ButtonContainer type={props.type} onClick={handleClick}>
      {props.label}
    </ButtonContainer>
  );
};

export default ButtonComponent;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  background-color: ${(props) =>
    props.type === "submit" || props.type === "add" ? "green" : "gray"};
  color: #fff;
  border-radius: 1rem;
  min-width: 5rem;
  cursor: pointer;
`;
