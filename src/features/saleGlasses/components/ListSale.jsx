import styled from "styled-components";
import { BuyBtn } from "./BuyBtn";
import { useFetchSaleGlases } from "../hooks/useFechSaleGlases";
import img from "../../../assets/images/lunas.png"; // Asegúrate de que esta ruta sea correcta
import { colorizeLens } from "../../../core/utils/colorUtils";
import { useEffect, useRef } from "react";
export function ListSale() {
  const { lunas } = useFetchSaleGlases();
  const motrar = () => {
    console.log(lunas);
  };
  return (
    <ContentList>
      <h3>Carrito</h3>
      <ContentCar>
        <ListLunas>
          <h3>Lunas</h3>
          {lunas.map((luna) => (
            <Lunas item={luna} />
          ))}
          <hr />
        </ListLunas>
        <ListLunas>
          <h3>Monturas</h3>
          {lunas.map((luna) => (
            <Lunas item={luna} />
          ))}
          <hr />
        </ListLunas>
        <ListLunas>
          <h3>Medicinas</h3>
          {lunas.map((luna) => (
            <Lunas item={luna} />
          ))}
          <hr />
        </ListLunas>
      </ContentCar>
      <ContenButtom>
        <BuyBtn onClick={motrar} />
      </ContenButtom>
    </ContentList>
  );
}
const ContentList = styled.div`
  height: 500px;
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  border: 2px solid rgb(7, 166, 116);
  gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  hr{
    width:50%;
  }
`;
const ListLunas = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items:center;
  flex-direction: column;
  gap: 5px;
  /* background-color:red; */
`;
const ContentCar = styled.div`
height: 80%;
overflow-y: auto;
overflow-x: hidden;
gap:10px;
`;
const ContenButtom = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
function Lunas({ item }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canv = canvasRef.current;
    if (canv) {
      // console.log("Color Luna:", item.color_luna); // Verificar valor aquí
      colorizeLens(canv, img, item.color_luna); // Verifica que `item.color_luna` tenga un valor válido
    }
  }, [item.color_luna]);
  return (
    <ContentLuna>
      <canvas className="Image" ref={canvasRef} width="35" height="35">
        Tu navegador no soporta el elemento canvas.
      </canvas>
      <ContenData>
        <p>{item.tipoluna.nombre}</p>
        <p>{item.precio} S/.</p>
      </ContenData>
      <p>{item.cantidad}</p>
      <p>Total: {item.cantidad * item.precio} </p>
    </ContentLuna>
  );
}
const ContentLuna = styled.div`
  width: 100%;
  /* height: 20px; */
  /* background-color:red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 20px;
`;
const ContenData = styled.div``;
