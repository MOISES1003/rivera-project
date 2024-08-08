//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class LentsEntitie {
  constructor({ id_lentes, codigo,nombre, serie, stock, marca }) {
    this.id_lentes = id_lentes;
    this.codigo = codigo;
    this.nombre = nombre;
    this.serie = serie;
    this.stock = stock;
    this.marca = marca;
    this.inStock = this.isInstock(); // Añadimos esta propiedad
  }

  isInstock() {
    return this.stock > 0;
  }
}
export default LentsEntitie;