import styled from "styled-components";
import { ActiveBall } from "./ActiveBall";
import { useState } from "react";
import { UserData } from "./UserData";
import { ThemeToggle } from "./ThemeToggle";
import { Item } from "./Items";
import DataItems from "./sideBarData";

export function SideBar() {
  const [active, setActive] = useState(false);

  return (
    <ContenSidebar active={active}>
      <ActiveBall active={active} event={() => setActive(!active)} />
      <Content active={active}>
        <UserData active={active}/>
        <span className="decorate" active={active} />
        <ContenItems>
          {DataItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              subItem={item.subItems}
              active={active}
            />
          ))}
        </ContenItems>
        <ThemeToggle />
      </Content>
    </ContenSidebar>
  );
}

const ContenSidebar = styled.div`
  height: 100vh;
  width: ${(props) => (props.active ? "300px" : "70px")};
  display: flex;
  transition: all 0.5s ease;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 800px) {
    position: absolute;
  }
`;

const Content = styled.div`
  width: ${(props) => (props.active ? "95%" : "50px")};
  height: 95%;
  border-radius: 20px;
  background-color: rgb(244, 244, 246);
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  margin-left: 10px;
  /* gap: 10px; */
  overflow-x: none;
  .decorate {
    height: 3px;
    width: ${(props) => (props.active ? "60%" : "50%")};
    background-color: red;
    border-radius: 50px;
    transition: all 0.5s ease;
  }
`;

const ContenItems = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 20px;
  padding: 5px 0px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(193, 193, 200);
    border-radius: 15px;
  }
`;
