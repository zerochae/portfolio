import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  background-color: red;
  position: sticky;
  top: 0;
  width: 100%;
`;

export default function Nav() {
  return (
    <Container className="nav">
      nav
    </Container>
  )
}
