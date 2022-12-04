import styled from "styled-components";
import logo from "../assets/logo.png";

function TelaInicial({setComecado}){
    return(
        <Tela>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
          <button onClick={() => setComecado(true)}>Iniciar Recall!</button>
        </Tela>
    );
}

const Tela = styled.div`

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
    margin-left: auto;
    margin-right: auto;
    display: block;
    }

    h1{
        text-align: center;
        margin-top: 13px;
    }

    button{
    width: 246px;
    height: 54px;
    margin-top: 30px;

    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    }
`;

export default TelaInicial