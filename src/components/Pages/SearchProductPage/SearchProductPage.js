import React from "react";

//Styling CSS imports
// import "./SearchProductPage.css"
import './../main.css';


import { Container, Row, Col } from 'reactstrap';

// Component imports
import SearchProductHeader from './SearchProductHeader';
import WrapperA from './WrapperA';



function SearchProductPage(props) {
    return (
        <div >
            <SearchProductHeader/>
            <Container>
            <Row>
                <Col>
            <WrapperA />
            </Col>
            </Row>
            </Container>
        </div >
    );
}

export default SearchProductPage;
