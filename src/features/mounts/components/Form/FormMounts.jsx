import styled from "styled-components";
import SearchInput from "../../../../components/SearchInput";
import { Button } from "../../../../components/Button";
import { InputText } from "../../../../components/InputText";
import { parseEditMounts } from "../../hooks/parseEditMounts";

export function FormMounts() {
  const { selectMounts } = parseEditMounts();

  return (
    <ContentData>
              <SearchInput />
      <ContentButtom>
        <Button
          text="Crear"
          height="20px"
          event={() => {
            console.log(selectMounts);
          }}
        />
        <Button text="Editar" height="20px" />
      </ContentButtom>
      <Data>
        <InputText
             title="Codigo"
          value={selectMounts.serie}
          placeholder={selectMounts.serie}
        />
        <InputText
             title="Serie"
          value={selectMounts.serie}
          placeholder={selectMounts.serie}
        />
        <InputText
        title="Stock"
          value={selectMounts.serie ? selectMounts.serie : ""}
        //   placeholder={selectMounts.serie}
        />
      </Data>
    </ContentData>
  );
}

const ContentData = styled.div`
  width: 300px;
  height: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.sideColor};
  border-radius: 20px;
  /* justify-content: space-evenly; */
  padding: 20px;
  gap: 20px;
  /* position: relative; */
`;
const Data = styled.div``;
const ContentButtom = styled.div`
  display: flex;
  gap: 10px;
  right: 5px;
  width: 50px;
  width: 100%;
  padding: 5px;
`;
