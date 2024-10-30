//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class MountsEntitie {
  constructor({ id_montura, id_empresa, serie, codigo, stock }) {
    this.id_montura = id_montura;
    this.id_empresa = id_empresa;
    this.serie = serie;
    this.codigo = codigo;
    this.stock = stock;
    this.inStock = this.isInstock(); // Añadimos esta propiedad
  }

  isInstock() {
    return this.stock > 0;
  }
}
export default MountsEntitie;
