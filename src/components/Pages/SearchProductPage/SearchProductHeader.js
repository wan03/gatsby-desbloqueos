import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import './../main.css';
const SearchProductHeader = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundColor: '', color: ''}}>
        <Container fluid>
          <h3 className="display-3">Busca Tu Celular</h3>
          <p className="lead">Llena el menu en la izquierda para mejor encontrar el tipo de celular que quieres desbloquear.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SearchProductHeader;
