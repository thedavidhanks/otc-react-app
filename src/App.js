import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
//import NavigationHeader from './components/NavigationHeader';
import BSnavbar from './components/BSnavbar';

class App extends Component {
  render() {
    return (
        <Grid fluid={true}>
            <BSnavbar />
            <Router>
                <Row>
                    <Route path='/' exact component={Home} />
                    <Route path='/projects/' component={Projects} />
                    <Route path='/rigs/' component={Rigs} />
                    <Route path='/tools/shearcalc' component={ShearCalc} />
                    <Route path='/tools/accumcalc' component={AccumCalc} />
                </Row>
            </Router>
        </Grid>
    );
  }
};

const Home = () => {
    return <div><Col md={3} smHidden xsHidden></Col><Col md={6} sm={12}>Home</Col><Col md={3} smHidden xsHidden></Col></div>;
};

const Projects = () => {
 return <div><Col md={3} smHidden xsHidden>Menu</Col><Col md={6} sm={12}>Projects</Col><Col md={3} smHidden xsHidden></Col></div>;
};

const Rigs = () => {
  return <div><Col md={3} smHidden xsHidden>rig options</Col><Col md={6} sm={12}>Rigs</Col><Col md={3} smHidden xsHidden></Col></div>;
};

const ShearCalc = () => {
 return <div><Col md={3} smHidden xsHidden>shear options</Col><Col md={6} sm={12}>Shear Calculator</Col><Col md={3} smHidden xsHidden></Col></div>;
};

const AccumCalc = () => {
 return <div><Col md={3} smHidden xsHidden>accum options</Col><Col md={6} sm={12}>Accum Calculator</Col><Col md={3} smHidden xsHidden></Col></div>;
};
export default App;
