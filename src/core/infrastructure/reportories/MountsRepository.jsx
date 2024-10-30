/*
aqui se contruye el repositorio de lo que vamos a consumir, funciones que se llamara 
en los queryes o commands , dentro de los casos de uso 
aqui es donde se comunica directamente con la api
*/
import LentsEntitie from "../../domain/lents/entities/lentsEntitie";
import MountsEntitie from "../../domain/mounts/entities/mountsEntitie";
import IMountsRepository from "../../domain/mounts/interfaces/IMountsRepository";
import { serialize } from "../../utils/serialize";
import { setPageStatic } from "../../utils/setPageStatic";
import { GET, NAVEGATION, POST, PUT } from "../services/apiService";

class MountsRepository extends IMountsRepository {
  constructor(apiClient) {
    super();
    // this.apiclient = apiClient
  }

  async create(lens) {
    const response = await POST("/lentes/CreateLente", lens);
    console.log(response.data)
    return response;
  }
  //
  async getAll(paginaEstatica) {
    try {
      const response = await GET("/monturas/ShowAllMonturas/20/1", paginaEstatica);
      const mountsData = response.data;
      const links = response.links;
      const pageStatic = setPageStatic(
        links.first_page_url,
        links.current_page
      );
      // Asegúrate de que mountsData tenga el formato esperado
      if (Array.isArray(mountsData)) {
        const data = mountsData.map((data) =>
          serialize(new MountsEntitie(data))
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
//   async getStockAll() {
//     try {
//       const response = await GET("/lentes/ShowAllLenteStock");
//       const lensesData = response.data;
//       // Asegúrate de que lensesData tenga el formato esperado
//       if (Array.isArray(lensesData)) {
//         const data = lensesData.map((data) =>
//           serialize(new LentsEntitie(data))
//         );
//         return { data };
//       } else {
//         throw new Error("Datos recibidos en un formato inesperado.");
//       }
//     } catch (error) {
//       console.error("Error fetching stock lenses:", error);
//       throw error;
//     }
//   }
//   async getNavigateLens(link) {
//     try {
//       const response = await NAVEGATION(link);
//       const lensesData = response.data;
//       const links = response.links;
//       const pageStatic = setPageStatic(
//         links.first_page_url,
//         links.current_page
//       );
//       // Asegúrate de que lensesData tenga el formato esperado
//       if (Array.isArray(lensesData)) {
//         const data = lensesData.map((data) =>
//           serialize(new LentsEntitie(data))
//         );
//         return { data, links, pageStatic };
//       } else {
//         throw new Error("Datos recibidos en un formato inesperado.");
//       }
//     } catch (error) {
//       console.error("Error fetching lenses:", error);
//       throw error;
//     }
//   }

//   //obtener por lente por su id
//   async getByLens(id) {
//     const response = await GET(`/lenses/${id}`);
//     return response.data;
//   }

//   //editar el lente
//   async update(lens) {
//     const response = await PUT(`/lentes/updateLente/${lens.id_lentes}`, lens);
//     console.log(response.data)
//     return response;
//   }
}

export default MountsRepository;
