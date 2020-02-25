import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import firebase from '../../firebase.js'

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
            docOwner: '',
            progress: 0,
            url: ''
        };
    }
    handleChange = (e) => {
        //notes and type for new markers are attached to markerPopup and should be handled differently.
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleFileUpload = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        
        // Create a reference to the storage file location
        // TODO: get the next report id # from mysql database.
        var storageRef = firebase.storage().ref('shear_reports/' + '1.pdf');
        const file = e.target.files[0];
        var task = storageRef.put(file);
        
        task.on('state_changed', 
            (snapshot) => {
                var percentUpload = 100 * (snapshot.bytesTransferred/
                        snapshot.totalBytes);
                this.setState({progress: percentUpload});
            },
            (err) => {
                console.log(err);
            },
            () => {
                // TODO update state of download url
                storageRef.getDownloadURL()
                    .then(url => {
                      this.setState({ url });
                    });
                console.log(this.state.url);
            }
        )
       
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
                        <Form.Control type='file' value={this.state.fileLocation} onChange={this.handleFileUpload} />
                        <ProgressBar now={this.state.progress} label={`${this.state.progress}%`} />
                    </Form.Group>
                    <Form.Control id='title' placeholder="Report Title" value={this.state.title} onChange={this.handleChange}/>
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