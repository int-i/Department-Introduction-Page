import styled from "styled-components";
import hard from "./introduce_hard.png";
import soft from "./introduce_soft.png";
import "./Introduce.css";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    display: flex;
    justify-content: center;
  `,
  IntroduceContainer: styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
  `,
};
function Introduce() {
  return (
    <Style.Wrapper>
      <Style.IntroduceContainer>
        <div>
          <h1 style={{ fontSize: "40px", color: "#4D5D97" }}>ABOUT, US</h1>
          <h5>Global IT Leader를 양성하는 인하대학교 정보통신공학과</h5>
        </div>

        <div className="container">
          <div className="first">
            <img alt="soft" src={soft} width="385px" height="450px" />
          </div>
          <div className="second">
            <h2 style={{ fontSize: "36px", color: "#899AF8" }}>학과 소개</h2>
            <h4>
              정보통신 산업의 신기술을
              <br />
              배우고 활용하는 능력을
              <br />
              키워 나가는 학과
            </h4>
          </div>
          <div className="third">
            <img alt="hard" src={hard} width="385px" height="450px" />
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: "12px" }}>
          <a href="https://ice.inha.ac.kr/ice/2240/subview.do">
            정보통신공학과 이수체계도 바로가기&gt;
          </a>
        </div>
      </Style.IntroduceContainer>
    </Style.Wrapper>
  );
}

export default Introduce;
