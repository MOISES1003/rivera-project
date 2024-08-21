import styled from "styled-components";
import { ContenLogin } from "../features/login/components/ContenLogin";
import { BallColorLogin } from "../features/login/components/BallColorLogin";
import { useState } from "react";

export function LoginPage() {
  const [active, setActive] = useState(true);
  function formatActiv (){
    setActive(!active)
  } 
  return (
    <ContenPage>
      <Content>
        <ContenLogin event={formatActiv} />
        <BallColorLogin active={active}/>
      </Content>
    </ContenPage>
  );
}

const ContenPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(195, 208, 217);
  position: absolute;
  
`;
const Content = styled.section`
  width: 60%;
  height: 70%;  
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: rgb(230, 230, 230);
  border-radius: 50px;
  transition: all 0.5s ease;
  overflow: hidden;
  align-items: center;
  @media (max-width: 700px) {
    width: 80%;
    height: 60%;
  }
`;
