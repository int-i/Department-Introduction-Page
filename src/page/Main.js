import styled from "styled-components";
import Banner from "../components/Banner";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 300vh;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};

function Main() {
  return (
    <Style.Wrapper>
      <Banner />
    </Style.Wrapper>
  );
}

export default Main;
