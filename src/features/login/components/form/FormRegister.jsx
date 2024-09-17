import styled from "styled-components";
import { InputText } from "../../../../components/InputText";
import { Button } from "../../../../components/Button";
import { handleSubmitForm } from "../../../../core/utils/handleSubmitForm";
import { useState } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";
import { ButtonIcons } from "../ButtonIcons";
import aiconFacebook from "../../../../assets/images/facebook.png"
import aiconGoogle from "../../../../assets/images/search.png"
import aiconTwitter from "../../../../assets/images/twitter.png"
export function FormRegister({ event }) {
  const { createLoading, createError, addUser } = useCreateUser();
  const [newUser, setNewUser] = useState({
    ruc: "",
    usuario: "",
    password: "",
  });
  const handleAddLens = () => {
    console.log("ejecutar");
    addUser(newUser);
    setNewUser({ ruc: "", usuario: "", password: "" });
  };
  return (
    <Content>
      <Title>
        <h1>OptiCore</h1>
      </Title>
      <Formulario onSubmit={handleSubmitForm}>
        <h2>Sing in</h2>
        <ContentInputs>
          <InputText
            placeholder="Ruc:"
            height="35px"
            width="300px"
            value={newUser.ruc}
            event={(e) => setNewUser({ ...newUser, ruc: e.target.value })}
          />
          <InputText
            placeholder="Usuario:"
            height="35px"
            width="300px"
            value={newUser.usuario}
            event={(e) => setNewUser({ ...newUser, usuario: e.target.value })}
          />
          <InputText
            placeholder="Password:"
            type="password"
            height="35px"
            width="300px"
            value={newUser.password}
            event={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
          <div className="contenRecoverPassword">
            <button href="" className="recoverPassword" onClick={event}>
              are you registered?
            </button>
          </div>
        </ContentInputs>
        {createLoading ? (
          <Button
            text="creating"
            width="300px"
            height="30px"
            colorRgb="27, 125, 203"
            colorTextRgb="255, 255, 255"
            event={handleAddLens}
          />
        ) : (
          <Button
            text="Register"
            width="300px"
            height="30px"
            colorRgb="27, 125, 203"
            colorTextRgb="255, 255, 255"
            event={handleAddLens}
          />
        )}

        <h1>{createError}</h1>
        <h1>Comprar</h1>
        {/* <ContentButtons>
        <ButtonIcons Icon={aiconFacebook}/>
        <ButtonIcons Icon={aiconGoogle}/>
        <ButtonIcons Icon={aiconTwitter}/>
      </ContentButtons> */}
      </Formulario>
    </Content>
  );
}

const Content = styled.div`
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Title = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  padding: 5px;
  color: rgb(80, 100, 143);
`;
const Formulario = styled.form`
  height: 90%;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 10px 5px 40px 10px;
  }
`;
const ContentInputs = styled.div`
  width: 100%;
  .contenRecoverPassword {
    display: flex;
    justify-content: end;
    padding: 5px;
    .recoverPassword {
      color: #6262e4;
      right: 0;
      border:none;
      background-color: transparent;
      cursor: pointer;
      font-size: 15px;
      transition: all 0.5s ease-in-out;
      &:hover{
        color: #676752;
      }
    }
  }
`;
const ContentButtons = styled.div`
width: 200px;
display:flex;
margin-top:10px;
justify-content: space-around;
`;
