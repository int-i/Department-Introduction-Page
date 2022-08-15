import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    position: sticky;
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
  `,
};

const Header = () => {
  return (
    <Style.Wrapper>
      <Style.Logo>로고</Style.Logo>
      <Style.NavWrapper>
        <Style.NavItem>HOME</Style.NavItem>
        <Style.NavItem>ABOUT</Style.NavItem>
        <Style.NavItem>FEATURES</Style.NavItem>
        <Style.NavItem>GATHERING</Style.NavItem>
        <Style.NavItem>FORUM</Style.NavItem>
      </Style.NavWrapper>
    </Style.Wrapper>
  );
};

export default Header;
