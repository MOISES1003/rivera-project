import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import img from "../../../assets/images/lunas.png"; // Asegúrate de que esta ruta sea correcta
import { colorizeLens } from "../../../core/utils/colorUtils";
import { EditButtonComponent } from "../../../components/EditButtonComponent";

export function CardLens({ item, active, onClick }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canv = canvasRef.current;
    if (canv) {
      // console.log("Color Luna:", item.color_luna); // Verificar valor aquí
      colorizeLens(canv, img, item.color_luna); // Verifica que `item.color_luna` tenga un valor válido
    }
  }, [item.color_luna]); // Se vuelve a ejecutar si `color_luna` cambia

  return (
    <Card onClick={onClick} active={active}>
      <canvas className="Image" ref={canvasRef} width="100" height="100">
        Tu navegador no soporta el elemento canvas.
      </canvas>
      <Back>
        <BackContent>
          <h4>{item.tipoluna.nombre}</h4>
          <EditButtonComponent color={item.color_luna}/>
        </BackContent>
      </Back>
      <Front>
        <ImgContainer>
          <Circle />
          <Circle id="right" />
          <Circle id="bottom" />
        </ImgContainer>
        <FrontContent>
          <Badge>Pasta</Badge>
          <Description>
            <Title>
              <p className="title">
                <strong>Spaguetti Bolognese</strong>
              </p>
            </Title>
            <CardFooter>30 Mins &nbsp; | &nbsp; 1 Serving</CardFooter>
          </Description>
        </FrontContent>
      </Front>
    </Card>
  );
}

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Card = styled.div`
  position: relative;
  width: 190px;
  height: 254px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
  transition: all 0.5s ease;
  transform: ${(props) => (props.active ? "rotatey(180deg)" : "rotatey(0deg)")};
  .Image {
    transition: all 0.5s ease;
    position: absolute;
    /* bottom: 0; */
    z-index: 1;
    transform: ${(props) =>
      props.active
        ? "translateY(50px) translateX(-25px)"
        : "translateY(10px)  translateX(35px)"};
  }
`;

const Side = styled.div`
  background-color: #151515;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
`;

const Back = styled(Side)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 100px;
`;

const Front = styled(Side)`
  transform: rotateY(180deg);
  color: white;
`;

const FrontContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Badge = styled.small`
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
`;

const Description = styled.div`
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
  }
`;

const CardFooter = styled.p`
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
  height: 50px;
  width: 100%;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: #ffbb66;
  position: relative;
  filter: blur(15px);
  animation: ${floating} 2600ms infinite linear;

  &:nth-child(1) {
    width: 90px;
    height: 90px;
  }

  & #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  & #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }
`;
