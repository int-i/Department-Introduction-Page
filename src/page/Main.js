import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import About from "../components/About";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Gathering from "../components/Gathering";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

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
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const gatheringRef = useRef(null);
  const homeRef = useRef(null);

  const [home, setHome] = useState();
  const [about, setAbout] = useState();
  const [feature, setfeature] = useState();
  const [gathering, setGathering] = useState();

  useEffect(() => {
    setHome(homeRef);
    setAbout(aboutRef);
    setfeature(featureRef);
    setGathering(gatheringRef);
  }, []);
  return (
    <>
      <Header
        home={home}
        about={about}
        feature={feature}
        gathering={gathering}
      />
      <Style.Wrapper>
        <div ref={homeRef}></div>
        <Banner />
        <div ref={aboutRef}></div>
        <About />
        <div ref={featureRef}></div>
        <Features />
        <div ref={gatheringRef}></div>
        <Gathering />
      </Style.Wrapper>
      <Footer />
    </>
  );
}

export default Main;
