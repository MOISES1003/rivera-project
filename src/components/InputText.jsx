import styled from "styled-components";

export function InputText({
  value,
  handleChange,
  title,
  name
}) {
  return (
    <ContenInput>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder=""
        required
      />
      <span>{title}</span>
    </ContenInput>
  );
}
const ContenInput = styled.div`
  /* padding: 5px; */
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
