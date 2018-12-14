import React, { Component } from 'react';
import {Row, Button, Col, Image, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import Logo from '../img/otclogo.png';
import '../App.css';

class NavigationHeader extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        
        this.state = {
          activeKey: 1
        };
    }
    handleSelect(selectedKey){
        this.setState({
            activeKey: selectedKey
        });
    }
    render(){
        return(
        <Row>
            <Col md={3} sm={2} >
                <Image src={Logo} responsive={true}/>
            </Col>
            <Col md={6} sm={8}>
                <Nav bsStyle="pills" className='navbar' activeKey={this.state.activeKey} onSelect={this.handleSelect} justified >
                    <NavItem eventKey={1} href="">
                      Projects
                    </NavItem>
                    <NavItem eventKey={2} title="Item" href="" disabled>
                      Rig Info
                    </NavItem>
                    <NavDropdown eventKey={3} title="Tools" id="nav-dropdown">
                        <MenuItem eventKey={3.1}>Shear Calculator</MenuItem>
                        <MenuItem eventKey={3.2}>Accumulator Calculator</MenuItem>
                    </NavDropdown>
                </Nav>
            </Col>
            <Col md={3} sm={2}><Button bsStyle="link">Login</Button></Col> 
        </Row>
        );
    }
};

export default NavigationHeader;

