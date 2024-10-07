// CreateLensDTO es una clase que se utiliza para transferir datos de un nuevo lente
// desde la interfaz de usuario al dominio de la aplicación. Este DTO se asegura de que
// los datos necesarios estén presentes y correctamente formateados antes de crear una nueva entidad Lens.

class TypeLunasDto {
    constructor({
        id_tipoLuna,
        nombre
    }) {

      this.id_tipoLuna = id_tipoLuna;
      this.nombre = nombre

    }
  }
  
  export default TypeLunasDto;
  