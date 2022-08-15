import styled from "styled-components";
import "./EducationGoal.css";
import imgA from './image/global.png';
import imgB from './image/ideas.png';
import imgC from './image/professional.png';


const Style = {
  Wrapper: styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  `,
};
const EducationGoal = () => {
  return (
    <Style.Wrapper>
      <div className="container">

        <div >
          <h2 className="TextBox">교육 목표</h2>
        </div>
        <div className="contents">
          <div className="first">
            <div className="opacity1">
            <img
              src={imgC}
              width='200'
              height='200'
              
              alt='professional' />
              </div>
            <div className="Margin1">
              <div>산업체 수요지향형 실무적</div>
              <div>ICT 융합 전문 인력 양성</div>
            </div>
          </div>
          <div className="second">
          <div className="opacity1">
            <img
              src={imgA}
              width='200'
              height='200'
              alt='global' />
              </div>
            <div className="Margin1">
              <div>ICT 융복합 분야의 세계 선도적인</div>
              <div>글로벌 학과로 도약</div>
            </div>
          </div>
          <div className="third">
          <div className="opacity1">
            <img
              src={imgB}
              width='200'
              height='200'
              alt='ideas' />
              </div>
            <div className="Margin1">
              <div>창의적인 스마트 ICT 융복합산업의</div>
              <div>글로벌 인재 양성</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="TextBox2">©Department of Information and Communication Engineering Educational Goals</h2>
        </div>
      </div>
    </Style.Wrapper>
  );
};
export default EducationGoal;
