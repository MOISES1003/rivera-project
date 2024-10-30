// CreateLensDTO es una clase que se utiliza para transferir datos de un nuevo lente
// desde la interfaz de usuario al dominio de la aplicación. Este DTO se asegura de que
// los datos necesarios estén presentes y correctamente formateados antes de crear una nueva entidad Lens.

class mountsDto {
  constructor({ id_montura, id_empresa, serie, codigo, stock }) {
    this.id_montura = id_montura;
    this.id_empresa = 1;
    this.serie = serie;
    this.codigo = codigo;
    this.stock = stock;
  }
}

export default mountsDto;
