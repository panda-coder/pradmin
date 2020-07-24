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

    const handleLogin = () => {
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
                                    <h1>Login</h1>
                                    <p>
                                        Enter e-mail and password to access New? <Link to="/register">Sign Up</Link>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleLogin}>Go!</Button>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <Link to="/forgot">
                                            <Button color="link" >Forgot Password</Button>
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