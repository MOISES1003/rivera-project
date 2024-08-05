class GetLenses {
  constructor(lensRepository) {
    this.lensRepository = lensRepository;
  }
  async execute() {
    return await this.lensRepository.getAll();
  }
}
export default GetLenses;