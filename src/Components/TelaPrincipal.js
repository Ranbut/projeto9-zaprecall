import styled from "styled-components";
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
        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>
        <div>
          {cards.map((cards) => renderizarPerguntas(cards))}
        </div>
        <Rodape countPerguntas={countPerguntas} respostas={respostas}/>
  </>
  );
}

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