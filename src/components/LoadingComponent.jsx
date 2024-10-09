import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const LoadingComponent = ({ dynamicMessage }) => {
  const [message, setMessage] = useState(dynamicMessage);
  
  // UseEffect para actualizar el mensaje y reiniciar animación
  useEffect(() => {
    setMessage(dynamicMessage);
  }, [dynamicMessage]);

  return (
    <SpinnerContainer>
      <Spinner />
      <Loader>
        <p>loading</p>
        <Words key={message}>
          <Word>{message}</Word>
        </Words>
      </Loader>
    </SpinnerContainer>
  );
};

const spin = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const cycleWords = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  50% {
    opacity: 1;
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  border: 4px solid transparent;
  border-radius: 50%;
  border-right-color: #299fff;
  animation: ${spin} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: ${spin} 2s infinite;
  }

  &::after {
    margin: 8px;
    animation-duration: 3s;
  }
`;

const Loader = styled.div`
  color: #4a4a4a;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 25px;
  box-sizing: content-box;
  height: 40px;
  padding: 10px;
  display: flex;
  border-radius: 8px;
`;

const Words = styled.div`
  overflow: hidden;
`;

const Word = styled.span`
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #299fff;
  animation: ${cycleWords} 2s ease-in-out;
  opacity: 0;
  transform: translateY(100%);
  animation-fill-mode: forwards;
`;
