import React, { Component } from 'react';

class Topbar extends Component {

  render() {
    return (
      <nav className="top-navbar navbar navbar-expand-lg bg-light navbar-light sticky-top">
        <img id="logo-brand" src={require('../assets/logo-web.svg')} alt="cloud9"/>
        <form className="form-inline my-2 my-lg-0">
          <img src={require('../assets/icon-search.svg')} className="fa fa-search ml-md-4 ml-lg-4 mr-2"/> <input className="search" type="search" placeholder="Find somethings..." aria-label="Search"/>
        </form>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link btn-invite text-center">
                <img className="icon" src={require('../assets/icons8-telegram-app.svg')}/>Invite
              </a>
            </li>
            <li className="nav-item text-center">
                <img className="img-fluid avatar" src={require('../user.jpg')}/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Topbar;
