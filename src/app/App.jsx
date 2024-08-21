import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MyRouters } from "./routes/router";
import StoreProvider from "./providers/storeProvider";
import { GlobalStyles } from "../assets/styles/GlobalStyle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StoreProvider>
      <GlobalStyles/>
      <MyRouters />
    </StoreProvider>
  );
}

export default App;
