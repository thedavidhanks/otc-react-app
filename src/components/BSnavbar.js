import React, { Component } from 'react';
import {Row, Col, Image, Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import Logo from '../img/logotoc.png';

class BSnavbar extends Component {
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

  render() {
    return (
        <Row>
            <Col md={12} className='navbar-wrapper'>
              <Navbar inverse collapseOnSelect fluid className='navbar'>
                <Navbar.Header>
                    <a href="/"><Image src={Logo}/></a>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav activeKey={this.state.activeKey} onSelect={this.handleSelect} className='nav-menu'>
                    <NavItem eventKey={1} href="/projects">
                      Projects
                    </NavItem>
                    <NavItem eventKey={2} href="/rigs">
                      Rigs
                    </NavItem>
                    <NavDropdown eventKey={3} title="Tools" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1} href='/tools/shearcalc'>Shear Calculator</MenuItem>
                      <MenuItem eventKey={3.2} href='/tools/accumcalc'>Accumulator Calculator</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavItem eventKey={2}>
                      Login
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
        </Row>
    );
  }
};

export default BSnavbar;
