class UpdatedLens{
    constructor(lensRepository){
        this.lensRepository = lensRepository;
    }

    async excute(lens){
       return await this.lensRepository.update(lens); 
    }
    
}
export default UpdatedLens;