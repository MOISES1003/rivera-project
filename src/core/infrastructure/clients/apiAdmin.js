import axios from "axios";
import { Environment } from "../../../env/environment";

const apiAdmin = axios.create({
    baseURL: Environment.API_URL_ADMIN,
});

// Puedes agregar interceptores aquí si es necesario
apiAdmin.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default apiAdmin;