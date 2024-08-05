import axios from "axios";
import { Environment } from "../../../env/environment";

const apiClient = axios.create({
    baseURL: Environment.API_URL,
});

// Puedes agregar interceptores aquí si es necesario
apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;