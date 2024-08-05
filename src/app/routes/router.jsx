import { HashRouter, Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import { HomePage } from "../../pages/HomePage";
import { LentsPage } from "../../pages/LentsPages";

export function MyRouters() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LENTES} element={<LentsPage/>}/>
      </Routes>
    </HashRouter>
  );
}
