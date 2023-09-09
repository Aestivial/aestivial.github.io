import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aestivial</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a developer and analyst</HighlightAlt> based in India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing solutions to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
