import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "primereact/resources/primereact.min.css"; // Estilos base de PrimeReact
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
