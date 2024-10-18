import { HomePage } from "../../pages/HomePage";
import { LentsPage } from "../../pages/LentsPages";
import { LoginPage } from "../../pages/LoginPage";
import { MontPage } from "../../pages/MontPage";
import { SaleGlasses } from "../../pages/SaleGlassesPage";

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
    SALEGLASES: {
        PATH: "/saleGlasses",
        COMPONENT: SaleGlasses
    },
    // Agrega más rutas según sea necesario
};

export default ROUTES;