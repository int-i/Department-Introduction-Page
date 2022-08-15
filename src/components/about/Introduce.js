import styled from "styled-components";
import hard from './introduce_hard.png';
import soft from './introduce_soft.png';
import '../../App.css';
import './Introduce.css'

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
  `,
};
function Introduce() {
  
  return (
    <Style.Wrapper>
      <div style={{
        marginLeft:"330px",
        marginRight:"330px",
      }}>
        <h1 style={{fontFamily:"SUIT-Bold", fontSize: "40px", color: "#4D5D97"}}>ABOUT, US</h1>
        <h5 style = {{fontFamily:"SUIT-Regular"}}>Global IT Leader를 양성하는 인하대학교 정보통신공학과</h5>        
      </div>

      <div className="container">
        <div className="first" >
          <img alt = "soft" src={soft} width = "385px" height = "450px"/>          
        </div>
        <div className="second">
          <h2 style={{fontSize:"36px", color: "#899AF8"}}>학과 소개</h2>
          <h4 >정보통신 산업의 신기술을<br/>배우고 활용하는 능력을<br/>키워 나가는 학과</h4>
        </div>        
        <div className="third">
          <img alt = "hard" src={hard} width = "385px" height = "450px"/>
        </div>
      </div>

      <div  style={{textAlign:"center", fontSize: "12px"}}>
        <a href= "https://ice.inha.ac.kr/ice/2240/subview.do">정보통신공학과 이수체계도 바로가기&gt;</a>
      </div>

      <div>
          <h2 className="TextBox2">©Department of Information and Communication Engineering Educational Goals</h2>
      </div>
    </Style.Wrapper>
  )
}

export default Introduce