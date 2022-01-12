import Home from "./../component/Home";
import Skills from "./../component/Skills";
import Project from "./../component/Project";
import About from "./../component/About";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

export default function MainContainer() {
  return (
    <Container className="mainContainer">
      <Home />
      <About />
      <Skills />
      <Project />
    </Container>
  );
}
