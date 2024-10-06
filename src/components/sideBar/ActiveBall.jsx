import styled from "styled-components";

import { Md3DRotation } from "react-icons/md";

export function ActiveBall({ event, active }) {
  return <BallDiv onClick={event} active={active}>{active ? <Md3DRotation /> : <Md3DRotation />}</BallDiv>;
}
const BallDiv = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  right: ${(props)=>props.active ? "10px": "-5px"};
  top: 80px;
  background-color: red;
  border: none;
  border-radius: 100%;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
