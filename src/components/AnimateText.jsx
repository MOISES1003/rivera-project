import styled, { keyframes } from "styled-components";

export function AminateText({text}) {
  return <Text>{text}</Text>;
}

const shine = keyframes`
      0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 300px;
  }
`;
const Text = styled.a`
  position: absolute;
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #9f9f9f 0%, #fff 10%, #868686 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 25px;
  text-decoration: none;
  white-space: nowrap;
  font-family: "Poppins", sans-serif;
  user-select: none;
`;
