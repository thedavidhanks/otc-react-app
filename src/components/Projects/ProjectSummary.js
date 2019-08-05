import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IconExpandMore from '../../img/icons/outline-expand_more-24px.svg';
import IconEdit from '../../img/icons/baseline-edit-24px.svg';

const ProjectSummary = props =>(
            <Container className="new-panel p-1">
                <Row>
                    <Col md={8}>
                        <div className='float-left'>
                        <div><h4>{props.rigOwner} {props.rigName} - {props.clientName}</h4></div>
                            <div>{props.status}</div>  
                        </div>
                    </Col>
                    <Col md={4}>
                            <div className='float-right'>
                                <div>{props.projectNumber}</div>
                                <div><img src={IconEdit} alt="edit" title='edit'/></div>    
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center"><div data-toggle="collapse" data-target={'#projectDetails'+ props.id} ><img src={IconExpandMore} alt="expand" title='more info'/></div></Col>
                </Row>
                <Row className='collapse' id={'projectDetails'+ props.id}>
                    {props.children}
                </Row>
            </Container>
);

export default ProjectSummary;