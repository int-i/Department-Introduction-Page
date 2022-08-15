import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `,
  GatheringImage: styled.img`
    height: 100%;
  `,
  GatheringContainer: styled.div`
    width: 85vw;
    height: 100vh;
    padding-top: 80px;
  `,
  Title: styled.h1`
    font-size: 40px;
    font-weight: bolder;
    color: #4d5d97;
    margin: 0;
    padding: 0;
  `,
  SubTitle: styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin: 0;
    padding: 0;
    margin-bottom: 50px;
  `,
  ImageTitle: styled.h3`
    font-size: 25px;
    font-weight: bolder;
    color: #899af8;
    margin: 0;
    padding: 0;
  `,
  ImageArea: styled.div`
    width: 100%;
  `,
  ImageContainer: styled.div`
    height: 22vh;
    width: 100%;
    display: flex;
    gap: 30px;
  `,
  TextContainer: styled.div`
    width: 544px;
    display: flex;
    flex-direction: column;
    gap: 23px;
  `,
  ImageDesc: styled.div`
    width: 100%;
    font-size: 19px;
    color: black;
  `,
};
const Gathering = () => {
  return (
    <Style.Wrapper>
      <Style.GatheringContainer>
        <Style.Title>Gathering</Style.Title>
        <Style.SubTitle>정통 소모임</Style.SubTitle>
        <Style.ImageArea>
          <Style.ImageContainer>
            <Style.GatheringImage src="bluetooth.jpg" alt="블루투스" />
            <Style.TextContainer>
              <Style.ImageTitle>블루투스</Style.ImageTitle>
              <Style.ImageDesc>
                블루투스는 2002년 창단하여 축구에 대한 열정과 서로에 대한 신뢰를
                바탕으로 지난 10여 년간 꾸준하게 활동하고 있는 축구
                소모임입니다.
              </Style.ImageDesc>
            </Style.TextContainer>
          </Style.ImageContainer>
          <Style.ImageContainer style={{ justifyContent: "flex-end" }}>
            <Style.TextContainer style={{ alignItems: "flex-end" }}>
              <Style.ImageTitle>아이스비</Style.ImageTitle>
              <Style.ImageDesc>
                2001년에 창단하여 올해로 14년째를 맞는 농구 동아리입니다. 매주
                수요일 6시 운동장에서 정기연습을 하고 다른 동아리와 친선경기 및
                리그전을 합니다.
              </Style.ImageDesc>
            </Style.TextContainer>
            <Style.GatheringImage src="iceB.jpg" alt="아이스비" />
          </Style.ImageContainer>
          <Style.ImageContainer>
            <Style.GatheringImage src="intI.png" alt="인트아이" />
            <Style.TextContainer>
              <Style.ImageTitle>인트아이</Style.ImageTitle>
              <Style.ImageDesc>
                인트아이는 2016년 말 창단하여 매년 1~2회 소모임 내 해커톤 및
                여러 대회를 진행하고 있고, 매학기 프로그래밍 관련 스터디도
                진행하는 등 꾸준히 활동을 이어오고 있는 소모임입니다.
              </Style.ImageDesc>
            </Style.TextContainer>
          </Style.ImageContainer>
        </Style.ImageArea>
      </Style.GatheringContainer>
    </Style.Wrapper>
  );
};
export default Gathering;
