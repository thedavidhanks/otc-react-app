import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth, provider } from './firebase.js'
import './App.css';
import BSnavbar from './components/BSnavbar';

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
        <div className="container">
            <BSnavbar user={this.state.user} login={this.login} logout={this.logout}/>
                <div role="main" className="row">
                    <Route path='/' exact component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/rigs' component={Rigs} />
                    <Route 
                        path='/tools/shearcalc'
                        render={() => <ShearCalc user={this.state.user} />} 
                    />
                    <Route path='/tools/accumcalc' component={AccumCalc} />
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
        console.log('user is '+this.state.user);
    }
}
const Home = () => <h3>Home</h3>;
const Projects = () => <h3>Projects</h3>;
const Rigs = () => <h3>Rigs</h3>;
const AccumCalc = () => <h3>Accumulator Calculator</h3>;
class ShearCalc extends Component {
    render(){
        return(
                <div>
                {this.props.user ? <h3>Shear Calculator</h3> : <h3>Login required to view this page</h3>}
                </div>
        );
    }
};

export default App;