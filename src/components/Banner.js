import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  BannerImage: styled.img`
    width: 100vw;
    height: 100vh;
  `,
  Title: styled.span`
    font-size: 30px;
    color: white;
    z-index: 2;
    position: absolute;
    top: 30vh;
  `,
  SubTitle: styled.span`
    font-size: 40px;
    color: white;
    font-weight: bolder;
    z-index: 2;
    position: absolute;
  `,
};

const Banner = () => {
  return (
    <Style.Wrapper>
      <Style.Title>정보통신 공학과</Style.Title>
      <Style.SubTitle></Style.SubTitle>
      <Style.BannerImage src="/mainBanner.jpg" />
    </Style.Wrapper>
  );
};

export default Banner;
