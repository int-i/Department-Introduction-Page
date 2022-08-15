import styled from "styled-components";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
  `,
};
const Forum = () => {
  return (
    <Style.Wrapper>
      <Header />
      포럼
      <Footer />
    </Style.Wrapper>
  );
};

export default Forum;
