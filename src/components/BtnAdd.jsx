import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

export function BtnAdd({active,setActive}) {
  return (
    <Btn onClick={()=>setActive(!active)} active={active}>
      <IoMdAdd className="icon" />
    </Btn>
  );
}
const Btn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    transform: ${(props)=>props.active? "rotate(225deg)": "rotate(0deg)"};
    transition: all 0.5s ease;
  }
`;
