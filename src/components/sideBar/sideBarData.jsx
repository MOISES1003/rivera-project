import ROUTES from "../../app/routes/routes";
import { IoMdGlasses } from "react-icons/io";
import { FaGlasses } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { GiSellCard } from "react-icons/gi";



const { LENTES, MONTURA,SALEGLASES } = ROUTES;
const DataItems = [
  {
    name: "Centro Clinico",
    // icon: <FaChartLine />,
    path: "/balance",
    subItems: [
      { name: "Clientes", path: "/productos", icon: IoMdGlasses },
      { name: "Medicos", path: SALEGLASES.PATH, icon: GiSellCard },
      { name: "Citas", path: "/categorias", icon: IoMdGlasses },
      { name: "Empleados", path: "/categorias", icon: IoMdGlasses },
      { name: "Proveedores", path: "/categorias", icon: IoMdGlasses },
      { name: "Monturas", path: MONTURA.PATH, icon: FaGlasses },
      { name: "Lunas", path: LENTES.PATH, icon: IoMdGlasses },
      { name: "Medicamentos", path: "/categorias", icon: GiMedicinePills },
      { name: "Examenes", path: "/categorias", icon: GiMedicinePills },
      { name: "Cirugias", path: "/categorias", icon: GiMedicinePills },
    ],
  },
  {
    name: "Ventas y Comercio",
    // icon: <FaBoxOpen />,
    subItems: [
      { name: "Ventas", path: MONTURA.PATH, icon: FaGlasses },
      { name: "Garantias", path: LENTES.PATH, icon: IoMdGlasses },
      { name: "Egresos", path: LENTES.PATH, icon: IoMdGlasses },
    ],
  },
  {
    name: "Reportes",
    // icon: <FaTruck />,
    path: "/proveedores",
    subItems: [
      { name: "R.Histotial Clinico", path: "/productos", icon: IoMdGlasses },
      { name: "R.Operaciones", path: "/lotes", icon: IoMdGlasses },
      { name: "R.Citas", path: "/categorias", icon: IoMdGlasses },
      { name: "R.Pacientes", path: "/productos", icon: IoMdGlasses },
      { name: "R.Empleados", path: "/lotes", icon: IoMdGlasses },
      { name: "R.Proveedores", path: "/categorias", icon: IoMdGlasses },
      { name: "R.Ventas", path: MONTURA.PATH, icon: FaGlasses },
      { name: "R.Garantias", path: LENTES.PATH, icon: IoMdGlasses },
      { name: "R.Egresos", path: LENTES.PATH, icon: IoMdGlasses },
    ],
  },
  {
    name: "Seguridad y Permisos",
    // icon: <FaTruck />,
    path: "/proveedores",
    subItems: [
      { name: "Usuarios", path: "/productos", icon: IoMdGlasses },
      { name: "Roles", path: "/productos", icon: IoMdGlasses },
      { name: "Permisos", path: "/lotes", icon: IoMdGlasses },
      { name: "Punto de acceso", path: "/categorias", icon: IoMdGlasses },
    ],
  },
];

export default DataItems;
