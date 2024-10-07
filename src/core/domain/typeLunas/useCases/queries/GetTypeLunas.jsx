
class GetTypeLunas {
  constructor(typeLunaRepository) {
    this.typeLunaRepository = typeLunaRepository;
  }
  async execute() {
    try {
      return await this.typeLunaRepository.getAll();
    } catch (error) {
      console.error("Error executing GetLenses use case:", error);
      throw error;
    }
  }
}
export default GetTypeLunas;
