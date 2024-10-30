import { MdEdit, MdDelete } from "react-icons/md";
import styled from "styled-components";
import Checkbox from "../features/login/components/Checkbox";
import { useRef, useState } from "react";

export function TatableData({
  event,
  options = false,
  items,
  config = {},
  parseDelete,
  setModal,
}) {
  const columnLabels = Object.keys(config);
  // const IDSucursal = GetCookie("IDSucursal");
  const IDSucursal = 1;
  const [checked, setChecked] = useState(null); // Usar useRef para cada fila
  const getNestedPropertyValue = (obj, path) => {
    return path.split(".").reduce((acc, current) => {
      if (acc && acc[current]) {
        return acc[current];
      }
      return null; // o el valor que desees cuando la propiedad no existe
    }, obj);
  };

  return (
    <ContenTable>
      {items.length != 0 ? (
        <Table>
          <Thead>
            <Tr>
              <th>Select</th>
              {columnLabels.map((label, index) => (
                <Th key={index}>{label}</Th>
              ))}
              {options == true ? <Th>Acciones</Th> : null}
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, key) => {
              return (
                <Tr
                  key={key}
                  className="row"
                  onClick={() => {
                    setChecked(null);
                    setChecked(key);
                    event(item)
                  }}
                >
                  <Td key={key}>
                    <Checkbox
                      checked={key == checked}
                      onChange={() => {
                        setChecked(null);
                        setChecked(key);
                      }}
                    />
                  </Td>
                  {columnLabels.map((label, colIndex) => (
                    <Td key={colIndex}>
                      {getNestedPropertyValue(item, config[label])}
                    </Td>
                  ))}
                  {options == true ? (
                    <Td className="action">
                      <Delete
                        onClick={() => {
                          parseDelete(item);
                          setModal("eliminar");
                        }}
                        id={IDSucursal}
                      />
                    </Td>
                  ) : null}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : null}
    </ContenTable>
  );
}

const ContenTable = styled.article`
  /* position: relative; */
  max-width: 100%;
  max-height: 80%;
  overflow-y: auto;
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */

  @media (max-width: 650px) {
    left: 5%;
    width: 90%;
  }
`;
const Table = styled.table`
  /* position: absolute; */
  border-collapse: collapse;
`;
const Thead = styled.thead`
  border-bottom: 2px solid black;
`;
const Tbody = styled.tbody`
  text-align: center;
  overflow: auto;
  .row {
    cursor: pointer;
    transition: all 0.4s ease;
    /* border-bottom: solid 0.5px white; */
    &:hover {
      background-color: blue;
    }
  }
`;
const Tr = styled.tr``;
const Th = styled.th`
  padding: 20px;
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
  @media (max-width: 650px) {
    font-size: 12px;
    padding: 5px;
  }
`;
const Td = styled.td`
  padding: 10px;
  @media (max-width: 650px) {
    font-size: 10px;
    padding: 5px;
  }
`;
const Delete = styled(MdDelete)`
  cursor: pointer;
  margin: 0px 5px 0px 5px;
  display: ${(props) => (props.id == 1 ? "auto" : "none")};
  color: red;
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;
