import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import firebase from '../../firebase.js'
import axios from 'axios'

import NewPanel from '../NewPanel'

const host = "https://otc-scripts.herokuapp.com"; //http://localhost:8080";

class AddShearForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fileLocation: '',
            title: '',
            releaseDate: '',
            fileDescription: '',
            docOwner: '',
            progress: 0,
            url: '',
            reportingCompanies: [{id: "1", name: "Looking..."}],
            docID: null
        };
    }
    componentDidMount(){
        axios.get(host + '/shears?options=tests')
            .then(cos => {
                this.setState({
                    reportingCompanies: cos.data
                })
            });
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
        const file = e.target.files[0];
        
        // Get the next report id # from mysql database.
        axios.get(host + '/shears?options=getnew')
            .then(doc => {
                console.log(doc);
                this.setState({
                    docID: doc.data[0].id
                });
            }).then( () => {
                var storageRef = firebase.storage().ref('shear_reports/' + this.state.docID +'.pdf');
                console.log(storageRef);
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
                );                
            });
            
        // Create a reference to the storage file location

    }
        
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        //validate form

        //send fields to axios
        axios.post(host + '/shears?options=updatenew', {
            action: 'add',
            docID: this.state.docID,
            title: this.state.title,
            releaseDate: this.state.releaseDate,
            fileDescription: this.state.fileDescription,
            docOwner: this.state.docOwner,
            url: this.state.url
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
            docID: '',
            releaseDate: '',
            title: '',
            fileDescription: '',
            docOwner: '',
            url: '',
            fileLocation: ''
        });
        //provide success/fail message
        
        //on success send user to shear test list.
    }
    render(){
        const { reportingCompanies } = this.state;
        const companyList = reportingCompanies.length ? (
                                reportingCompanies.map( company => {
                                    return (<option key={company.id} value={company.id}>{company.name}</option>);
                                })
                                ):(
                                null );
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
                        <Form.Control as="select" value={this.state.docOwner} onChange={this.handleChange}>
                            {companyList}
                        </Form.Control>
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