import ILensRepository from "../../domain/lents/interfaces/ILensRepository";
import { GET, POST, PUT } from "../services/apiService";

class LensRepository extends ILensRepository {
  constructor(apiClient) {
    super();
    // this.apiclient = apiClient
  }

  async create(lens) {
    const response = await POST("/lenses", lens);
    return response.data;
  }
  async getAll() {
    const response = await GET("/lentes/ShowAllLente/20");
    return response.data;
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
