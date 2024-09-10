import CreateUserDto from "../../dto/createUserDto";
import UserEntitie from "../../entities/userEntitie";

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    const userEntity = new UserEntitie(user);

    const userDto = new CreateUserDto(userEntity);
    return await this.userRepository.create(userDto);
  }
}

export default CreateUser;
