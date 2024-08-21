import { HashRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import { HomePage } from "../../pages/HomePage";
import { LentsPage } from "../../pages/LentsPages";
import { LoginPage } from "../../pages/LoginPage";

export function MyRouters() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path={ROUTES.HOME} element={<LoginPage/>}/> */}
        <Route path={ROUTES.HOME} element={<LoginPage />} />
        <Route path={ROUTES.LENTES} element={<LentsPage/>}/>
      </Routes>
    </HashRouter>
  );
}
