import styled from "styled-components";
// import selfie from "@/src/img/vue.png"

const Container = styled.div`
  height: 100%;
  margin: auto;
  font-size: 1.4rem;
  width: 100%;
  padding: 20px;
  background-color: #303030;
  img{
    border-radius: 50%;
  }
`;

const TextBox = styled.div`
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Content = styled.div`
//   border-radius: 100%;
//   border: 1px solid red;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

export default function Home() {
  return (
    <Container className="home">
      <TextBox className="textBox">
        <h1>ZEROCHAE'S PORTFOLIO</h1>
        {/* <img src=} alt="img"/> */}
        <h4>
          안녕하세요 DEVELOPER 권영채 입니다. 제 포트폴리오 페이지에
          방문해주셔서 감사합니다.
        </h4>
      </TextBox>
    </Container>
  );
}
