import styled from "styled-components";
import kanboo from "@/img/kanboo.jpg";
import mood from "@/img/mood.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight , faArrowLeft , faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  height: 100vh;
  text-align: center;
  position: relative;
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
  .back {
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
  .front {
    position: absolute;
    padding: 20px;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    width: 100%;
    img {
      border-radius: 20px;
      height: 100%;
      width: 100%;
    }
  }

  .flip:hover {
    transform: rotateY(180deg);
  }
`;

const Content = styled.div`
  width: 50vw;
  margin: auto;
  position: relative;
`;

const CardContainer = styled.div`
  width: 50vw;
  height: 60vh;
  overflow: hidden;
  display: flex;
`;

const Button = styled.button`
  border-radius: 15px;
  border: none;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  width: 100px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
`;

const Card = styled.div`
  transition: all 1s;
  min-width: 50vw;
  height: 100%;
  padding: 20px;
`;

const InnerContainer = styled.div`
  width: 60%;
  height: 90%;
  padding: 20px;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  border-radius: 20px;
  margin: auto;
  transition: all 1s;
  position: relative;
  transform-style: preserve-3d;
`;

const BackContainer = styled.div``;

const CardDescriptionContainer = styled.div`
  width: 70%;
  height: 35%;
  box-shadow: 6px 6px 12px #b6b6b6, -6px -6px 12px #ffffff;
  padding: 20px;
  border-radius: 20px;
  margin: 20px auto;
  text-align: left;
`;

const DescriptionContainer = styled.div`
  height: 50%;
`;

const SkillContainer = styled.div`
  height: 30%;
`;

const Skill = styled.span`
  display: inline-block;
  border-radius: 20px;
  margin-left: 10px;
  padding: 10px;
  color: white;
  background-color: #4caf50;
  font-size: 1rem;
`;

const MenuContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

const project = [
  {
    idx: 1,
    name: "kanboo",
    url: "http://kanboo.site",
    git: "https://github.com/zerochae/backupBeforeMerge",
    img: kanboo,
    skills: ["vue.js", "jpa", "java", "spring boot", "maria db"],
    description: "",
    myWork: "",
  },
  {
    idx: 2,
    name: "mood",
    url: "https://zerochae2.github.io/",
    git: "https://github.com/zerochae/Mood_V2",
    img: mood,
    skills: ["vue.js", "node.js", "mysql"],
    description: "",
    myWork: "",
  },
  {
    idx: 3,
    name: "portfolio",
    url: "https://zerochae.github.io/portfolio",
    git: "",
    img: "",
    skills: ["react"],
    description: "",
    myWork: "",
  },
];

export default function Project() {
  let [step, setStep] = useState(0);

  return (
    <Container className="project">
      <h1>Project</h1>
      <Content className="content">
        {step !== 0 && (
          <Button
            onClick={() => {
              setStep(step - 1);
            }}
            className="prev"
          >
            <FontAwesomeIcon icon={faArrowLeft}/>
          </Button>
        )}
        {step !== project.length - 1 && (
          <Button
            onClick={() => {
              setStep(step + 1);
            }}
            className="next"
          >
            <FontAwesomeIcon icon={faArrowRight}/>
          </Button>
        )}
        {/* <CardContainer>
          {project.map((item) => {
            return (
              <Card
                style={{ transform: `translateX(${step * 50 * -1}vw)` }}
                key={item.idx}
              >
                <InnerContainer className="flip">
                  <div className="front">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <br />
                    <p>Project management software kanboo입니다.</p>
                  </div>
                  <DescriptionContainer className="back">
                    <SkillContainer>
                      {item.skills.map((skill) => {
                        return <Skill>{skill}</Skill>;
                      })}
                    </SkillContainer>
                  </DescriptionContainer>
                </InnerContainer>
              </Card>
            );
          })}
        </CardContainer> */}
        <CardContainer>
          {
            project.map((item) => {
              return <Card></Card>
            })
          }
        </CardContainer>
        <MenuContainer>
          <Button>
            <FontAwesomeIcon icon={faGithub}/> Git
          </Button>
          <Button>
            <FontAwesomeIcon icon={faDesktop}/> WebSite
          </Button>
        </MenuContainer>
      </Content>
    </Container>
  );
}
