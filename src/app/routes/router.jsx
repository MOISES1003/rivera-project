import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import { useEffect, useState } from "react";
import { GetCookie } from "../../core/infrastructure/services/CookieService";
import axios from "axios";
import { NotFoundPage } from "../../pages/404/NotFoundPage";
import { SideBar } from "../../components/sideBar/SideBar";
import styled from "styled-components";

export function MyRouters() {
  const [token, setToken] = useState(GetCookie("token"));
  const { HOME, LENTES, LOGIN , MONTURA,SALEGLASES } = ROUTES;

  useEffect(() => {
    // Función para verificar el token
    const checkToken = () => {
      const currentToken = GetCookie("token");
      if (currentToken !== token) {
        setToken(currentToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${currentToken}`;
      }
    };
    // Establecer el intervalo para verificar el token cada segundo
    const intervalId = setInterval(checkToken, 1000);
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [token]); // Dependencia en el token para ejecutar el efecto cuando el token cambie

  return (
    <BrowserRouter>
      {token ? (
        <Content>
          <SideBar />
          <Routes>
            <Route path={HOME.PATH} element={<HOME.COMPONENT />} />
            <Route path={LENTES.PATH} element={<LENTES.COMPONENT />} />
            <Route path={MONTURA.PATH} element={<MONTURA.COMPONENT />} />
            <Route path={SALEGLASES.PATH} element={<SALEGLASES.COMPONENT />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Redirige a LOGIN si se intenta acceder a una ruta no definida */}
          </Routes>
        </Content>
      ) : (
        <Routes>
          <Route path={LOGIN.PATH} element={<LOGIN.COMPONENT />} />
          <Route path="*" element={<Navigate to={LOGIN.PATH} />} />
          {/* Redirige a LOGIN si se intenta acceder a una ruta no definida */}
        </Routes>
      )}
    </BrowserRouter>
  );
}
const Content = styled.main`
position: absolute;
display: flex;
background-color: ${(props) => props.theme.bodyColor};
color: ${(props) => props.theme.color};
width: 100vw;
height: 100vh; /* Asegura que ocupe toda la pantalla */
/* transition: all 0.5s ease; */
`;