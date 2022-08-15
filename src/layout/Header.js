import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 2;
  `,
  Logo: styled.div`
    width: 224px;
    height: 80px;
    background-color: #ff3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-left: 60px;
    cursor: pointer;
  `,
  NavWrapper: styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 60px;
    height: 80px;
    gap: 85px;
  `,
  NavItem: styled.span`
    color: black;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  `,
};

const Header = ({ home, about, feature, gathering }) => {
  const homeOnClick = () => {
    if (home !== undefined && home.current !== null)
      home.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const aboutOnClick = () => {
    if (about !== undefined && about.current !== null)
      about.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const featureOnClick = () => {
    if (feature !== undefined && feature.current !== null)
      feature.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const gatheringOnClick = () => {
    if (gathering !== undefined && gathering.current !== null)
      gathering.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  return (
    <Style.Wrapper>
      <Style.Logo
        onClick={() => {
          window.location.href = "/";
        }}
      >
        로고
      </Style.Logo>
      <Style.NavWrapper>
        <Style.NavItem onClick={homeOnClick}>HOME</Style.NavItem>
        <Style.NavItem onClick={aboutOnClick}>ABOUT</Style.NavItem>
        <Style.NavItem onClick={featureOnClick}>FEATURES</Style.NavItem>
        <Style.NavItem onClick={gatheringOnClick}>GATHERING</Style.NavItem>
        <Style.NavItem
          onClick={() => {
            window.location.href = "/forum";
          }}
        >
          FORUM
        </Style.NavItem>
      </Style.NavWrapper>
    </Style.Wrapper>
  );
};

export default Header;
