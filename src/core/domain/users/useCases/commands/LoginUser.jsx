
import UserDto from "../../dto/userDto";
import UserEntitie from "../../entities/userEntitie";

class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    //primero declaro la entidad para poder usar las logicas de negocio que requiera antes de enviar esos datos al dto
    const userEntity = new UserEntitie(user);
    if (userEntity.camposVacios()) {
      const userDto = new UserDto(userEntity);
      return await this.userRepository.login(userDto);
    } else {
      throw new Error("hay campos vacios");
    }
  }
}

export default LoginUser;
