import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 300vh;
  `,
  FeaturesContainer: styled.div`
    width: 85vw;
    padding-top: 80px;
  `,
  Title: styled.div`
    font-size: 60px;
    margin-left: 30px;
    color: #4d5d97;
    font-weight: bold;
  `,
  SubTitile: styled.div`
    font-size: 24px;
  `,
  ParagraphTitle: styled.div`
    display: flex;
    font-size: 40px;
    font-weight: bold;
    color: #899af8;
    margin-top: 60px;
    justify-content: center;
  `,
  ParagraphContents: styled.div`
    display: flex;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 180px;
    margin-right: 180px;
    justify-content: center;
  `,
  Copyright: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
  `,
  Img: styled.img`
    display: flex;
    margin: 0 auto;
    margin-top: 45px;
  `,
};

const Features = () => {
  return (
    <Style.Wrapper>
      <Style.FeaturesContainer>
        <Style.Title>
          FEATURES
          <Style.SubTitile>타과와 대비되는 정통만의 장점</Style.SubTitile>
        </Style.Title>

        <Style.ParagraphTitle>정통만의 특별함</Style.ParagraphTitle>
        <Style.ParagraphContents>
          정보통신공학과는 하드웨어와 그 하드웨어를 제어하는 소프트웨어에 대해
          배우는 학과이다.
          <br />
          때문에 하드웨어 과목과 소프트웨어 과목을 고루 배우는 차별화된
          커리큘럼을 가졌으며,
          <br />
          이를 바탕으로 하드웨어, 소프트웨어, 임베디드, IoT 등등 다양한 분야에
          진출 할 수 있다.
        </Style.ParagraphContents>

        <Style.Img
          src="images/Difference_from_other.png"
          alt="타과와의 차이점"
        />

        <Style.Copyright>
          ©Department of Information and Communication Engineering
        </Style.Copyright>

        <Style.ParagraphTitle>어중간하게 배우는건 아닐까?</Style.ParagraphTitle>
        <Style.ParagraphContents>
          정보통신공학과의 취업률은 공과 대학 중에서도 최상위권에 해당한다.
          <br />
          어중간하게 배우는 것이 아닌 다양한 것을 배울 수 있는 것!
          <br />
          실제로 많은 학생들이 여러 필수 전공을 듣고 세부 전공을 정하게 된다.
        </Style.ParagraphContents>

        <Style.Img src="images/employment_rate.png" alt="취업률" />
        <Style.Copyright>
          ©Department of Information and Communication Engineering
        </Style.Copyright>
      </Style.FeaturesContainer>
    </Style.Wrapper>
  );
};
export default Features;
