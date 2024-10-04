import styled from "styled-components";

export function UserData({ active }) {
  return (
    <Content>
      <ContentImg>
        <Img srcSet="https://steamuserimages-a.akamaihd.net/ugc/1811011164422297147/6AABBCF033EA7DEF58EE9692872505C16F2227D2/" />
      </ContentImg>
      <ContentData active={active}>
        <h4>Moises saucedo ambicho</h4>
        <p>Desarrollador</p>
      </ContentData>
    </Content>
  );
}

const Content = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  gap: 20px;
`;
const ContentImg = styled.div`
  height: 100%;
  width: 50px;
  flex-shrink: 0; // Evita que el SideBar se reduzca
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentData = styled.div`
  flex-grow: 1; //Ocupa el espacio restante
  transition-delay:${(props) => (props.active ? " 0.5s" : "0s")} ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Img = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;
