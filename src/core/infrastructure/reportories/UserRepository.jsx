import IUserRepository from "../../domain/users/interfaces/IUserRepository";
import { POST_ADMIN } from "../services/adminApiService";

class UserRepository extends IUserRepository {
  constructor() {
    super();
  }
  async create(user) {
    const response = await POST_ADMIN("/usuarios/userRegister", user);
    console.log(response);
    return response.data;
  }
}
export default UserRepository;
