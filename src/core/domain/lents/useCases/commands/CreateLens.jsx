import CreateLentsDto from "../../dto/createLentsDto";
import LentsEntitie from "../../entities/lentsEntitie";

class CreateLens {
  constructor(lensRepository) {
    this.lensRepository = lensRepository;
  }

  async execute(lens) {
    const lensEntity = new LentsEntitie(lens);

    if(!lensEntity.isInstock()){
      throw new Error("el lente no puede ser de stock 0")
    }

    const lenstDto = new CreateLentsDto(lensEntity);
    return await this.lensRepository.create(lenstDto);
  }
}

export default CreateLens;
