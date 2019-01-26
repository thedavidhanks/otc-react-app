import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
//import ShearLinesTable from './ShearLinesTable.js';
import NewPanel from './NewPanel.js';

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
                        <NewPanel title="Shearables">Here's text for the Shearable stuff</NewPanel>
                        <NewPanel title="Well Conditions"><NewPanel title='a specific condition' /></NewPanel>
                        <NewPanel title="Rig Properties"><p>here's some text about rig properties</p><p>blah. blah. blah.</p></NewPanel>
                    </Col>
                    <Col md={3}>
                    outputs
                    </Col>
                </Row>
            </Grid>
    )};
};

export default ShearCalculator;
