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
            fileLocation: '',
            title: '',
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
        
        //on success send user to shear test list.
    }
    render(){
        return(    
        <Container>
            <Row>
                <Col xs={12}>
                <NewPanel title="Upload Shear Test Report">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="fileLocation">
                        <Form.Control type='file' value={this.state.fileLocation} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Control id='title' placeholder="Report Title" value={this.state.title} onChange={this.handleChange}/>
                    <Form.Group controlId="bopOEM">
                        <Form.Label>BOP manufacturer</Form.Label>
                        <Form.Control value={this.state.bopOEM} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="bopDescription">
                        <Form.Label>BOP Description</Form.Label>
                        <Form.Control value={this.state.bopDescription} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="releaseDate">
                        <Form.Label>Release Date</Form.Label>
                        <Form.Control type="date" value={this.state.releaseDate} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="docOwner">
                        <Form.Label>Company reporting</Form.Label>
                        <Form.Control value={this.state.docOwner} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='fileDescription'>
                        <Form.Label>Test Description</Form.Label>
                        <Form.Control as='textarea' value={this.state.fileDescription} onChange={this.handleChange} rows="3" />
                    </Form.Group>
                    <Button type="submit">Upload</Button>
                </Form>
                </NewPanel>
                </Col>
            </Row>
        </Container>
        );
    }
}
export default AddShearForm;