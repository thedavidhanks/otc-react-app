import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logotoc.png';

class BSnavbar extends Component {
    render() {
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
                      </ul>
                      <div className=" my-2 my-lg-0">
                      {this.props.user ? <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.logout}>Logout</button> : <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.login}>Login</button>}
                      </div>
                  </div>
              </div>
      );
    }
};

export default BSnavbar;
