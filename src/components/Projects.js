import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MockProjects from '../img/mock/jobs.png';

class Projects extends Component {
    render(){
        return (
            <Container fluid='true'>
                <Row><Col /><Col xs={12} md={6}><h4>Projects</h4></Col><Col /></Row>
                <Row style={{marginTop: '20px' }} ><Col /><Col md={6}><Image src={MockProjects} /></Col><Col /></Row>
            </Container>
      );
    }
};

export default Projects;
