class CreateLens{
constructor(lensRepository){
this.lensRepository = lensRepository;
}

async execute(lens){
return await this.lensRepository.create(lens);
}
};

export default CreateLens;