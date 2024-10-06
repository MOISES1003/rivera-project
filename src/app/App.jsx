import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MyRouters } from "./routes/router";
import StoreProvider from "./providers/storeProvider";
import { GlobalStyles } from "../assets/styles/GlobalStyle";
import {
  GetCookie,
  SetCookie,
} from "../core/infrastructure/services/CookieService";
import { ThemeProvider } from "styled-components";
import { Dark, Light } from "../assets/styles/Themes";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(GetCookie("theme"));
  useEffect(() => {
    // Función para verificar el token
    const checkTheme = () => {
      const currentToken = GetCookie("theme");
      if (!currentToken) {
        SetCookie("theme", 1);
        setTheme(GetCookie("theme"))
      }
      setTheme(GetCookie("theme"))
    };
    const intervalId = setInterval(checkTheme, 500);
    return () => clearInterval(intervalId);
  }, [theme]);
  return (
    <StoreProvider>
      <GlobalStyles />
      <ThemeProvider theme={theme == 1 ? Light :Dark}>
        <MyRouters />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
