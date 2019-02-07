import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth, provider } from './firebase.js'
import './App.css';
import BSnavbar from './components/BSnavbar';
import Rigs from './components/Rigs.js';
import Projects from './components/Projects.js';
import ShearCalculator from './components/ShearCalculator.js';
import Tools from './components/Tools.js';
import GasCalculatorMock from './components/GasCalculatorMock.js';
import GasCalculator from './components/GasCalculator.js';
import AccumCalc from './components/AccumCalc.js';

class App extends Component {
    constructor(){
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            username: '',
            user: null
        };
    }
    logout(){
        console.log('logout'+this.state.user);

        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
             });
    }
    login(){
        console.log('login',this.state.user);
        auth.signInWithPopup(provider)
                .then((result) =>{
                    const user = result.user;
                    this.setState({
                        user
                    });
        });
    }  
    render(){
      return (
          <Router>
          <div>
              <BSnavbar user={this.state.user} login={this.login} logout={this.logout}/>
              <div className="main">
                    <Route path='/' exact component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/rigs' component={Rigs} />
                    <Route
                        exact path ='/tools'
                        render={()=><Tools user={this.state.user} />}
                    />
                    <Route 
                        path='/tools/shearcalc'
                        render={()=><ShearCalculatorPage user={this.state.user} />}
                    />
                    <Route path='/tools/accumcalc' component={AccumCalc} />
                    <Route path='/tools/gascalc' component={GasCalculatorMock} />
                    <Route path='/tools/gascalctest' component={GasCalculator} />
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
}
const Home = () => <h3>Home</h3>;
class ShearCalculatorPage extends Component{
    render(){
        return(
        <div>
            {this.props.user ? <ShearCalculator  user={this.props.user} /> : <h4>Login required to view this page</h4>}
        </div>
        );
    };
 };
export default App;