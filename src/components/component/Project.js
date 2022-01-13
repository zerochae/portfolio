import styled from "styled-components";
import kanboo from "@/img/kanboo.png";
import mood from "@/img/mood.png";
import portfolio from "@/img/portfolio.png";
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
  height: 100vh;
  overflow: hidden;

  .flip:hover {
    transform: rotateY(180deg);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    
    .content {
      width: 70vw;
    }
    .cardContainer {
      width: 210vw;
      transform: ${({ step }) => {
        return `translateX(${step * 70 * -1}vw)`;
      }};
    }
    
    .flip{
      height: 80%;
    }
    
    .card{
      width: 70vw;
    }

  }

  @media all and (max-width: 767px) {

    .content {
      width: 80vw;
    }
    .cardContainer {
      width: 240vw;
      transform: ${({ step }) => {
        return `translateX(${step * 80 * -1}vw)`;
      }};
    }
    
    .flip{
      height: 60%;
    }
    
    .card{
      width: 80vw;
    }

  }

  /* @media (min-width: 768px) and (max-width: 1023px) {

    .cardContainer {
      width: 180vw;
    }

    .card{
    }

    .innerContainer {
      width: 60vw;
    }

    .flip {
      width:60vw;
      height: 70%;
    }

    .cardContainer {
      min-width: 100%;
      transform: ${({ step }) => {
        return `translateX(${step * 60 * -1}vw)`;
      }};
    }

    .btn {
      width: 80px;
      height: 50px;
      font-size: 0.8rem;
    }
  }

  @media all and (max-width: 767px) {
    padding: 0;

    .card {
      min-width: 100%;
      transform: ${({ step }) => {
        return `translateX(${step * 100 * -1}vw)`;
      }};
    }
    .cardContainer {
      width: 150vw;
    }
    .flip {
      width: 100%;
    }
  } */
`;

const Content = styled.div`
  height: 100%;
  margin: auto;
  width: 50vw;
  overflow: hidden;
  margin-top: 30px;
`;

const CardContainer = styled.div`
  width: 150vw;
  transform: ${({ step }) => {
    return `translateX(${step * 50 * -1}vw)`;
  }};
  transition: all 1s;
`;

const Button = styled.button`
  border-radius: 15px;
  border: none;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  width: 90px;
  height: 50px;
  cursor: pointer;
  z-index: 1;
  font-size: 0.9rem;

  :hover {
    box-shadow: inset 6px 6px 12px #b6b6b6, inset -6px -6px 12px #ffffff;
  }
`;

const Card = styled.div`
  float: left;
  width: 50vw;
  height: 70vh;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
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
  height: 100%;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: space-around;
  
  img {
    height: 90%;
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
    img: portfolio,
    skills: ["react"],
    description: "react를 이용한 portfolio Page입니다.",
    myWork: ["라이브러리 없이 모든 애니메이션들을 구현했습니다."],
    role: ["1인개발"],
  },
];

export default function Project() {
  let [step, setStep] = useState(0);

  return (
    <Container id="Project" className="project" step={step}>
      <h1>Project</h1>
      <Content className="content">
        <CardContainer step={step} className="cardContainer">
          {project.map((item) => {
            return (
              <Card step={step} key={item.idx} className="card">
                <InnerContainer className="flip">
                  <FrontContainer>
                    <img src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                  </FrontContainer>
                  <BackContainer>
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
                  {step !== 0 && (
                    <Button
                      className="btn"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                  )}
                  <a href={item.git} target="_blank" rel="noopener noreferrer">
                    <Button className="btn">
                      <FontAwesomeIcon icon={faGithub} /> Git
                    </Button>
                  </a>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button className="btn">
                      <FontAwesomeIcon icon={faDesktop} /> Demo
                    </Button>
                  </a>
                  {step !== project.length - 1 && (
                    <Button
                      className="btn"
                      onClick={() => {
                        setStep(step + 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  )}
                </MenuContainer>
              </Card>
            );
          })}
        </CardContainer>
      </Content>
    </Container>
  );
}
