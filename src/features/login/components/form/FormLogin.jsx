import styled from "styled-components";
import { InputText } from "../../../../components/InputText";
import { Button } from "../../../../components/Button";
import { handleSubmitForm } from "../../../../core/utils/handleSubmitForm";
import { useState } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";

export function FormLogin({ event }) {
  const { loginLoading, loginError, acessUser } = useLoginUser();
  const [logUser, setLogUser] = useState({
    ruc: "",
    usuario: "",
    password: "",
  });
  const handleLoginUser = () => {
    console.log("ejecutar");
    acessUser(logUser);
    setLogUser({ ruc: "", usuario: "", password: "" });
  };
  return (
    <Content>
      <Title>
        <h1>OptiCore</h1>
      </Title>
      <Formulario onSubmit={handleSubmitForm}>
        <h2>login</h2>
        <ContentInputs>
          <InputText
            placeholder="Ruc:"
            height="35px"
            width="300px"
            value={logUser.ruc}
            event={(e) => setLogUser({ ...logUser, ruc: e.target.value })}
          />
          <InputText
            placeholder="Usuario:"
            height="35px"
            width="300px"
            value={logUser.usuario}
            event={(e) => setLogUser({ ...logUser, usuario: e.target.value })}
          />
          <InputText
            placeholder="Password:"
            type="password"
            height="35px"
            width="300px"
            value={logUser.password}
            event={(e) => setLogUser({ ...logUser, password: e.target.value })}
          />
          <div className="contenRecoverPassword">
            <a href="" className="recoverPassword">
              recover password?
            </a>
          </div>
        </ContentInputs>
        {loginLoading ? (
          <h1>logeando</h1>
        ) : (
          <Button
            text="sing in"
            width="300px"
            height="30px"
            colorRgb="27, 125, 203"
            colorTextRgb="255, 255, 255"
            event={handleLoginUser}
          />
        )}
        <span>---------O--------</span>
        <Button
          text="Register"
          width="300px"
          height="30px"
          colorRgb="27, 125, 203"
          colorTextRgb="255, 255, 255"
          event={event}
        />
      </Formulario>
      <contentButtons></contentButtons>
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
    }
  }
`;
const contentButtons = styled.div``;
