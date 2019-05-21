import React from "react";

// Layout imports
import { Container, Row, Col } from 'reactstrap';
import PhoneResults from './PhoneResults/PhoneResults';
import SearchWrapper from './SearchWrapper/SearchWrapper';


function WrapperA(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <PhoneResults/>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default WrapperA;
