import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewPanel from '../NewPanel.js';

class RigProperties extends Component{
    constructor(props){
        super(props);
        this.state = {
            bopLocation: 'surface'
        };
    }
    onFieldChange = (event) => {
        var bopLocation = event.target.value;
        this.setState({bopLocation});
    }
    render(){
        return(
            <NewPanel title="Rig Properties">
                <Form>
                    <Form.Group as={Row} controlId="bopLocation">
                        <Col sm="3"><Form.Label>BOP location</Form.Label></Col>
                        <Col sm="8">
                            <Form.Control as="select" value={this.state.bopLocation} onChange={this.onFieldChange}>
                                <option value="surface">Surface</option>                        
                                <option value="subsea">Subsea</option>
                            </Form.Control>
                        </Col>
                        <Col />
                    </Form.Group>
                </Form>
            </NewPanel>
    );}
};

export default RigProperties;