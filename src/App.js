import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
//import { Grid, Row, Col } from 'react-bootstrap';
//import NavigationHeader from './components/NavigationHeader';
import BSnavbar from './components/BSnavbar';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="container">
            <BSnavbar />
                <div role="main" className="row">
                    <Route path='/' exact component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/rigs' component={Rigs} />
                    <Route path='/tools/shearcalc' component={ShearCalc} />
                    <Route path='/tools/accumcalc' component={AccumCalc} />
                </div>
        </div>
        </Router>
    );
  }
};

const Home = () => <h3>Home</h3>;
const Projects = () => <h3>Projects</h3>;
const Rigs = () => <h3>Rigs</h3>;
const ShearCalc = () => <h3>Shear Calculator</h3>;
const AccumCalc = () => <h3>Accumulator Calculator</h3>;

export default App;