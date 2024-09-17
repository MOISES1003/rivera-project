import styled, { keyframes } from "styled-components";

export function ButtonIcons({ event, Icon }) {
  return (
    <Btn onClick={event}>
      <img srcSet={Icon} alt="" />
    </Btn>
  );
}

const Btn = styled.button`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  transform:scale(1);
  transition: all 0.5s ease;
  img {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  &:hover {
     transform:scale(0.8);
    }
`;
