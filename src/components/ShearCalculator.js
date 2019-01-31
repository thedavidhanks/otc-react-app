import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewPanel from './NewPanel.js';

class ShearCalculator extends Component{
    render(){
        return(
            <Container fluid={true}>
                <Row>
                    <Col /><Col xs={12} md={6}><h4>Shear Calculator</h4></Col><Col />
                </Row>
                <Row>
                    <Col xs={12}>
                    <ButtonToolbar>
                        <Button variant="success" className='m-2'>New</Button>
                        <Button disabled className='m-2'>Load</Button>
                    </ButtonToolbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9} >
                        <NewPanel title="Shearables">Here's text for the Shearable stuff</NewPanel>
                        <NewPanel title="Well Conditions">x,y,z</NewPanel>
                        <NewPanel title="Rig Properties"><div><p>here's some text about rig properties</p><p>blah. blah. blah.</p></div></NewPanel>
                    </Col>
                    <Col md={3}>
                            <NewPanel title='Results'>a,b,c</NewPanel>
                    </Col>
                </Row>
            </Container>
    )};
};

export default ShearCalculator;
