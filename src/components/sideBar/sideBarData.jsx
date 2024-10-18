import ROUTES from "../../app/routes/routes";
import { IoMdGlasses } from "react-icons/io";
import { FaGlasses } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { GiSellCard } from "react-icons/gi";



const { LENTES, MONTURA,SALEGLASES } = ROUTES;
const DataItems = [
  {
    name: "Balance",
    // icon: <FaChartLine />,
    path: "/balance",
    subItems: [
      { name: "Listado de Productos", path: "/productos", icon: IoMdGlasses },
      { name: "Venta de Lentes", path: SALEGLASES.PATH, icon: GiSellCard },
      { name: "Categorias", path: "/categorias", icon: IoMdGlasses },
    ],
  },
  {
    name: "Insumos",
    // icon: <FaBoxOpen />,
    subItems: [
      { name: "Monturas", path: MONTURA.PATH, icon: FaGlasses },
      { name: "Lunas", path: LENTES.PATH, icon: IoMdGlasses },
      { name: "Medicamentos", path: "/categorias", icon: GiMedicinePills },
    ],
  },
  {
    name: "Clientes",
    // icon: <FaTruck />,
    path: "/proveedores",
    subItems: [
      { name: "Histotial", path: "/productos", icon: IoMdGlasses },
      { name: "Operaciones", path: "/lotes", icon: IoMdGlasses },
      { name: "Citas", path: "/categorias", icon: IoMdGlasses },
    ],
  },
];

export default DataItems;
