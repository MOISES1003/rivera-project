import styled from "styled-components";
import { Loader } from "../../../components/Loader";
import { AminateText } from "../../../components/AnimateText";
import { useEffect, useState } from "react";
import {
  GetCookie,
  SetCookie,
} from "../../../core/infrastructure/services/CookieService";

export function LoadingPage() {
  const [active, setActive] = useState(GetCookie("loader"));
  const [message, setMessage] = useState("cargando los datos...");
  useEffect(() => {
    SetCookie("loader", "true");
    // Función para verificar el token
    const activeToken = () => {
      setActive(GetCookie("loader"));
    };
    // Establecer el intervalo para verificar el token cada segundo
    const intervalId = setInterval(activeToken, 4000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ContentLoading active={active}>
      <div className="loader">
        <Loader />
      </div>
      <div className="text">
        <AminateText text={message} />
      </div>
    </ContentLoading>
  );
}

const ContentLoading = styled.div`
  width: 100vw;
  height: ${(props) => (props.active ? "0vh" : "100vh")};
  display: ${(props) => (props.active ? "none" : "flex")};
  transition: all 0.5s ease;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: #220d0d;
  flex-direction: column;
  gap: 50px;
  left: 0;
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
