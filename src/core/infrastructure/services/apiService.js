import apiClient from '../clients/apiClient';

// CONSULTA GET
export async function GET(url, pageEstatic) {
    try {
        const response = await apiClient.get(pageEstatic ? pageEstatic : url);
        return {
            data: response.data.data,
            links: {
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                next_page_url: response.data.next_page_url,
                prev_page_url: response.data.prev_page_url,
                first_page_url: response.data.first_page_url,
                last_page_url: response.data.last_page_url,
            }
        };
    } catch (error) {
        console.error("Error en GET:", error);
        throw error;
    }
}

// CONSULTA PARA BUSCAR
export async function SEARCH(url, termino) {
    try {
        const response = await apiClient.get(`${url}?q=${termino}`);
        return response.data.data;
    } catch (error) {
        console.error("Error en SEARCH:", error);
        throw error;
    }
}

// CONSULTA POST
export async function POST(url, data) {
    try {
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error) {
        console.error("Error en POST:", error);
        throw error;
    }
}

// CONSULTA PUT
export async function PUT(url, data) {
    try {
        const response = await apiClient.put(url, data ? data : null);
        return response.data;
    } catch (error) {
        console.error("Error en PUT:", error);
        throw error;
    }
}

// CONSULTA PARA SUBIR IMAGEN (opcional)
export async function LOADIMG(formData) {
    try {
        const formDataWithImg = new FormData();
        formDataWithImg.append("file", formData.imagen_url);

        const response = await apiClient.post('/upload-image', formDataWithImg);
        return response.data.url;
    } catch (error) {
        console.error("Error en LOADIMG:", error);
        throw error;
    }
}

// CONSULTA PARA NAVEGAR ENTRE PAGINAS
export async function NAVEGATION(url) {
    try {
        const response = await apiClient.get(url);
        return {
            data: response.data.data,
            links: {
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                next_page_url: response.data.next_page_url,
                prev_page_url: response.data.prev_page_url,
                first_page_url: response.data.first_page_url,
                last_page_url: response.data.last_page_url,
            }
        };
    } catch (error) {
        console.error("Error en NAVEGATION:", error);
        throw error;
    }
}