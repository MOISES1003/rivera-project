import CreateUserDto from "../../dto/createUserDto";
import UserEntitie from "../../entities/userEntitie";

class CreateUser{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(user){
        const userEntity = new UserEntitie(user);
        if(!userEntity.validarArroba()){
            throw new Error("debe ser formato email")
          }
      
        const userDto = new CreateUserDto(userEntity);
        return await this.userRepository.create(userDto);
    }
}

export default CreateUser;