import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logotoc.png'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/authActions'

class BSnavbar extends Component {
    render() {
      const loginLogoutLinks = this.props.auth.uid ? 
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.signOut}>Logout</button>  :
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.signIn}>Login</button>

      return (
              <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top row">
                  <a className="navbar-brand" href="/"><img src={Logo} alt="otc-logo"/></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/projects" activeClassName="active">Projects <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/rigs" activeClassName="active">Rigs</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                          <NavLink className="nav-link dropdown-toggle" to="/tools" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" rel="noreferrer" activeClassName="active">Tools</NavLink>
                          <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <NavLink className="dropdown-item" to="/tools/gascalc" activeClassName="active">Gas Calculator</NavLink>                    
                            <NavLink className="dropdown-item" to="/tools/shearcalc" activeClassName="active">Shear Calculator</NavLink>
                            <NavLink className="dropdown-item" to="/tools/accumcalc" activeClassName="active">Accumulator Calculator</NavLink>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <NavLink className="nav-link dropdown-toggle" to="/sheartests" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" rel="noreferrer" activeClassName="active">Shear Tests</NavLink>
                          <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <NavLink className="dropdown-item" to="/sheartests/addshear" activeClassName="active">Add Shear</NavLink>                    
                            <NavLink className="dropdown-item" to="/sheartests/add" activeClassName="active">Add Report</NavLink>                    
                            <NavLink className="dropdown-item" to="/sheartests/search" activeClassName="active">Search</NavLink>
                          </div>
                        </li>
                      </ul>
                      <div className=" my-2 my-lg-0">
                      { loginLogoutLinks }
                      </div>
                  </div>
              </div>
      );
    }
};

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BSnavbar);
