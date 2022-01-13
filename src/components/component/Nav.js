import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faFile,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  height: 70px;
  position: sticky;
  background-color: #f2f2f2;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  .bars {
    display: none;
    margin-right: 20px;
  }

  @media all and (max-width: 767px) {
    .bars {
      display: flex;
      font-size: 1.5rem;
    }

    .menuContainer {
      z-index: -1;
      transform: ${({ menu }) => {
        return menu === false ? "translateY(-260px)" : "translateY(0)";
      }};
      flex-direction: column;
      position: fixed;
      top: 70px;
      height: fit-content;
      background: #f2f2f2;
      width: 100%;
      justify-content: center;
      padding: 0;
      transition: all 0.5s;

      li {
        margin: 0;
      }
    }
  }
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 20px;
`;

const MenuContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  padding: 20px;
`;

const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    name: "Home",
  },
  {
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    name: "About",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    name: "Skills",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    name: "Project",
  },
];

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <Container className="nav" menu={menu}>
      <Title>ZEROCHAE</Title>
      <FontAwesomeIcon
        icon={faBars}
        className="bars"
        onClick={() => {
          setMenu(!menu);
        }}
      />
      <MenuContainer className="menuContainer">
        {menuItems.map((item) => {
          return (
            <Menu
              key={item.name}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <a href={`#${item.name}`}>
                {item.icon}&nbsp;{item.name}
              </a>
            </Menu>
          );
        })}
      </MenuContainer>
    </Container>
  );
}
