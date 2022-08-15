import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  Title: styled.div`
    text-align: center;
    line-height: 150px;
    color: #899AF8;
    font-size: 40px;
  `,
  TalentContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    height: 100vh;
    gap: 74px;
  `,
  Team: styled.div`
    display: flex;
    gap: 30px;
  `,
  TeamText: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Idea: styled.div`
    display: flex;
    gap: 30px;
  `,
  IdeaText: styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`,
  Target: styled.div`
    display: flex;
    gap: 30px;
  `,
  TargetText: styled.div`
  display: flex;
  flex-direction: column;
`,
Logo: styled.img`
width: 420px;
height: 400px;
position: absolute;
opacity: 0.2;
right: 100px;
`
};

const Talent = () => {
  return <Style.Wrapper>
    <Style.Title>
      <div>학과 인재상</div>
    </Style.Title>
    <Style.TalentContainer>
      <Style.Team>
        <img src="/team.png" width={128} height={128}/>
        <Style.TeamText>
          <div style={{fontSize: "32px"}}>국제성</div><div>:국제적 경쟁력을 갖춘 지식과 지속적 자기계발을 통해 세계무대에서 활약할 수 있는 엔지니어로 성장시킨다.</div>
        </Style.TeamText>
        <Style.Logo src="/logo_1.png"/>
      </Style.Team>
      <Style.Idea style={{justifyContent: "flex-end"}}>
        <Style.IdeaText>
        <div style={{fontSize: "32px"}}>창의성</div><div>:기초과학의 충실한 학습과 창의적 사고를 바탕으로 정보통신분야의 시스템, 부품, 공정방법을 분석하고 설계하는 능력을 기른다.</div>
        </Style.IdeaText>
        <img src="/idea.png" width={128} height={128}/>
      </Style.Idea>
      <Style.Target>
      <img src="/target.png" width={128} height={128}/>
      <Style.TargetText>
        <div style={{fontSize: "32px"}}>전문성</div><div>:정보통신분야의 전문기술을 활용하여 문제를 해결하는 능력을 기른다.</div>
      </Style.TargetText>
      </Style.Target>
    </Style.TalentContainer>
  </Style.Wrapper>;
};


export default Talent;