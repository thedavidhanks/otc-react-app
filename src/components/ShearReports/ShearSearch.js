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
import ShearRow from'./ShearRow';
//icons from https://material.io/tools/icons/?style=baseline

class ShearSearch extends Component {
    constructor(props){
        super(props);
        console.log(this.props.auth);
        //UPDATE - rig data should be stored in the redux store, so that is can easily be updated by the add rig form.
        this.state = {
            shears: []
        };
    }
    componentDidMount(){
        axios.get('https://otc-scripts.herokuapp.com/shears/')
        //axios.get('http://localhost:8080/shears/')
            .then(shears => {
                console.log(shears);
                this.setState({
                    shears: shears.data
                });
            });
    }

    render(){
        const { shears } = this.state;
        const shearList = shears.length ? (
            shears.map( shear => {
                return (<ShearRow 
                            auth = {this.props.auth}
                            key ={shear.id}
                            id={shear.id} 
                            shear_pressure={shear.shear_pressure}
                            bop_oem={shear.name} 
                            bop_model={shear.BOP_model} 
                            pipe_grade={shear.grade} 
                            pipe_od={shear.od}
                            pipe_weight={shear.weight} />);
            })
            ):(
            <tr><td colSpan="7">Loading...</td></tr> );
    
        return (
            <Container  fluid={true}>    
                <Row>
                    <Col /><Col xs={12} md={6} className="text-center"><h4>Shears</h4></Col><Col />
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
                                <Col><b>BOP OEM</b></Col>
                                <Col><b>BOP model</b></Col>
                                <Col><b>OD</b></Col>
                                <Col><b>weight</b></Col>
                                <Col><b>grade</b></Col>
                                <Col><b>shear pressure</b></Col>
                                <Col></Col> 
                            </Row>
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            {shearList}
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
export default connect(mapStateToProps)(ShearSearch);
