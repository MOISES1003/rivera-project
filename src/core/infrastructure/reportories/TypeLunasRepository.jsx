/*
aqui se contruye el repositorio de lo que vamos a consumir, funciones que se llamara 
en los queryes o commands , dentro de los casos de uso 
aqui es donde se comunica directamente con la api
*/
import TypeLunasEntitie from "../../domain/typeLunas/entities/typeLunasEntitie";
import ITypeLunaRepository from "../../domain/typeLunas/interfaces/ITypeLunaRepository";
import { serialize } from "../../utils/serialize";
import { GET, POST, PUT } from "../services/apiService";

class TypeLunasRepository extends ITypeLunaRepository {
  constructor(apiClient) {
    super();
    // this.apiclient = apiClient
  }

//   async create(lens) {
//     const response = await POST("/lentes/CreateLente", lens);
//     console.log(response.data)
//     return response.data;
//   }
  //
  async getAll() {
    try {
      const response = await GET("/tipoLuna/ShowAllTipoLuna");
      const lensesData = response.data;
      console.log(lensesData);
      // Asegúrate de que lensesData tenga el formato esperado
      if (Array.isArray(lensesData)) {
        const data = lensesData.map((data) =>
          serialize(new TypeLunasEntitie(data))
        );
        return { data };
      } else {
        throw new Error("Datos recibidos en un formato inesperado.");
      }
    } catch (error) {
      console.error("Error fetching lenses:", error);
      throw error;
    }
  }

    //   //obtener por lente por su id
    //   async getByLens(id) {
    //     const response = await GET(`/lenses/${id}`);
    //     return response.data;
    //   }

    //   //editar el lente
    //   async update(lens) {
    //     const response = await PUT(`/lens/${lens.id}`, lens);
    //     return response.data;
    //   }
}

export default TypeLunasRepository;
