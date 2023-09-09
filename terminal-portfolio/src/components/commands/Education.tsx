import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Class X (CBSE)",
    desc: "Army Public School, Bareilly | 2016 ~ 2018",
  },
  {
    title: "Class XII (CBSE)",
    desc: "Army Public School, Bareilly | 2018 ~ 2020",
  },
  {
    title: "B.Tech CSE Specialization in AI and ML",
    desc: "Vellore Institute of Technology, Bhopal | 2020 ~ 2024",
  },
];

export default Education;
