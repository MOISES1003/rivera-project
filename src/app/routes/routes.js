import { HomePage } from "../../pages/HomePage";
import { LentsPage } from "../../pages/LentsPages";
import { LoginPage } from "../../pages/LoginPage";

const ROUTES = {
    HOME: {
        PATH: "/",
        COMPONENT: HomePage,
    },
    LOGIN: {
        PATH: "/",
        COMPONENT: LoginPage,
    },
    LENTES: {
        PATH: "/lents",
        COMPONENT: LentsPage
    },
    // Agrega más rutas según sea necesario
};

export default ROUTES;