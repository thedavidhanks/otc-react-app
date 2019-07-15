import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import axios from 'axios';

import IconSort from '../img/icons/baseline-sort-24px.svg';
import IconFilter from '../img/icons/baseline-filter_list-24px.svg';

import IconAdd from '../img/icons/baseline-add-24px.svg';
import ModalAddProject from './Projects/ModalAddProject.js';
import ProjectSummary from './Projects/ProjectSummary';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: []
        };
    }
    componentDidMount(){
        axios.get('http://otc-scripts.herokuapp.com/projects/')
            .then(projects => {
                console.log(projects);
                this.setState({
                    projects: projects.data
                })
            });
    }
    
    render(){
        const { projects } = this.state;
        const projectList = projects.length ? (
                                projects.map( project => {
                                    return (<ProjectSummary 
                                                key={project.id}
                                                id={project.id}
                                                rigOwner={project.rig_owner} 
                                                rigName={project.rig_name} 
                                                clientName={project.name} 
                                                status={project.status}
                                                projectNumber={project.number}
                                            >
                                                More information on the rig....
                                            </ProjectSummary>);
                                })
                                ):(
                                null );
        return (
                <Container  fluid={true}>
                    <ModalAddProject />
                    <Row>
                        <Col /><Col xs={12} md={6} className="text-center"><h4>Projects</h4></Col><Col />
                    </Row>
                    <Row className='mb-2'>
                        <Col md={{span: 10, offset: 1}} sm={12}>
                        <ButtonToolbar className='float-sm-right'>
                            <Button className="mx-1" data-toggle="collapse" data-target="#filterRigBox" ><img src={IconFilter} alt="filter" title='filter'/></Button>
                            <Button className="mx-1" data-toggle="collapse" data-target="#sortRigBox" title='sort'><img src={IconSort} alt="sort" title="sort"/></Button>
                            <Button className="mx-1" data-toggle="modal" data-target=".modal-add-rig"><img src={IconAdd} alt="add" title='add'/></Button>
                        </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row className='collapse' id="filterRigBox"><Col md={{span: 10, offset: 1}} sm={12}><p>filter options</p></Col></Row>
                    <Row className='collapse' id="sortRigBox"><Col md={{span: 10, offset: 1}} sm={12}><p>sort options</p></Col></Row>
                    <Row>
                        <Col md={{span: 10, offset: 1}} sm={12}>
                            {projectList}
                        </Col>
                    </Row>
                </Container>
        );
    }
};

export default Projects;
