import ROUTES from "../../app/routes/routes";

const { LENTES, LOGIN, MONTURA } = ROUTES;
const DataItems = [
  //   {
  //     id: 1,
  //     name: "Dashboard",
  //     // icon: <MdCategory />,
  //     path: "/dashboard",
  //   },
  {
    name: "Balance",
    // icon: <FaChartLine />,
    path: "/balance",
    subItems: [
      { name: "Listado de Productos", path: "/productos" },
      { name: "Lotes", path: "/lotes" },
      { name: "Categorias", path: "/categorias" },
    ],
  },
  {
    name: "Insumos",
    // icon: <FaBoxOpen />,
    subItems: [
      { name: "Monturas", path: MONTURA.PATH },
      { name: "Lunas", path: LENTES.PATH },
      { name: "Medicamentos", path: "/categorias" },
    ],
  },
  {
    name: "Clientes",
    // icon: <FaTruck />,
    path: "/proveedores",
    subItems: [
      { name: "Histotial", path: "/productos" },
      { name: "Operaciones", path: "/lotes" },
      { name: "Citas", path: "/categorias" },
    ],
  },
];

export default DataItems;
