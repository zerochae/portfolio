import Home from "./../component/Home";
import Skills from "./../component/Skills";
import Project from "./../component/Project";
import About from "./../component/About";
import styled from "styled-components"
import Contact from "../component/Contact";

const Container = styled.div`
width: 100%;
`;

export default function MainContainer() {

  return (
    <Container className="mainContainer">
      <Home className="section" />
      <About className="section" />
      <Skills className="section" />
      <Project className="section" />
      <Contact/>
    </Container>
  );
}
