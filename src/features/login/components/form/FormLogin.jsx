import styled from "styled-components";
import { InputText } from "../../../../components/InputText";
import { Button } from "../../../../components/Button";
import { handleSubmitForm } from "../../../../core/utils/handleSubmitForm";

export function FormLogin({event}) {
  return (
    <Content>
      <Title>
        <h1>OptiCore</h1>
      </Title>
      <Formulario onSubmit={handleSubmitForm}>
        <h2>login</h2>
        <ContentInputs>
          <InputText placeholder="Ruc:" height="35px" width="300px" />
          <InputText placeholder="Correo:" height="35px" width="300px" />
          <InputText
            placeholder="Password:"
            type="password"
            height="35px"
            width="300px"
          />
          <div className="contenRecoverPassword">
            <a href="" className="recoverPassword">
              recover password?
            </a>
          </div>
        </ContentInputs>
        <Button
          text="Sing In"
          width="300px"
          height="30px"
          colorRgb="27, 125, 203"
          colorTextRgb="255, 255, 255"
        />
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
