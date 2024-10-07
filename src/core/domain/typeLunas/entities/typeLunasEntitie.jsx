//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class TypeLunasEntitie {
    constructor({
        id_tipoLuna,
        nombre
    }) {

      this.id_tipoLuna = id_tipoLuna;
      this.nombre = nombre

    }
  }
  
  export default TypeLunasEntitie;
  