import styled from "styled-components"
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import erro from "../assets/icone_erro.png";


function Rodape({countPerguntas, respostas}){
    return(
        <>
            <RodapeConcluidos>
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
const ContainerResposta = styled.div`
  display: flex;
  margin-top: 6px;
  width: 15%;
  justify-content: space-between;
`

export default Rodape;