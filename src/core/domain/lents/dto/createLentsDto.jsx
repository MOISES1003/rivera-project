// CreateLensDTO es una clase que se utiliza para transferir datos de un nuevo lente
// desde la interfaz de usuario al dominio de la aplicación. Este DTO se asegura de que
// los datos necesarios estén presentes y correctamente formateados antes de crear una nueva entidad Lens.

class CreateLentsDto {
  constructor({ codigo, nombre, serie, stock, marca }) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.serie = serie;
    this.stock = stock;
    this.marca = marca;
  }
}

export default CreateLentsDto;