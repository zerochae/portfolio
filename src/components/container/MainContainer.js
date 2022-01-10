import Home from "./../component/Home";
import Skills from "./../component/Skills";
import Project from "./../component/Project";
import About from "./../component/About";
import styled from "styled-components"
import { useEffect , useRef } from "react";

const Container = styled.div`
`;

export default function MainContainer() {

  useEffect( ()=> {
    console.log(container.current)
  })

  const container = useRef()

  return (
    <Container ref={container} className="mainContainer">
      <Home className="section" />
      <Skills className="section" />
      <Project className="section" />
      <About className="section" />
    </Container>
  );
}
