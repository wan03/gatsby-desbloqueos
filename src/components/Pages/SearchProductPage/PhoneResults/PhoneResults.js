import React from "react";

// Layout imports
import { Container, Row, Col } from 'reactstrap';
import SortBar from './SortBar';
import PhoneResultsWrapper from './PhoneResultsWrapper';



function PhoneResults(props) {
    return (
        <div>
            <Container>
                <Row>
                <SortBar />
                </Row>
                <Row>
                    <PhoneResultsWrapper />
                </Row>
            </Container>
        </div>

    );
}


export default PhoneResults;
