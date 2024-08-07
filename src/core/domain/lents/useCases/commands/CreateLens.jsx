import CreateLentsDto from "../../dto/createLentsDto";

class CreateLens {
  constructor(lensRepository) {
    this.lensRepository = lensRepository;
  }

  async execute(lens) {
    const lenstDto = new CreateLentsDto(lens);
    return await this.lensRepository.create(lenstDto);
  }
}

export default CreateLens;
