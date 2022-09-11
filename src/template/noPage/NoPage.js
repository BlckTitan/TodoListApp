import React from 'react'
//styled component
import Styled from 'styled-components';

const Container = Styled.div`
  color: #1B2F5D;
`;

export default function NoPage() {
  return (
    <Container>
        <h1>OOPS ERROR 404! </h1>
    </Container>
  )
}
