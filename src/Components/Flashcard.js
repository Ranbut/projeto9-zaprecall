import styled from "styled-components";
import { useState } from 'react';
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";
import erroIcone from "../assets/icone_erro.png";
import quaseIcone from "../assets/icone_quase.png";
import certoIcone from "../assets/icone_certo.png";


function Flashcard({countPerguntas, question, answer, setCardsFeitos, cardsFeitos, respostas, setRespostas}){

  const [virados, setVirados] = useState([]);
  const [cardsRespostas, setCardsRespostas] = useState([]);

  //Cores
  const padraoCor = "#333333";
  const quaseCor = "#FF922E";
  const erroCor = "#FF3030";
  const certoCor = "#2FBE34";

  function selecionado(status){

    //Status
    //0 = Errado
    //1 = Quase
    //2 = Certo

    setCardsFeitos([...cardsFeitos, countPerguntas]);
    switch(status){
      case 0:
        setRespostas([...respostas, {id: countPerguntas, icone: erroIcone, cor: erroCor}]);
        break;
      
      case 1:
        setRespostas([...respostas, {id: countPerguntas, icone: quaseIcone,  cor: quaseCor}]);
        break;

      case 2:
        setRespostas([...respostas, {id: countPerguntas, icone: certoIcone, cor: certoCor}]);
        break;

      default:
        break;
    }
}

  function configurarCard(){
    if(virados.includes(countPerguntas)){
        if(cardsRespostas.includes(countPerguntas)){
            if(cardsFeitos.includes(countPerguntas)){
                for(let i = 0; i < respostas.length; i++){
                    if(respostas[i].id === countPerguntas){
                        return(
                            <PerguntaFechada key={countPerguntas} finalizado={cardsFeitos.includes(countPerguntas)} cor={respostas[i].cor} data-test="flashcard">
                                <p data-test="flashcard-text">Pergunta {respostas[i].id}</p>
                                <img src={respostas[i].icone} alt={respostas[i].icone} data-test={respostas[i].icone === erroIcone ? "no-icon" : respostas[i].icone === certoIcone ? "zap-icon": respostas[i].icone === quaseIcone ? "partial-icon" : ""}/>
                            </PerguntaFechada>
                        );
                    }
                }
            }else{
                return (
                    <PerguntaAberta  key={countPerguntas} data-test="flashcard">
                        <p data-test="flashcard-text">{answer}</p>
                        <ContainerBotoes>
                            <StyledButton onClick={() => selecionado(0)} cor={erroCor} data-test="no-btn">Não lembrei</StyledButton>
                            <StyledButton onClick={() => selecionado(1)} cor={quaseCor} data-test="partial-btn">Quase não lembrei</StyledButton>
                            <StyledButton onClick={() => selecionado(2)} cor={certoCor} data-test="zap-btn">Zap!</StyledButton>
                        </ContainerBotoes>
                    </PerguntaAberta>
                );
            }
        }else{
            return (
                <PerguntaAberta key={countPerguntas} data-test="flashcard">
                    <p data-test="flashcard-text">{question}</p>
                    <img src={virar} alt="virar" onClick={() => setCardsRespostas([...cardsRespostas, countPerguntas])} data-test="turn-btn"/>
                </PerguntaAberta>
            );
        }
    }else{
        return(
            <PerguntaFechada key={countPerguntas} cor={padraoCor} data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {countPerguntas}</p>
                <img src={play} alt="play" onClick={() => setVirados([...virados, countPerguntas])} data-test="play-btn"/>
            </PerguntaFechada>
        );
    }
}

return configurarCard();

}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.cor};
        text-decoration: ${props => props.finalizado && "line-through"} ;
    }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
`

const ContainerBotoes = styled.div`
    display: flex;
    margin-top: 20px;

  button{
  width: 85.17px;
  height: 37.17px ;
  margin-left: 7.14px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
  }
`;

const StyledButton = styled.button`
    background:${props => props.cor};
`;


export default Flashcard;