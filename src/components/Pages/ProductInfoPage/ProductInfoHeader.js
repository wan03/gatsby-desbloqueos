import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import './../main.css';
const ProductInfoHeader = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundColor: '', color: ''}}>
        <Container fluid>
          <h3 className="display-3">DESBLOQUEA TU CEL</h3>
          <p className="lead">Vamos, Busca tu celular para desbloquearlo hoy. Liberate!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ProductInfoHeader;
