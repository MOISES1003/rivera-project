import styled from "styled-components";
import { InputText } from "../../../../components/InputText";
import { Button } from "../../../../components/Button";
import { handleSubmitForm } from "../../../../core/utils/handleSubmitForm";
import { useState } from "react";
import { useLoginUser } from "../../hooks/useLoginUser";
import Logo from "../../../../assets/images/logo.png";
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
        <Img srcSet={Logo} alt="OptiCore" />
      </Title>
      <Formulario onSubmit={handleSubmitForm}>
        <h2>login</h2>
        <ContentInputs>
          <InputText
            placeholder="Ruc:"    
            title="Ruc:"
            height="35px"
            width="300px"
            value={logUser.ruc}
            handleChange={(e) => setLogUser({ ...logUser, ruc: e.target.value })}
          />
          <InputText
            placeholder="Usuario:"
            title="Usuario"
            height="35px"
            width="300px"
            value={logUser.usuario}
            handleChange={(e) => setLogUser({ ...logUser, usuario: e.target.value })}
          />
          <InputText
            placeholder="Password:"
            title="Password"
            type="password"
            height="35px"
            width="300px"
            value={logUser.password}
            handleChange={(e) => setLogUser({ ...logUser, password: e.target.value })}
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
    }
  }
`;
const Img = styled.img`
  height: 300px;
`;
