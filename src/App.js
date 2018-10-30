import React, { Component } from 'react';
import './App.css';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <nav id="sidebar">
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
            <div className="container-fluid topbar">

              <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top">
                <form className="form-inline my-2 my-lg-0">
                  <span className="fa fa-search ml-md-4 ml-lg-4"></span> <input className="search ml-2" type="search" placeholder="Find a user, team, meeting..." aria-label="Search"/>
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

              <Switch>
                <Route exact path="/" component={Event}/>
                <Route path="/create-event" component={CreateEvent}/>
              </Switch>

            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
