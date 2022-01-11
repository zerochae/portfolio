import styled from "styled-components";
import ReactLogo from "@/img/react.png";
import VueLogo from "@/img/vue.png";
import JavaScriptLogo from "@/img/javaScript.png";
import JavaLogo from "@/img/java.png";
import SpringLogo from "@/img/Spring.png";
import MariaLogo from "@/img/Maria.png";
import OracleLogo from "@/img/Oracle.png";

const Container = styled.div`
  text-align: center;
  padding: 70px 15px;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin: 30px 0;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const List = styled.ul`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;
  padding: 25px;
  box-shadow: 9px 9px 18px #b6b6b6, -9px -9px 18px #ffffff;
  border-radius: 20px;
  margin: 30px 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px;
  }

  img {
    width: 60%;
    height: 60%;
  }

  .logoContainer {
    width: 130px;
    height: 130px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    box-shadow: 9px 9px 18px #b6b6b6, -9px -9px 18px #ffffff;
    margin-left: 15px;
  }
`;

export default function Skills() {
  const language = [
    {
      img: JavaLogo,
      name: "Java",
      description: "",
    },
    {
      img: JavaScriptLogo,
      name: "JavaScript",
      description: "",
    },
  ];

  const framework = [
    {
      img: VueLogo,
      name: "Vue.js",
      description: "",
    },
    {
      img: ReactLogo,
      name: "React",
      description: "",
    },
    {
      img: SpringLogo,
      name: "Spring",
      description: "",
    },
  ];

  const db = [
    {
      img: OracleLogo,
      name: "Oracle",
      description: "",
    },
    {
      img: MariaLogo,
      name: "maria",
      description: "",
    },
  ];

  const skills = [
    {
      category: "language",
      data: language,
    },
    {
      category: "framework",
      data: framework,
    },
    {
      category: "db",
      data: db,
    },
  ];

  return (
    <Container className="skills">
      <h1>Skills</h1>
      <Content>
        <ListContainer>
          {skills.map((item) => {
            return (
              <List key={item.category}>
                {item.data.map((item) => {
                  return (
                    <li key={item.name}>
                      <div></div>
                      <div className="logoContainer">
                        <img src={item.img} alt={item.name} />
                      </div>
                    </li>
                  );
                })}
              </List>
            );
          })}
        </ListContainer>
      </Content>
    </Container>
  );
}
