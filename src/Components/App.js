import styled from "styled-components";
import GlobalStyle from './globalStyle';
import cards from "../cards";
import Flashcard from "./Flashcard";
import Rodape from "./Rodape";
import logo from "../assets/logo.png";
import { useState } from 'react';

function App() {

  const [cardsFeitos, setCardsFeitos] = useState([]);
  const [respostas, setRespostas] = useState([]);

  let countPerguntas = 0;

  function renderizarPerguntas(cards){
    countPerguntas++;
    return(
    <Flashcard countPerguntas={countPerguntas} key={countPerguntas}
     question={cards.question} answer={cards.answer} setCardsFeitos={setCardsFeitos}
     cardsFeitos={cardsFeitos} respostas={respostas}
    setRespostas={setRespostas}/>
    );
  }

  return(
    <>
      <GlobalStyle/>
      <ScreenContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <div>
          {cards.map((cards) => renderizarPerguntas(cards))}
        </div>
        <Rodape/>
      </ScreenContainer>
  </>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
 img{
  width: 52px;
 }
 h1{
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
 }
`

export default App;