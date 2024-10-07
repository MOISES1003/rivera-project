/*
aqui se contruye el repositorio de lo que vamos a consumir, funciones que se llamara 
en los queryes o commands , dentro de los casos de uso 
aqui es donde se comunica directamente con la api
*/
import LentsEntitie from "../../domain/lents/entities/lentsEntitie";
import ILensRepository from "../../domain/lents/interfaces/ILensRepository";
import { serialize } from "../../utils/serialize";
import { setPageStatic } from "../../utils/setPageStatic";
import { GET, NAVEGATION, POST, PUT } from "../services/apiService";

class LensRepository extends ILensRepository {
  constructor(apiClient) {
    super();
    // this.apiclient = apiClient
  }

  async create(lens) {
    const response = await POST("/lentes/CreateLente", lens);
    console.log(response.data)
    return response.data;
  }
  //
  async getAll(paginaEstatica) {
    try {
      const response = await GET("/lentes/ShowAllLente/20", paginaEstatica);
      const lensesData = response.data;
      const links = response.links;
      const pageStatic = setPageStatic(
        links.first_page_url,
        links.current_page
      );
      // Asegúrate de que lensesData tenga el formato esperado
      if (Array.isArray(lensesData)) {
        const data = lensesData.map((data) =>
          serialize(new LentsEntitie(data))
        );
        return { data, links, pageStatic };
      } else {
        throw new Error("Datos recibidos en un formato inesperado.");
      }
    } catch (error) {
      console.error("Error fetching lenses:", error);
      throw error;
    }
  }
  async getNavigateLens(link) {
    try {
      const response = await NAVEGATION(link);
      const lensesData = response.data;
      const links = response.links;
      const pageStatic = setPageStatic(
        links.first_page_url,
        links.current_page
      );
      // Asegúrate de que lensesData tenga el formato esperado
      if (Array.isArray(lensesData)) {
        const data = lensesData.map((data) =>
          serialize(new LentsEntitie(data))
        );
        return { data, links, pageStatic };
      } else {
        throw new Error("Datos recibidos en un formato inesperado.");
      }
    } catch (error) {
      console.error("Error fetching lenses:", error);
      throw error;
    }
  }

  //obtener por lente por su id
  async getByLens(id) {
    const response = await GET(`/lenses/${id}`);
    return response.data;
  }

  //editar el lente
  async update(lens) {
    const response = await PUT(`/lens/${lens.id}`, lens);
    return response.data;
  }
}

export default LensRepository;
