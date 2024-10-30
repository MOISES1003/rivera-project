import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useFechStockLens } from "../hooks/useFechStockLens";
import SearchInput from "../../../components/SearchInput";
import img from "../../../assets/images/lunas.png"; // Asegúrate de que esta ruta sea correcta
import { colorizeLens } from "../../../core/utils/colorUtils";
import { CartButton } from "../../../components/CartButton";
import { useFetchSaleGlases } from "../../saleGlasses/hooks/useFechSaleGlases";

export function BuysCardLens() {
  const { stockLenses, loading, error, loadLenses } = useFechStockLens();


  useEffect(() => {
    loadLenses();
  }, []);
  return (
    <ContenBuy>
      <ContentBuscador>
        <SearchInput />
      </ContentBuscador>
      <ContentItems>
        {stockLenses.map((item) => (
          <Item item={item} />
        ))}
      </ContentItems>
    </ContenBuy>
  );
}

const ContenBuy = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: transparent;
`;
const ContentBuscador = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  /* background-color: blue; */
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(193, 193, 200);
    border-radius: 15px;
  }
`;

function Item({ item }) {
  const {addLunasSaleGlasses} = useFetchSaleGlases()
  const canvasRef = useRef(null);
  useEffect(() => {
    const canv = canvasRef.current;
    if (canv) {
      // console.log("Color Luna:", item.color_luna); // Verificar valor aquí
      colorizeLens(canv, img, item.color_luna); // Verifica que `item.color_luna` tenga un valor válido
    }
  }, [item.color_luna]);
  return (
    <ItemCont>
      <canvas className="Image" ref={canvasRef} width="35" height="35">
        Tu navegador no soporta el elemento canvas.
      </canvas>
      <ContentData>{item.tipoluna.nombre}</ContentData>
      <ContButton>
        <CartButton quantity={item.stock} event={()=>addLunasSaleGlasses(item)} />
        <span>{item.precio} S/.</span>
      </ContButton>
    </ItemCont>
  );
}
const ItemCont = styled.div`
  position: relative;
  width: 80%;
  height: 50px;
  background-color: rgb(57, 57, 60);
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;
  overflow: hidden;
`;
const ContentData = styled.div``;
const ContButton = styled.div`
padding: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  gap: 5px;
  font-size: 12px;
`;
