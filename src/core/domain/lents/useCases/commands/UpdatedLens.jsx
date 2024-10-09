import LentsDto from "../../dto/lentsDto";
import LentsEntitie from "../../entities/lentsEntitie";

class UpdatedLens{
    constructor(lensRepository){
        this.lensRepository = lensRepository;
    }

    async excute(lens){
        const lensEntity = new LentsEntitie(lens);

        if(!lensEntity.isInstock()){
          throw new Error("el stock del lente no puede ser 0")
        }
    
        const lenstDto = new LentsDto(lensEntity);
       return await this.lensRepository.update(lenstDto); 
    }
    
}
export default UpdatedLens;