import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import _ from 'lodash';

import NewPanel from './NewPanel.js';
import PipesTable from './PipesTable.js';
import RigProperties from './RigProperties.js';
import ShearList from './ShearList.js';
import AddPipeForm from './AddPipeForm.js';
    
class ShearCalculator extends Component{
    constructor(props){
        super(props);
        
    };
    render(){    
    return(
        <Container fluid={true}>
            <Row>
                <Col /><Col xs={12} md={6}><h4>Shear Calculator</h4></Col><Col />
            </Row>
            <Row>
                <Col xs={12}>
                <ButtonToolbar>
                    <Button disabled variant="success" className='m-2'>New</Button>
                    <Button disabled className='m-2'>Load</Button>
                </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} >
                <AddPipeForm />
                <RigProperties />
                <NewPanel title="Well Conditions">x,y,z</NewPanel>
                </Col>
                <Col md={4}>
                    <ShearList />
                </Col>
            </Row>
        </Container>
    );
    };
};

export default ShearCalculator;
