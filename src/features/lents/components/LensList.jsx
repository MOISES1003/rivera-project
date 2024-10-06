import { useEffect, useState } from "react";
import { useCreateLens } from "../hooks/useCreateLens";
import { useFetchLenses } from "../hooks/useFetchLenses";
import styled from "styled-components";
import { FormCreateLens } from "./Form/FormCreateLens";
import { CardLens } from "./CardLens";

export function LensList() {
  const { lenses, loadLenses } = useFetchLenses();
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const handleCardClick = (index) => {
    // Si la carta que se hace clic es la misma que la activa, se desactiva
    setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    loadLenses();
  }, []);

  return (
    <Cotent>
      {lenses.map((lens) => (
        <CardLens item={lens}
        key={lens.id_lentes} 
        active={activeCardIndex === lens.id_lentes} 
        onClick={() => handleCardClick(lens.id_lentes)} 
        />
      ))}
    </Cotent>
  );
}
const Cotent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* padding: 10px; */
  /* align-items: center; */
  gap: 20px;
  /* background-color: yellow; */
  height: 90%;
  width: 100%;
  overflow-y: auto;
`;
