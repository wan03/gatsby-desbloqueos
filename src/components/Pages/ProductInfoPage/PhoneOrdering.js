import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './ProductInfoPage';

// Layout imports


function PhoneOrdering(props) {
    return (

        <div>
            <Row>
                <Col>
            <div className="ProductInfoText">
                <h3>iPhone</h3>
                <h6>$35</h6>
            </div>
            </Col>
            </Row>
            <Row>
                <Col>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect" className="mr-sm-3">Select Your Phone's Carrier:</Label>
                        <Input type="select" name="select" id="exampleSelect" className="mr-sm-3">
                            <option>Att</option>
                            <option>Sprint</option>
                            <option>Verizon</option>
                        </Input>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-12 mb-sm-0">
                        <Label for="imei" className="mr-sm-3">Enter Your Phone's IMEI Number:</Label>
                        <Input type="text" name="ime" id="ime-field" placeholder="Enter 15 digit number here" className="mr-sm-3" />
                        <p className="smallText">Dial *#06# or Options, Status, IMEI Should be a 15-digit number</p>
                    </FormGroup>
                    <Button color="primary" size="lg" block>Ordena Ahora</Button>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="delivery-time-box">
                        <h6>ESTIMATED DELIVERY TIME:</h6>
                        <p>5-15 BUSINESS DAYS</p>
                    </div>
                </Col>
            </Row>
        </div>

    );
}
export default PhoneOrdering;
