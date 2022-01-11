import styled from "styled-components";
import profile from "@/img/profile.jpg";

const Container = styled.div`
  padding: 70px 15px;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0;
  justify-content: center;
  align-items: center;
`;
const ImgBox = styled.div`
  width: 30%;
  border-radius: 20px;
  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
  padding: 30px;
`;
const TextBox = styled.div`
  width: 45%;
  height: 30%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  h3{
    color:red
  }
`;

export default function About() {
  return (
    <Container className="about">
      <h1>About Me</h1>
      <Content>
        <ImgBox className="profile">
          <img src={profile} alt="profile" />
        </ImgBox>
        <TextBox>
          <h3>
            독창성의 장점은 참신이 아니라 성실이다. 믿는 사람은 독창적인
            인간이다. 
            {/* <br/> - Thomas Carlyle */}
          </h3>
          <br /> <br />
          <p>
            안녕하세요 프론트엔드 개발자 권영채입니다. 저의 포트폴리오를 방문해
            주셔서 감사합니다.
            <br /> <br />
            개발자의 가장 중요한 역량은 독창성이며 그것은 곧, 성실함에서
            나옵니다. 저는 1일 1커밋을 하며 꾸준히 성장해 나가고 있습니다.
            <br /> <br />
            항상 사용자의 관점에서 생각하며, 이를 개발에 반영하려고 합니다. 결과
            보다는 원인을 더 중요하게 생각하고, 작은 문제도 그냥 지나치지
            않으려고 합니다.
            <br /> <br />
            이런 저의 성장가능성을 이끌어줄 회사를 찾고 있습니다.
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}
