import styled from "styled-components";
import logo from "../assets/logo.png";

function TelaInicial({setComecado}){
    return(
        <Tela>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
          <button onClick={() => setComecado(true)} data-test="start-btn">Iniciar Recall!</button>
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
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        letter-spacing: -0.012em;

        color: #FFFFFF;
    }

    button{
    color: #D70900;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

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