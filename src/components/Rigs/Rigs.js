import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { connect } from 'react-redux';

import IconFilter from '../../img/icons/baseline-filter_list-24px.svg';
import IconAdd from '../../img/icons/baseline-add-24px.svg';
import ModalAddRig from './ModalAddRig.js';
import RigRow from'./RigRow';
//icons from https://material.io/tools/icons/?style=baseline

class Rigs extends Component {
    constructor(props){
        super(props);
        console.log(this.props.auth);
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
                            auth = {this.props.auth}
                            key ={rig.id}
                            id={rig.id} 
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
                        <AddRigButton auth={this.props.auth} />
                    </ButtonToolbar>
                    </Col>
                </Row>
                <Row className='collapse' id="filterRigBox"><Col md={{span: 10, offset: 1}} sm={12}><p>filter options</p></Col></Row>
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <td>
                            <Row>
                                <Col>Owner</Col>
                                <Col>Name</Col>
                                <Col>type</Col>
                                <Col>Location</Col>
                                <Col>Operator</Col>
                                <Col>Options</Col>
                            </Row>
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            {rigList}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
};

const AddRigButton = (props) => {
    const authorizedUser = (props.auth.uid && props.auth.emailVerified);
    return (
        <Button className="mx-1" data-toggle="modal" data-target=".modal-add-rig" disabled={!authorizedUser}><img src={IconAdd} alt="add" title='add'/></Button>
    );
            
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
 };
export default connect(mapStateToProps)(Rigs);
