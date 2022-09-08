import RouteEngine from './routeEngine/RouteEngine';
//styled compoents (styles)
import Styled from 'styled-components';

const Container = Styled.div`
  display:  flex;
  flex-direction:  column;
  align-items:  center;
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
`;

function App() {
  return (
    <Container className="App">
      <RouteEngine/>
    </Container>
  );
}

export default App;
