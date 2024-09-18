import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MyRouters } from "./routes/router";
import StoreProvider from "./providers/storeProvider";
import { GlobalStyles } from "../assets/styles/GlobalStyle";
import { GetCookie } from "../core/infrastructure/services/CookieService";

function App() {
  return (
    <StoreProvider>
      <GlobalStyles/>
      <MyRouters />
    </StoreProvider>
  );
}

export default App;
