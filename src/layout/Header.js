import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    border: 1px solid black;
    display: flex;
    align-items: center;
  `,
};

const Header = () => {
  return <Style.Wrapper>헤더</Style.Wrapper>;
};

export default Header;
