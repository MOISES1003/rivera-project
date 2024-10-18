import React from "react";
import styled from "styled-components";

export function BuyBtn() {
  return (
    <Button>
      <Box>
        Comprar
        <Star1>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star1>
        <Star2>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star2>
        <Star3>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star3>
        <Star4>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star4>
        <Star5>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" color="white" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star5>
        <Star6>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ea8b19" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#000">S/.</text>
          </svg>
        </Star6>
      </Box>
    </Button>
  );
}

// Estilos para el botón
const Button = styled.button`
  background-color: transparent;
  position: relative;
  padding: 17px 30px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  /* border: 3px solid #ea8b19; */
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  border: 2px solid rgb(7, 166, 116);
  cursor: pointer;

  &:hover {
    background: #000;
    /* color: #ea8b19; */
    /* box-shadow: 0 0 50px #ea8b19; */
  }
`;

const Star1 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);

  ${Button}:hover & {
    top: -100%;
    left: -40%;
    width: 30px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

const Star2 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);

  ${Button}:hover & {
    top: -65%;
    left: 0%;
    width: 20px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

// Define el resto de las estrellas con el mismo patrón
const Star3 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);

  ${Button}:hover & {
    top: 85%;
    left: -5%;
    width: 11px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

const Star4 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);

  ${Button}:hover & {
    top: 45%;
    left: 95%;
    width: 15px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

const Star5 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);

  ${Button}:hover & {
    top: -30%;
    left: 115%;
    width: 25px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

const Star6 = styled.div`
  position: absolute;
  fill: #ea8b19;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #ea8b19);
  z-index: -5;
  transition: all 0.8s ease;

  ${Button}:hover & {
    top: -50%;
    left: 70%;
    width: 15px;
    filter: drop-shadow(0 0 10px #ea8b19);
    z-index: 2;
  }
`;

const Box = styled.span`
  width: auto;
  height: 25px;
  float: left;
  /* transition: 0.5s linear; */
  position: relative;
  display: block;
  padding: 8px;
  margin: -10px -15.5px;
  background: transparent;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  &:hover {
    /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); */
    cursor: pointer;
    color: white;
    background: black;
  }

  &:hover:before {
    border-color: #fff;
    height: 100%;
    transform: translateX(0);
    /* transition: 0.3s transform linear, 0.3s height linear 0.3s; */
  }
`;
