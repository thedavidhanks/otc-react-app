import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MockGasCalculator from '../img/mock/SimpleGasModule.png';

class GasCalculatorMock extends Component {
    render(){
        return (
            <Container fluid='true'>
                <Row><Col /><Col xs={12} md={6}><h4>Gas Calculator</h4></Col><Col /></Row>
                <Row><Col /><Col md={6}><Image src={MockGasCalculator} /></Col><Col /></Row>
            </Container>
      );
    }
};

export default GasCalculatorMock;