import styled from "styled-components";
import { FormLogin } from "./form/FormLogin";
import { FormRegister } from "./form/FormRegister";
import { Button } from "../../../components/Button";

export function ContenLogin({ event }) {
  return (
    <ContenForm>
      <FormRegister event={event} />
      <FormLogin event={event} />
    </ContenForm>
  );
}

const ContenForm = styled.article`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(13, 10, 61);
  border-radius: 30px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
`;
