import React, { Component } from 'react';

class BottomBar extends Component {

  render() {
    return (
      <nav className="bottom-bar navbar navbar-expand-lg navbar-light bg-light fixed-bottom justify-content-center">
        <ul className="nav list-unstyled d-flex">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-briefcase"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-copy"></i>
            </a>

          </li>
        </ul>
      </nav>
    );
  }

}

export default BottomBar;
