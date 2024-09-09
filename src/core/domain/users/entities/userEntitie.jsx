//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class UserEntitie {
    constructor({ email, password, ruc }) {
        this.email = email;
        this.password = password;
        this.ruc = ruc;
    }
    
    validarArroba() {
    const regex = /@/;
    return regex.test(this.email); // Devuelve true si contiene @, false si no
  };
  }
   
  export default UserEntitie;