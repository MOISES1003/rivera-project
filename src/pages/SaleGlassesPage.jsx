import React from "react";
import styled from "styled-components";
import { TabView } from "../components/TabView";
import { IoMdGlasses } from "react-icons/io";
import { FaGlasses } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { BuysCardLens } from "../features/lents/components/BuysCardLens.jsx";
import { ListSale } from "../features/saleGlasses/components/ListSale.jsx";
// Ejemplo de componentes para cada ícono

const Component2 = () => <div>Componente 2: Glass Ball</div>;
const Component3 = () => <div>Componente 3: Sun Spear</div>;

export function SaleGlasses() {
  // Datos de los íconos, ahora cada uno tiene un componente asociado
  const icons = [
    { icon: FaGlasses, name: "Lunas", component: <BuysCardLens /> },
    { icon: IoMdGlasses, name: "Monturas", component: <Component2 /> },
    { icon: GiMedicinePills, name: "Medicinas", component: <Component3 /> },
  ];
  return (
    <ContenPage>
      <TabView items={icons} />
      <ListSale/>
    </ContenPage>
  );
}
const ContenPage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
