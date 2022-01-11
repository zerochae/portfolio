import Nav from "./components/component/Nav";
import MainContainer from "./components/container/MainContainer";
import styled from "styled-components";

const Container = styled.div`
  font-family: "seoulhangang";
  width: 100%;
  margin:auto;
`;

export default function App() {
  return (
    <Container className="App">
      <Nav />
      <MainContainer />
    </Container>
  );
}
