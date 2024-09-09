import { Environment } from "../../../env/environment";
import IUserRepository from "../../domain/users/interfaces/IUserRepository";

class UserRepository extends IUserRepository {
  constructor() {
    super();
  }
  async create(user) {
    const response = await POST(
      Environment.API_URL_ADMIN + "/user/CreateUsuario",
      user
    );
    return response.data;
  }
}
export default UserRepository;