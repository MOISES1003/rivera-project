import styled from "styled-components";

export function InputText({ placeholder, type = "text", width, height,value , event}) {
  return (
    <ContenInput>
      <Input
        placeholder={placeholder}
        type={type}
        width={width}
        height={height}
        onChange={event}
        value={value}
      />
    </ContenInput>
  );
}
const ContenInput = styled.div`
padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: rgb(212, 212, 212);
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: 10px;
`;
