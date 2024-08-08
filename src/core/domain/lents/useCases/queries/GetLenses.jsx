import LentsEntitie from "../../entities/lentsEntitie";

class GetLenses {
  constructor(lensRepository) {
    this.lensRepository = lensRepository;
  }
  async execute() {
    try {
      return await this.lensRepository.getAll();
    } catch (error) {
      console.error("Error executing GetLenses use case:", error);
      throw error;
    }
  }
}
export default GetLenses;
