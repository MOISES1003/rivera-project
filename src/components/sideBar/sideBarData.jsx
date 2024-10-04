const DataItems = [
//   {
//     id: 1,
//     name: "Dashboard",
//     // icon: <MdCategory />,
//     path: "/dashboard",
//   },
  {
    id: 3,
    name: "Productos",
    // icon: <FaBoxOpen />,
    subItems: [
      { name: "Listado de Productos", path: "/productos" },
      { name: "Lotes", path: "/lotes" },
      { name: "Categorias", path: "/categorias" },
    ],
  },
  {
    id: 4,
    name: "ventas",
    // icon: <FaTruck />,
    path: "/proveedores",
    subItems: [
        { name: "Listado de Productos", path: "/productos" },
        { name: "Lotes", path: "/lotes" },
        { name: "Categorias", path: "/categorias" },
      ],
  },

  {
    id: 5,
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
    id: 9,
    name: "Inventario",
    // icon: <FaChartLine />,
    path: "/balance",
    subItems: [
        { name: "Listado de Productos", path: "/productos" },
        { name: "Lotes", path: "/lotes" },
        { name: "Categorias", path: "/categorias" },
      ],
  },
];

export default DataItems;
