import React, { Component } from 'react';
import './App.css';
import Event from './pages/Event.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar" className="fixed">
          <div className="sidebar-header">
            <img className="logo-brand" src={require('./assets/Cloud9_logo.svg')} alt="cloud9"/>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a href="#">
                <i class="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-briefcase"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-copy"></i>
              </a>

            </li>
          </ul>
        </nav>

        {/* Page content */}
          <div className="container-fluid main-nav">

            <nav className="navbar navbar-expand-lg bg-light navbar-light">
              <form className="form-inline my-2 my-lg-0">
                <span className="fa fa-search"></span> <input className="search mr-sm-2" type="search" placeholder="Find a user, team, meeting..." aria-label="Search"/>
              </form>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link link-invite text-center">
                      <img className="icon" src={require('./assets/icons8-telegram-app.svg')}/>Invite
                    </a>
                  </li>
                  <li className="nav-item text-center">
                      <img className="img-fluid avatar" src={require('./user.jpg')}/>
                  </li>
                </ul>
              </div>
            </nav>

            <Event/>

          </div>
      </div>
    );
  }
}

export default App;
