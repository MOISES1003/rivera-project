import { HomePage } from "../../pages/HomePage";
import { LentsPage } from "../../pages/LentsPages";
import { LoginPage } from "../../pages/LoginPage";
import { MontPage } from "../../pages/MontPage";

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
    MONTURA: {
        PATH: "/mont",
        COMPONENT: MontPage
    },
    // Agrega más rutas según sea necesario
};

export default ROUTES;