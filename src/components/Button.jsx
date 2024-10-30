import styled from "styled-components";

export function Button({ event, width, height, text, colorRgb, colorTextRgb }) {
  return (
    <Btn
      onClick={event}
      width={width}
      height={height}
      colorRgb={colorRgb}
      colorTextRgb={colorTextRgb}
    >
      {text}
    </Btn>
  );
}

const Btn = styled.button`
  border: none;
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.colorRgb ? `rgb(${props.colorRgb})` : `rgb(240, 240, 240)`};
  color: ${(props) =>
    props.colorTextRgb ? `rgb(${props.colorTextRgb})` : `rgb(0, 0, 0)`};
  text-align: center;
  justify-content: center;
  align-items:center;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
`;
