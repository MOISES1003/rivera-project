import IUserRepository from "../../domain/users/interfaces/IUserRepository";
import { POST } from "../services/apiService";


class UserRepository extends IUserRepository {
  constructor() {
    super();
  }
  async create(user) {
    const response = await POST("/usuarios/userRegister", user);
    console.log(response);
    return response.data;
  }
  async login(user){
    const response = await POST("/usuarios/accessUser", user);
    console.log(response);
    return response.data;
  }
}
export default UserRepository;
