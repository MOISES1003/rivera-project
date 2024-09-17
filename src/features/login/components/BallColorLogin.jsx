import styled, { css, keyframes } from "styled-components";
import { WaveDiv } from "./WaveDiv";
import img1 from "../../../assets/images/img1.png"
export function BallColorLogin({ active }) {
  return <Ball active={active}>
    <IMG src={img1} alt="" />
    <WaveDiv/>
  </Ball>;
}
// Animación para expandir y contraer el círculo
const expandAndContract = keyframes`
  0% {
    border-radius: 0px 50% 50% 0px;
    width: 54%;
    transform: translateX(-240px);
  }
  50% {
    border-radius: 0% 0% 0% 0%;
    width: 100%;
    transform: translateX(0);
  }
  100% {
    border-radius: 50% 0px 0px 50%;
    width: 54%;
    transform: translateX(240px);
  }
`;

// Alternativa para que la animación funcione hacia el otro lado
const expandAndContractReverse = keyframes`
  0% {
    border-radius: 50% 0px 0px 50%;
    width: 54%;
    transform: translateX(240px);
  }
  50% {
    border-radius: 0% 0% 0% 0%;
    width: 100%;
    transform: translateX(0);
  }
  100% {
    border-radius: 0px 50% 50% 0px;
    width: 54%;
    transform: translateX(-240px);
  }
`;
const Ball = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #1704e9, #210777);
  position: absolute;
  transition: all 0.5s ease;
  overflow: hidden;
  animation: ${(props) =>
    props.active
      ? css`
          ${expandAndContractReverse} 1s ease forwards
        `
      : css`
          ${expandAndContract} 1s ease forwards
        `};
`;
const IMG = styled.img`
position: absolute;
/* width: 400px; */
left:-20px;
bottom: 0px;
`;
