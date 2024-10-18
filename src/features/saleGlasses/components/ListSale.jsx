import styled from "styled-components";
import { BuyBtn } from "./BuyBtn";

export function ListSale() {
  return (
    <ContentList>
      <h3>Lista de Carritos</h3>
      <List>Lunas Monturas Farmacos</List>
      <ContenButtom><BuyBtn/> </ContenButtom>
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
  overflow: hidden;
`;
const List = styled.div``;
const ContenButtom = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
