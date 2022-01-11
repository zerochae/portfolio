import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  position: sticky;
  background-color: #fff;
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
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  li {
    margin-right: 30px;
    cursor: pointer;
  }
`;

export default function Nav() {
  const menu = ["Home", "About", "Skills", "Project", "Contact"];

  return (
    <Container className="nav">
      <Title>zerochae</Title>
      <Menu>
        {menu.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </Menu>
    </Container>
  );
}
