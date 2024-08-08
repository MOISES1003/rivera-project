import LentsEntitie from "../../domain/lents/entities/lentsEntitie";
import ILensRepository from "../../domain/lents/interfaces/ILensRepository";
import { serialize } from "../../utils/serialize";
import { GET, POST, PUT } from "../services/apiService";

class LensRepository extends ILensRepository {
  constructor(apiClient) {
    super();
    // this.apiclient = apiClient
  }

  async create(lens) {
    const response = await POST("/CreateLente", lens);
    return response.data;
  }
  async getAll() {
    try {
      const response = await GET("/lentes/ShowAllLente/20");
      const lensesData = response.data;

      // Asegúrate de que lensesData tenga el formato esperado
      if (Array.isArray(lensesData)) {
        const data = lensesData.map((data) =>
          serialize(new LentsEntitie(data))
        );
        return data;
      } else {
        throw new Error("Datos recibidos en un formato inesperado.");
      }
    } catch (error) {
      console.error("Error fetching lenses:", error);
      throw error;
    }
  }
  async getByLens(id) {
    const response = await GET(`/lenses/${id}`);
    return response.data;
  }
  async update(lens) {
    const response = await PUT(`/lens/${lens.id}`, lens);
    return response.data;
  }
}

export default LensRepository;
