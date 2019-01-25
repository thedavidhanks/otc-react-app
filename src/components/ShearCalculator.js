import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button, PageHeader } from 'react-bootstrap';
import ShearLinesTable from './ShearLinesTable.js';

class ShearCalculator extends Component{
    render(){
        return(
            <Grid fluid={true}>
                <Row>
                    <Col md={4}></Col>
                    <Col xs={12} md={4}><h4>Shear Calculator.</h4></Col>
                    <Col md={4}></Col>
                </Row>
                
                <ButtonToolbar>
                    <Button bsStyle="success">New</Button>
                    <Button disabled>Load</Button>
                </ButtonToolbar>
                
                <Row>
                    <Col xs={12} md={9} >
                        <ShearLinesTable />
                        <div>well conditions</div>
                        <div>rig properties</div>
                    </Col>
                    <Col md={3}>
                    outputs
                    </Col>
                </Row>
            </Grid>
    )};
};

export default ShearCalculator;
