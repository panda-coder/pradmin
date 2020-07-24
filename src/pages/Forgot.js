import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import useClass from '../hooks/add-class-body';

import {
    Container,
    Col,
    Row,
    Form,
    Card,
    CardBody,
    Input,
    InputGroup,
    Button
} from 'reactstrap';

export default () => {
    useClass('bg-blue')

    const handleSendEmail = () => {
        console.log('Here');
    }
    
    return (
        <div className="mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Forgot Password?</h1>
                                    <p>Enter e-mail. And you will receive a email with link to reset your password.</p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleSendEmail}>Go!</Button>

                                        <Link to="/login">
                                            <Button color="link" >Login</Button>
                                        </Link>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}