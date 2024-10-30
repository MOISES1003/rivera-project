/*
 aqui se esta creando el caso de uso donde se consumira del repositorio 
 asi lo tendremos destructurado, con cada quien con sus responsabilidades
 primero se contruye el repositorio 
 y luego podemos ejecutarlo con el execute lo cual ejecutara el getAll 
 que pertenece al repositorio que contruimos al principio

 */
class GetAllMounts {
  constructor(mountsRepository) {
    this.mountsRepository = mountsRepository;
  }
  async execute(paginaEstatica) {
    try {
      return await this.mountsRepository.getAll(paginaEstatica);
    } catch (error) {
      console.error("Error executing GetLenses use case:", error);
      throw error;
    }
  }
}
export default GetAllMounts;
