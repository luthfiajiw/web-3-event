import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <img className="logo-brand" src={require('../assets/Cloud9_logo.svg')} alt="cloud9"/>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a href="#">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-briefcase"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-copy"></i>
            </a>

          </li>
        </ul>
      </nav>
    );
  }

}

export default Sidebar;
