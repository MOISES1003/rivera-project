//en caso venga un array dentro del objeto, digamos que vendra todos los clientes que compraron el lente se colocara lo siguiente clientes = []
//y luego this.clientes = clientes en caso la logica del negocio lo pida asi
class LentsEntitie {
  constructor({
    id_lentes,
    id_tipoLuna,
    caracteristicas_Principal,
    poder_dioptria,
    stock,
    nivel_antirreflejo,
    polarizacion,
    proteccion_uv,
    indice_refraccion,
    fotocromatica,
    color_luna,
    material,
    descripcion,
    precio,
    id_proveedor,
    tipoluna
  }) {
    this.id_lentes = id_lentes;
    this.id_empresa = 1;
    this.id_tipoLuna = id_tipoLuna;
    this.caracteristicas_Principal = caracteristicas_Principal;
    this.poder_dioptria = poder_dioptria;
    this.stock = stock;
    this.nivel_antirreflejo = nivel_antirreflejo;
    this.polarizacion = polarizacion;
    this.proteccion_uv = proteccion_uv;
    this.indice_refraccion = indice_refraccion;
    this.fotocromatica = fotocromatica;
    this.color_luna = color_luna;
    this.material = material;
    this.descripcion = descripcion;
    this.precio = precio;
    this.id_proveedor = id_proveedor;
    this.inStock = this.isListInstock(); // Añadimos esta propiedad
    this.tipoluna = tipoluna; 
  }

  isInstock() {
    return this.stock > 0;
  }
  isListInstock() {
    return this.stock > 5;
  }
}
export default LentsEntitie;
