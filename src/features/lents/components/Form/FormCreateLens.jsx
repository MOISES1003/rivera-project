import { useState } from "react";
import { useCreateLens } from "../../hooks/useCreateLens";
import styled, { keyframes } from "styled-components";

export function FormCreateLens() {
  const [newLens, setNewLens] = useState({
    id_tipoLuna:1,
    caracteristicas_Principal:"",
    poder_dioptria:0,
    stock:0,
    nivel_antirreflejo:"",
    polarizacion:false,
    proteccion_uv:false,
    indice_refraccion:0,
    fotocromatica:false,
    color_luna:"#000",
    material:"",
    descripcion:"",
    precio:0,
    id_proveedor:1
  });
  const { createLoading, createError, addLens } = useCreateLens();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLens({ ...newLens, [name]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault(); // Esto previene el comportamiento de refrescar la página
    await addLens(newLens);
    setNewLens({
      id_tipoLuna:1,
      caracteristicas_Principal:"",
      poder_dioptria:0,
      stock:0,
      nivel_antirreflejo:"",
      polarizacion:false,
      proteccion_uv:false,
      indice_refraccion:0,
      fotocromatica:false,
      color_luna:"",
      material:"",
      descripcion:"",
      precio:0,
      id_proveedor:1
    });
  };
  return (
    <Form onSubmit={handleAdd}>
      <Title>Register</Title>
      <Message>Registra nuevas lunas.</Message>
      <Flex>
        <Label>
          <Input
            type="text"
            name="poder_dioptria"
            value={newLens.poder_dioptria}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Poder Dioptria</span>
        </Label>

        <Label>
          <Input
            type="text"
            name="stock"
            value={newLens.stock}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>stock</span>
        </Label>
      </Flex>
      <ContenInputs>
        <Label>
          <Input
            type="text"
            name="nivel_antirreflejo"
            value={newLens.nivel_antirreflejo}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Nivel Antirreflejo</span>
        </Label>
        <Label>
          <Input
            type="text"
            name="caracteristicas_Principal"
            value={newLens.caracteristicas_Principal}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Caracteristicas Principales</span>
        </Label>
        <Label>
          <Input
            type="text"
            name="indice_refraccion"
            value={newLens.indice_refraccion}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Indice Refraccion</span>
        </Label>
        <Label>
          <input
            type="color"
            name="color_luna"
            value={newLens.color_luna}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>Color</span>
        </Label>
        <Label>
          <Input
            type="text"
            name="material"
            value={newLens.material}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>material</span>
        </Label>
        <Label>
          <Input
            type="text"
            name="descripcion"
            value={newLens.descripcion}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>descripcion</span>
        </Label>
        <Label>
          <Input
            type="text"
            name="precio"
            value={newLens.precio}
            onChange={handleChange}
            placeholder=""
            required
          />
          <span>precio</span>
        </Label>
      </ContenInputs>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}
const pulse = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 320px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  z-index: 20;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  &::after {
    animation: ${pulse} 1s linear infinite;
  }
`;

const Message = styled.p`
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;
const ContenInputs = styled.div`
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 250px;
  padding: 5px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 191, 255);
    border-radius: 15px;
  }
`;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 5px 5px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  font-size: medium;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  &:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  &:focus + span,
  &:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  background-color: #00bfff;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #00bfff96;
  }
`;
