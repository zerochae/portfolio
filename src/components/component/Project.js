import styled from "styled-components";
import kanboo from "@/img/kanboo.jpg";
import mood from "@/img/mood.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  text-align: center;
  padding: 70px 15px;

  .prev {
    position: absolute;
    top: 50%;
    left: 0;
  }
  .next {
    position: absolute;
    top: 50%;
    right: 0;
  }

  .flip:hover {
    transform: rotateY(180deg);
  }
`;

const Content = styled.div`
  width: 50vw;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 50vw;
  height: 75vh;
  overflow: hidden;
  display: flex;
`;

const Button = styled.button`
  border-radius: 15px;
  border: none;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  width: 150px;
  height: 60px;
  cursor: pointer;
  z-index: 1;
  font-size: 1.2rem;

  :hover {
    box-shadow: inset 6px 6px 12px #b6b6b6, inset -6px -6px 12px #ffffff;
  }
`;

const Card = styled.div`
  transition: all 1s;
  min-width: 50vw;
  height: 90%;
  padding: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  padding: 20px;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  border-radius: 20px;
  margin: auto;
  transition: all 1s;
  position: relative;
  transform-style: preserve-3d;
`;

const FrontContainer = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  padding: 20px;
  left: 0;
  top: 0;
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const BackContainer = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const SkillContainer = styled.ul`
  height: 15%;
`;

const Skill = styled.li`
  margin: 10px 0;
  display: inline-block;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  color: white;
  background-color: #4caf5f;
  font-size: 1rem;
`;

const MyWorkContainer = styled.ul`
  height: 50%;
`;

const MyWork = styled.li`
  margin-top: 10px;
  display: inline-block;
  padding: 10px;
  font-size: 1rem;
`;

const RoleContainer = styled.ul`
  height: 15%;
`;

const Role = styled.li`
  margin: 10px 0;
  display: inline-block;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  color: white;
  background-color: #f06b0d;
  font-size: 1rem;
`;

const MenuContainer = styled.div`
  margin: 20px 0;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const project = [
  {
    idx: 1,
    name: "Kanboo",
    url: "http://kanboo.site",
    git: "https://github.com/zerochae/backupBeforeMerge",
    img: kanboo,
    skills: ["vue.js", "jpa", "java", "spring boot", "maria db"],
    description:
      "Project Management Software Kanboo입니다. Front는 Vue.js Back은 Spring, JPA를 이용하였습니다.",
    myWork: [
      "Login Page(Terminal Component)를 디자인하고, 관련된 기능들을 구현하였습니다.",
      "Kanban Board Component를 디자인하고 관련된 기능들을 구현하고, 서버와 통신해 CRUD를 구현하였습니다.",
      "Gantt Chart Component를 디자인하고 관련된 기능들을 구현하고, 서버와 통신해 CRUD를 구현하였습니다.",
    ],
    role: ["design", "front", "back"],
  },
  {
    idx: 2,
    name: "mood",
    url: "https://zerochae2.github.io/",
    git: "https://github.com/zerochae/Mood_V2",
    img: mood,
    skills: ["vue.js", "node.js", "mysql"],
    description: " Music Player App 입니다.",
    myWork: ["node.js를 이용해 서버와 통신하였습니다."],
    role: ["1인개발"],
  },
  {
    idx: 3,
    name: "portfolio",
    url: "https://zerochae.github.io/portfolio",
    git: "https://zerochae.github.io/portfolio",
    img: "",
    skills: ["react"],
    description: "react를 이용한 portfolio Page입니다.",
    myWork: ["라이브러리 없이 모든 애니메이션들을 구현했습니다."],
    role: ["1인개발"],
  },
];

export default function Project() {
  let [step, setStep] = useState(0);

  return (
    <Container id="Project" className="project">
      <h1>Project</h1>
      <Content className="content">
        {step !== 0 && (
          <Button
            onClick={() => {
              setStep(step - 1);
            }}
            className="prev"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        )}
        {step !== project.length - 1 && (
          <Button
            onClick={() => {
              setStep(step + 1);
            }}
            className="next"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        )}
        <CardContainer>
          {project.map((item, p_index) => {
            return (
              <Card
                style={{ transform: `translateX(${step * 50 * -1}vw)` }}
                key={item.idx}
              >
                <InnerContainer className="flip">
                  <FrontContainer>
                    <img src={item.img} alt={item.name} 
                    // style={{width: `${p_index === 0 ? 80 : 60}%`}}
                    />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </FrontContainer>
                  <BackContainer className="back">
                    <MyWorkContainer>
                      <p>#나의 기여도</p>
                      {item.myWork.map((myWork) => {
                        return <MyWork key={myWork}>{myWork}</MyWork>;
                      })}
                    </MyWorkContainer>
                    <hr />
                    <RoleContainer>
                      <p>#개발 직무</p>
                      {item.role.map((role) => {
                        return <Role key={role}>{role}</Role>;
                      })}
                    </RoleContainer>
                    <hr />
                    <SkillContainer>
                      <p>#사용 기술</p>
                      {item.skills.map((skill) => {
                        return <Skill key={skill}>{skill}</Skill>;
                      })}
                    </SkillContainer>
                  </BackContainer>
                </InnerContainer>
                <MenuContainer>
                  <a href={item.git} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </Button>
                  </a>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <FontAwesomeIcon icon={faDesktop} /> WebSite
                    </Button>
                  </a>
                </MenuContainer>
              </Card>
            );
          })}
        </CardContainer>
      </Content>
    </Container>
  );
}
