import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import IconSort from '../../img/icons/baseline-sort-24px.svg';
import IconFilter from '../../img/icons/baseline-filter_list-24px.svg';
import IconAdd from '../../img/icons/baseline-add-24px.svg';
import ModalAddRig from './ModalAddRig.js';
import RigRow from'./RigRow';
//icons from https://material.io/tools/icons/?style=baseline

class Rigs extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.auth);
        //UPDATE - rig data should be stored in the redux store, so that is can easily be updated by the add rig form.
        this.state = {
            rigs: []
        };
    }
    componentDidMount(){
        axios.get('https://otc-scripts.herokuapp.com/rigs/')
            .then(rigs => {
                //console.log(rigs);
                this.setState({
                    rigs: rigs.data
                });
            });
    }

    render(){
        const { rigs } = this.state;
        const rigList = rigs.length ? (
            rigs.map( rig => {
                return (<RigRow 
                            key={rig.id} 
                            operator={rig.operator}
                            owner={rig.owner} 
                            name={rig.name} 
                            loc='GOM' 
                            type={rig.type} />);
            })
            ):(
            <tr><td colSpan="6">Loading...</td></tr> );
    
        return (
            <Container  fluid={true}>    
            
                <ModalAddRig auth={this.props.auth}/>
                <Row>
                    <Col /><Col xs={12} md={6} className="text-center"><h4>Rigs</h4></Col><Col />
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
                    <Table striped bordered hover>
                        <thead><tr>
                        <th scope='col'>Owner</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>type</th>
                        <th scope='col'>last location</th>
                        <th scope='col'>current operator</th>
                        <th scope='col'>options</th>
                        </tr></thead>
                        <tbody>
                            {rigList}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
};

export default Rigs;
