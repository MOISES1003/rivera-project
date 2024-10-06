import styled from "styled-components";
import { FaTachometerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Item({ item, subItem, active }) {
  const [activeText, setActiveText] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      setActiveText(true);
      //   console.log("prueba tiempo");
    };
    if (active) {
      // Establecer el intervalo para verificar el token cada segundo
      const intervalId = setInterval(checkActive, 300);
      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(intervalId);
    } else {
      setActiveText(false);
    }
  }, [active]);
  return (
    <ItemContent active={active}>
      <Title active={active}>
        <h3> {activeText ? item.name : item.name.charAt(0).toUpperCase()}</h3>
      </Title>
      <ContenSubItens>
        {subItem.map((sub) => (
          <NavLink to={sub.path}>
            <SubItem active={active}>
              <Label>
                <Icon active={active} />
                {activeText ? sub.name : sub.name.charAt(-1).toUpperCase()}
              </Label>
            </SubItem>
          </NavLink>
        ))}
      </ContenSubItens>
    </ItemContent>
  );
}

const ItemContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease; /* Suave transición para todos los cambios */
`;

const Title = styled.h4`
  transform: ${(props) =>
    props.active ? "translate(0, 0)" : "translate(20%, 0)"};
  transition: all 0.2s ease; 
  text-transform: capitalize;
  font-weight: 900;
  display: flex;
  border-radius: 50%;
  h3 {
    transition: ${(props) => (props.active ? "none" : "all 0.5s ease")};
    text-align: center;
    background-color: ${(props) => (props.active ? "transparent" : "red")};
    width: ${(props) => (props.active ? "auto" : "30px")};
    border-radius: ${(props) => (props.active ? "none" : "50%")};
    padding: 5px;
    user-select: none;
  }
`;
const ContenSubItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SubItem = styled.div`
  /* background-color: red; */
  width: 220px;
  padding: 5px;
  transition: all 0.2s ease;  
  display: flex;
  align-items: center;
  transform: ${(props) =>
    props.active ? "translate(15%, 0)" : "translate(0, 0)"};
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background-color: rgb(185, 185, 185);
    border-radius: 10px;
  }
`;
const Label = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Icon = styled(FaTachometerAlt)`
  position: relative;
  transition: ${(props) => (props.active ? "all 0s ease" : "all 0.5s ease")};
  left: ${(props) => (props.active ? "0" : "40%")};
  font-size: 20px;
`;
