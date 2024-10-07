import React, { useState } from "react";
import styled from "styled-components";

export function ToggleButton({text,value,event}) {
//   const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    event(!value)
  };

  return (
    <ContenButton>
    <span>{text}</span> 
    <Button onClick={handleToggle}>
      <Knobs checked={value} />
      {/* <Layer checked={isChecked} /> */}
    </Button>
    </ContenButton>
   
  );
}

const Button = styled.div`
  /* top: 50%; */
  width: 74px;
  height: 30px;
  /* margin: -20px auto 0 auto; */
  overflow: hidden;
  border-radius: 100px; /* Circular corners */
  background-color: #1a1a1a;
  display: flex;
  padding: 5px;
  border: 1px solid #333;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
`;
const ContenButton = styled.div`

`;
const Knobs = styled.div`
  z-index: 2;
  transform: ${(props) =>
    props.checked ? "translateX(40px)" : "translateX(0px)"};
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  &:before {
    content: "${(props) => (props.checked ? "SI" : "NO")}";
    /* top: 4px; */
    width: 50px;
    height: 25px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 5px;
    background-color: ${(props) => (props.checked ? " #03a9f4" : "#f44336")};
    border-radius: 10px;
    /* transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15); */
  }
  /*  */
`;

// const Layer = styled.div`
//   width: 100%;
//   background-color: ${(props) => (props.checked ? "#fcebeb" : "#ebf7fc")};
//   transition: 0.3s ease all;
//   z-index: 1;
//   border-radius: 100px;
// `;
