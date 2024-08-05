class LentsEntitie {
  constructor({ id_lentes, codigo, serie, stock, marca }) {
    this.id_lentes = id_lentes;
    this.codigo = codigo;
    this.nombre = nombre;
    this.serie = serie;
    this.stock = stock;
    this.marca = marca;
  }
  isInstock() {
    return this.stock > 0;
  }
}
export default LentsEntitie;