import styled from "styled-components"
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";
import festa from "../assets/party.png";
import triste from "../assets/sad.png";
import cards from "../cards";

function Rodape({countPerguntas, respostas, cardsFeitos}){
    return(
        <>
            <RodapeConcluidos data-test="footer">
                <Resultado data-test="finish-text">
                {(cardsFeitos.length === cards.length) ? <>
                <span>
                  <img src={respostas.find(e => e.icone === erro) ? triste : festa} alt="" />
                  {respostas.find(e => e.icone === erro) ? 'Putz...' : 'Parabéns!'}
                </span>
                  <p>{respostas.find(e => e.icone === erro) ? <>Ainda faltam alguns... <br/> Mas não desanime!</> : 'Você não esqueceu de nenhum flashcard!'}</p></> : <div></div>}
                </Resultado>
                {respostas.length}/{countPerguntas} CONCLUÍDOS
                <ContainerResposta>
                  {respostas.map((p) => <img key={p.id} src={p.icone} alt="" data-test={p.icone === erro ? "no-icon" : p.icone === certo ? "zap-icon": p.icone === quase ? "partial-icon" : ""}/>)}
                </ContainerResposta>
            </RodapeConcluidos>
        </>
    );
}

const RodapeConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 14px;
        text-align: center;
        line-height: 25px;
    }
    span{
        font-weight: bold;
        img{
            margin-right: 12px;
        }
    }
`

const ContainerResposta = styled.div`
  display: flex;
  margin-top: 6px;
  width: 15%;
  justify-content: space-between;
`

export default Rodape;