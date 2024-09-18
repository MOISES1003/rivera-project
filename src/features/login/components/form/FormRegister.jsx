import styled from "styled-components";
import { InputText } from "../../../../components/InputText";
import { Button } from "../../../../components/Button";
import { handleSubmitForm } from "../../../../core/utils/handleSubmitForm";
import { useState } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";
import Logo from "../../../../assets/images/logo.png";
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
        <Img srcSet={Logo} alt="OptiCore" />
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
     <h1>creando</h1>
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
      </Formulario>
    </Content>
  );
}

const Content = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Formulario = styled.form`
  height: 75%;
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
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 15px;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #676752;
      }
    }
  }
`;

const Img = styled.img`
  height: 300px;
`;
