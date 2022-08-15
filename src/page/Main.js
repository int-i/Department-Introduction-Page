import styled from "styled-components";
import About from "../components/About";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Gathering from "../components/Gathering";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: fit-content;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};

function Main() {
  return (
    <Style.Wrapper>
      <Banner />
      <About />
      <Features />
      <Gathering />
    </Style.Wrapper>
  );
}

export default Main;
