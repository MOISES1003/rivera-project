import React, { useState } from "react";
import styled from "styled-components";

export function ComboBox({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (option) => {
    setSelectedOption(option.nombre);
    onChange(option.id_tipoLuna); // Pasar el valor seleccionado al componente padre
    setIsOpen(false); // Cerrar la lista al seleccionar una opción
  };

  return (
    <SelectContainer>
      <StyledSelect onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
      </StyledSelect>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionItem
              key={option.id_tipoLuna}
              onClick={() => handleSelectChange(option)}
            >
              {option.nombre}
            </OptionItem>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
}

// Estilos para el ComboBox
const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledSelect = styled.div`
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 5px;
  background-color: #333333;
  color: white;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 5px;
  background-color: #1a1a1a;
  z-index: 100; /* Asegúrate de que se muestre por encima de otros elementos */
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 191, 255);
    border-radius: 15px;
  }
`;

const OptionItem = styled.div`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #333333;
    color: white;
  }
`;
