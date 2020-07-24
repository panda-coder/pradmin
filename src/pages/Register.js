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

    const handleCreate = () => {
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
                                    <h1>New Account</h1>
                                    <p>
                                        Enter name, e-mail and password to create account. Already registered? <Link to="/login">Log in</Link>
                                    </p>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Name"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password"></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Button outline color="primary" onClick={handleCreate}>Go!</Button>
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