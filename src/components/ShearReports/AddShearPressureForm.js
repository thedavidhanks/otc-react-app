import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NewPanel from '../NewPanel'

class AddShearForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            pressure: '',
            releaseDate: '',
            fileDescription: '',
            bopOEM: '',
            bopDescription: '',
            docOwner: ''
        };
    }
    handleChange = (e) => {
        //notes and type for new markers are attached to markerPopup and should be handled differently.
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        //validate form

        //send fields to axios

        //provide success/fail message
        
        //on success send user to shear test list or another entry.
    }
    render(){
        return(    
        <Container>
            <Row>
                <Col xs={12}>
                <NewPanel title="Add Shear Pressure">
                <p>Add a record of one shear to the database.  Each shear should have a unique shear pressure, 
                low and high pressure test.  Multiple shears can reference the same report.</p>
                <Form onSubmit={this.handleSubmit}>                    
                    <Form.Control id='pressure' placeholder="Shear Pressure (psi)" value={this.state.presure} onChange={this.handleChange}/>
                    <Form.Group controlId="bopOEM">
                        <Form.Label>BOP manufacturer</Form.Label>
                        <Form.Control value={this.state.bopOEM} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="bopDescription">
                        <Form.Label>BOP Description</Form.Label>
                        <Form.Control value={this.state.bopDescription} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="Date">
                        <Form.Label>Test Date</Form.Label>
                        <Form.Control placeholder="date of shear" type="date" value={this.state.releaseDate} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="docOwner">
                        <Form.Label>Company reporting</Form.Label>
                        <Form.Control value={this.state.docOwner} onChange={this.handleChange}/>
                    </Form.Group> 
                    <Button type="submit">Add</Button>
                </Form>
                </NewPanel>
                </Col>
            </Row>
        </Container>
        );
    }
}
export default AddShearForm;