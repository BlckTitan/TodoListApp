import RouteEngine from './routeEngine/RouteEngine';
//styled compoents (styles)
import Styled from 'styled-components';
//context
import SharedStates from './utilities/SharedStates';

const Container = Styled.div`
  display:  flex;
  flex-direction:  column;
  align-items:  center;
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Container className="App">
      <SharedStates>
        <RouteEngine/>
      </SharedStates>
    </Container>
  );
}

export default App;
/**
 * 
      
 */