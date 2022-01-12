import styled from "styled-components";
import profile from "@/img/profile.jpg";
import Git from "@/img/Git.png";
import Blog from "@/img/Blog.png";
import Instagram from "@/img/Instagram.png";
import KaTalk from "@/img/KaTalk.png";
import Mail from "@/img/Mail.png";

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
const TextContainer = styled.div`
  width: 45%;
  height: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  h3 {
    color: red;
  }
`;

const Text = styled.div`
  height: 50%;
  margin-bottom: 40px;
`;

const ItemContainer = styled.ul`
  height: 20%;
  display: flex;
  margin: 20px 0;
  align-items: center;
`;

const Item = styled.li`
  a {
    width: 150px;
    height: 60px;
    display: inline-block;
    border-radius: 20px;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;

    :hover {
      box-shadow: inset 6px 6px 12px #c5c5c5, inset -6px -6px 12px #fbfbfb;
    }
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const ItemTitle = styled.span`
  font-size: 1.1rem;
  margin-left: 10px;
`;

const link = [
  {
    name: "Git",
    url: "https://github.com/zerochae",
    category: "link",
    img: Git,
  },
  {
    name: "Blog",
    url: "https://zerochae.github.io/",
    category: "link",
    img: Blog,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zerochae/",
    category: "link",
    img: Instagram,
  },
];

const contact = [
  {
    name: "Mail",
    url: "mailto:zerochae@kakao.com",
    category: "contact",
    img: Mail,
  },
  {
    name: "Kakao",
    url: "https://open.kakao.com/o/sreMd9Dd",
    category: "contact",
    img: KaTalk,
  },
];

export default function About() {
  return (
    <Container id="About" className="about">
      <h1>About Me</h1>
      <Content>
        <ImgBox className="profile">
          <img src={profile} alt="profile" />
        </ImgBox>
        <TextContainer>
          <Text>
            <h3>
              독창성의 장점은 참신이 아니라 성실이다. 믿는 사람은 독창적인
              인간이다.
              {/* <br/> - Thomas Carlyle */}
            </h3>
            <br /> <br />
            <p>
              안녕하세요 프론트엔드 개발자 권영채입니다. 저의 포트폴리오를
              방문해 주셔서 감사합니다.
              <br /> <br />
              개발자의 가장 중요한 역량은 독창성이며 그것은 곧, 성실함에서
              나옵니다. 저는 1일 1커밋을 하며 꾸준히 성장해 나가고 있습니다.
              <br /> <br />
              항상 사용자의 관점에서 생각하며, 이를 개발에 반영하려고 합니다.
              결과 보다는 원인을 더 중요하게 생각하고, 작은 문제도 그냥 지나치지
              않으려고 합니다.
              <br /> <br />
              이런 저의 성장가능성을 이끌어줄 회사를 찾고 있습니다.
            </p>
          </Text>
          <ItemContainer>
            {link.map((item) => {
              return (
                <Item key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.name} />
                    <ItemTitle>{item.name}</ItemTitle>
                  </a>
                </Item>
              );
            })}
          </ItemContainer>
          <ItemContainer>
            {contact.map((item) => {
              return (
                <Item key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.name} />
                    <ItemTitle>{item.name}</ItemTitle>
                  </a>
                </Item>
              );
            })}
          </ItemContainer>
        </TextContainer>
      </Content>
    </Container>
  );
}
