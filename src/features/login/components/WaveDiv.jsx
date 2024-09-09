import styled, { keyframes } from "styled-components";
import wavePng from "../../../assets/images/wave.png";
export function WaveDiv() {
  return (
    <ContentWave>
      <Wave className="wave wave1"></Wave>
      <Wave className="wave wave2"></Wave>
      <Wave className="wave wave3"></Wave>
    </ContentWave>
  );
}

const waveAnimate = keyframes`
  0% {
    background-position-x:0;
  }
  100% {
    background-position-x:800px;
  }
`;

const waveAnimate2 = keyframes`
  0% {
    background-position-x:0;
  }
  100% {
    background-position-x:-800px;
  }
`;
const ContentWave = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${wavePng});
    background-size: 800px 80px;
  }
  .wave.wave1 {
    animation: ${waveAnimate} 25s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  .wave.wave2 {
    animation: ${waveAnimate2} 12s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  .wave.wave3 {
    animation: ${waveAnimate} 14s linear infinite;
    z-index: 998;
    opacity: 0.7;
    animation-delay: -2s;
    bottom: 15;
  }
`;
const Wave = styled.div``;
