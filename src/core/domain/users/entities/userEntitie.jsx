//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class UserEntitie {
  constructor({ usuario, password, ruc }) {
    this.usuario = usuario;
    this.password = password;
    this.ruc = ruc;
  }

  camposVacios() {
    // Retorna true solo si todos los campos tienen contenido
    return this.usuario !== "" && this.password !== "" && this.ruc !== "";
  }
}

export default UserEntitie;
