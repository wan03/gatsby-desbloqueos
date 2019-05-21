import React from "react";

// Layout imports
import { Container, Row, Col } from 'reactstrap';
import PhonePlacement from './PhonePlacement';


function WrapperA(props) {
    return (
        <div>
            <Container>

                    <PhonePlacement />

            </Container>
        </div>

    );
}


export default WrapperA;
