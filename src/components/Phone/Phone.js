import React from 'react';

import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';




function Phone(props){
    return(
        <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <p>{props.price}</p>
          <Button>Button</Button>
        </CardBody>
      </Card>
    )
}



export default Phone;
