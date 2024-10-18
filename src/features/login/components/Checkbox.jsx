import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const Checkmark = styled.div`
  --clr: #0b6e4f;
  position: relative;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: solid 2px var(--clr);
  border-radius: 25%;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ & {
    background-color: var(--clr);
    border-radius: 0.5rem;
    animation: pulse 500ms ease-in-out;
  }

  input:checked ~ &::after {
    display: block;
    width: 0.25em;
    height: 0.5em;
    border: solid #e0e0e2;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(405deg);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 #0b6e4f90;
      rotate: 20deg;
    }
    50% {
      rotate: -20deg;
    }
    75% {
      box-shadow: 0 0 0 10px #0b6e4f60;
    }
    100% {
      box-shadow: 0 0 0 13px #0b6e4f30;
      rotate: 0;
    }
  }
`;

// Componente Checkbox
const Checkbox = ({checked, onChange}) => {
  return (
    <Container>
      <input type="checkbox" onChange={onChange} checked={checked}/>
      <Checkmark />
    </Container>
  );
};

export default Checkbox;
