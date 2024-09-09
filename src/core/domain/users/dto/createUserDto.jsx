// CreateLensDTO es una clase que se utiliza para transferir datos de un nuevo lente
// desde la interfaz de usuario al dominio de la aplicación. Este DTO se asegura de que
// los datos necesarios estén presentes y correctamente formateados antes de crear una nueva entidad Lens.

class CreateUserDto {
    constructor({ email, password, ruc }) {
      this.email = email;
      this.password = password;
      this.ruc = ruc;
    }
  }
  
  export default CreateUserDto;
  