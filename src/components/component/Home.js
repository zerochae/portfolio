import styled from "styled-components";
import selfie from "@/img/react.png";

const Container = styled.div`
  height: 100%;
  margin: auto;
  font-size: 1.4rem;
  width: 100%;
  padding: 20px;
  background-color: #303030;
`;

const Content = styled.div`
  background-color: #303030;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  img {
    border-radius: 50%;
    margin: 20px 0;
    height: 30vh;
  }
`;

export default function Home() {
  return (
    <Container className="home">
      <Content className="textBox">
        <h1>ZEROCHAE'S PORTFOLIO</h1>
        <img src={selfie} alt="img" />
        <h4>
          안녕하세요 FRONT-END DEVELOPER 권영채 입니다. <br />제 포트폴리오
          페이지에 방문해주셔서 감사합니다.
        </h4>
      </Content>
    </Container>
  );
}
