import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faFile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  height: 70px;
  position: sticky;
  background-color: #f2f2f2;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  margin: auto;
`;

const Title = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const MenuContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  li {
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Menu = styled.li`
  border-radius: 10px;
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Nav() {

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

  return (
    <Container className="nav">
      <Title>ZEROCHAE</Title>
      <MenuContainer>
        {menuItems.map((item) => {
          return (
            <Menu key={item.name}>
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
