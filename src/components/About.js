import styled from "styled-components";
import AfterGraduate from "./about/AfterGraduate";
import EducationGoal from "./about/EducationGoal";
import Introduce from "./about/Introduce";
import Talent from "./about/Talent";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 400vh;
  `,
};
const About = () => {
  return (
    <Style.Wrapper>
      <Introduce />
      <Talent />
      <EducationGoal />
      <AfterGraduate />
    </Style.Wrapper>
  );
};
export default About;
