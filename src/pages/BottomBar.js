import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class BottomBar extends Component {

  componentDidMount() {
    let div = $('<div></div>').addClass('botnav-icon')
    // a function to add style in the bottom of icon
    $('.bottom-bar li').on('click', function(){
      $(div).remove()
      $(this).append(div)
    })
  }

  render() {
    return (
      <nav className="bottom-bar navbar navbar-expand-lg navbar-light bg-light fixed-bottom justify-content-center">
        <ul className="nav list-unstyled d-flex">
          <li className="style-bottom link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon demo-icon icon-database-stack">&#xe802;</i>
            </NavLink>
          </li>
          <li className="link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon icon-users">&#xe803;</i>
            </NavLink>
          </li>
          <li className="link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon icon-user-add">&#xe800;</i>
            </NavLink>
          </li>
          <li className="link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon icon-file">&#xe805;</i>
            </NavLink>
          </li>
          <li className="link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon icon-chat-icon">&#xe801;</i>
            </NavLink>
          </li>
          <li className="link-bottom-bar">
            <NavLink to="/">
              <i className="demo-icon icon-setting-icon">&#xe804;</i>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

}

export default BottomBar;
