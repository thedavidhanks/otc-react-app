import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from './firebase.js'
import { connect } from 'react-redux'

import './App.css'
import BSnavbar from './components/BSnavbar'
import Rigs from './components/Rigs/Rigs.js'
import Projects from './components/Projects.js'
import MockProjects from './components/MockProjects.js'
import ShearCalculator from './components/ShearCalculator/ShearCalculator.js'
import Tools from './components/Tools.js'
import GasCalculatorMock from './components/GasCalculatorMock.js'
import GasCalculator from './components/GasCalculator.js'
import AccumCalc from './components/AccumCalc.js'
import AddShearForm from './components/ShearReports/AddShearForm.js'

class App extends Component {   
    render(){
        return (
            <Router>
            <div>
                <BSnavbar/>
                <div className="main">
                        <Route path='/' exact component={Home} />
                        <Route
                            path='/projects'
                            render={()=><Projects auth ={this.props.auth} />}
                        />
                        <Route path='/mockprojects' component={MockProjects} />
                        <Route path='/rigs' component={Rigs} />
                        <Route
                            exact path ='/tools'
                            render={()=><Tools auth={this.props.auth} />}
                        />
                        <Route 
                            path='/tools/shearcalc'
                            render={()=><ShearCalculatorPage auth={this.props.auth} />}
                        />
                        <Route path='/tools/accumcalc' component={AccumCalc} />
                        <Route path='/tools/gascalc' component={GasCalculatorMock} />
                        <Route path='/tools/gascalctest' component={GasCalculator} />
                        <Route
                            path='/sheartests/add'
                            render={ () => <AddShearForm auth={this.props.auth} />}
                        />
                        <Route
                            path='/sheartests/search'
                            render={ () => <div>Shear Shear Tests</div>}
                        />
                </div>
            </div>
            </Router>
        );
    }
    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            }
        });
    }
};
const Home = () => <h3>Home</h3>;
const ShearCalculatorPage = (props) => (
    <div>
        {props.auth.uid ? <ShearCalculator  auth={props.auth} /> : <h4>Login required to view this page</h4>}
    </div>
);

 const mapStateToProps = (state) => {
    return {
        ...state.auth,
        auth: state.firebase.auth
    };
 };
export default connect(mapStateToProps)(App);