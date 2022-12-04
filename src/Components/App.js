import styled from "styled-components";
import { useState } from 'react';
import GlobalStyle from './globalStyle';
import TelaInicial from './TelaInicial';
import TelaPrincipal from './TelaPrincipal';

export default function App() {
  const [comecado, setComecado] = useState(false);
  return (
    <>
      <GlobalStyle/>
      <ScreenContainer>
        {comecado ? <TelaPrincipal /> : <TelaInicial setComecado={setComecado} />}
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
`;