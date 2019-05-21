import React from "react";

// Layout imports
import { Container, Row, Col } from 'reactstrap';
import ProductTabs from './ProductTabs';


function WrapperB(props) {
    return (
        <div>
            <Container>
                    <Row>
                        <Col className=".col-sm-12 .col-md-7 .offset-md-2">
                        </Col>
                    <ProductTabs/>
                    </Row>
            </Container>
        </div>

    );
}


export default WrapperB;
