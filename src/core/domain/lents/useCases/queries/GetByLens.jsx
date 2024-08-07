class GetByLens {
  constructor(lensRepository) {
    this.lensRepository = lensRepository;
  }
  async execute(id) {
    return await this.lensRepository.getByLens(id);
  }
}

export default GetByLens;
