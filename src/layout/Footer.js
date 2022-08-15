import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    background-color: #d6e5f7;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    height: 100%;
    justify-content: center;
    gap: 20px;
  `,
  InfoRow: styled.div`
    display: flex;
    gap: 20px;
  `,
  InfoItem: styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    width: 25vw;
    word-break: break-all;
  `,
  Icon: styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
  `,
};

const Footer = () => {
  return (
    <Style.Wrapper>
      <Style.InfoContainer>
        <Style.InfoRow>
          <Style.InfoItem>
            <Style.Icon src="/call.svg" />
            <span>
              전화 : <span style={{ color: "grey" }}>032-860-7431</span>
            </span>
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.Icon src="/location.svg" />
            <span>
              위치 : <span style={{ color: "grey" }}>하이테크 416호</span>
            </span>
          </Style.InfoItem>
        </Style.InfoRow>
        <Style.InfoRow>
          <Style.InfoItem>
            <Style.Icon src="/fax.svg" />
            <span>
              Fax : <span style={{ color: "grey" }}>032-873-8970</span>
            </span>
          </Style.InfoItem>
          <Style.InfoItem>
            <Style.Icon src="/youtube.svg" />
            <span>
              유튜브 :{" "}
              <a
                href="https://www.youtube.com/channel/UCpCVjny3GvGmWOBqKQPfrwA"
                style={{ color: "grey" }}
              >
                https://www.youtube.com/channel/UCpCVjny3GvGmWOBqKQPfrwA
              </a>
            </span>
          </Style.InfoItem>
        </Style.InfoRow>
      </Style.InfoContainer>
    </Style.Wrapper>
  );
};

export default Footer;
