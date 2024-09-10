import apiAdmin from "../clients/apiAdmin";

// CONSULTA POST
export async function POST_ADMIN(url, data) {
    try {
        const response = await apiAdmin.post(url, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error en POST:", error);
        throw error;
    }
}