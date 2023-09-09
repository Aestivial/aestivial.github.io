import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Nayan Panda's Blog",
    desc: "My personal blog section where I used to write down my works on a lot of tech and gaming updates, as a part of the digit.in team.",
    url: "https://www.digit.in/author/nayan-panda/",
  },
  {
    id: 2,
    title: "HEX (Helpful Examples and Xercises)",
    desc: "My personal repo where I regularly update solutions for problems of popular coding platforms like Leetcode and Hackerrank.",
    url: "https://github.com/Aestivial/-HEX-",
  },
  {
    id: 3,
    title: "Automated Measurement and Testing for a Digital Processor",
    desc: "A LabVIEW and Python based modular automated solution that I developed for my research project, during my internship at ISRO (Indian Space Research Organization).",
    url: "https://bit.ly/aest-isro-report",
  },
  {
    id: 4,
    title: "Business Report on Atliq Hardware",
    desc: "An interactive dashboard designed from a SQL dump dataset to understand AtliQ hardware goods sales trend and assist data-driven informed decisions.",
    url: "https://bit.ly/aest-atliq",
  },
];

export default Projects;
