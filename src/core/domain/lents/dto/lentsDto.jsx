// CreateLensDTO es una clase que se utiliza para transferir datos de un nuevo lente
// desde la interfaz de usuario al dominio de la aplicación. Este DTO se asegura de que
// los datos necesarios estén presentes y correctamente formateados antes de crear una nueva entidad Lens.

class LentsDto {
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
  }
}

export default LentsDto;
