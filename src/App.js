//organism
import Navigation from './organism/navigation/Navigation';
import Content from './organism/content/Content';
//styled compoents (styles)
import Styled from 'styled-components';

const Container = Styled.div`
  display:  flex;
  flex-direction:  column;
  align-items:  center;
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  position: relative;
`;

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Content />
    </Container>
  );
}

export default App;
