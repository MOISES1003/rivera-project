import { useEffect } from "react";
import { useFetchLenses } from "../features/lents/hooks/useFetchLenses";
import { TatableData } from "../features/login/components/TableData";
import styled from "styled-components";

export function MontPage() {
  const { lenses, loading, error, loadLenses } = useFetchLenses();
  const config = {
    stock: "stock",
    caracteristicas: "caracteristicas_Principal",
    poderDioptria: "poder_dioptria",
    nivelAntirreflejo: "nivel_antirreflejo",
    polarizacion: "polarizacion",
    proteccionUv: "proteccion_uv",
    indiceRefraccion: "indice_refraccion",
    fotocromatica: "fotocromatica",
    color: "color_luna",
    material: "material",
    descripcion: "descripcion",
    precio: "precio",
  };
  useEffect(() => {
    loadLenses();
  }, []);
  return (
    <Page>
      <TatableData items={lenses} config={config} />;
    </Page>
  );
}
const Page = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
