import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
  `,
  BannerImage: styled.img`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
  `,
};

const Banner = () => {
  return (
    <Style.Wrapper>
      <Style.BannerImage src="/mainBanner.jpg" />
    </Style.Wrapper>
  );
};

export default Banner;
