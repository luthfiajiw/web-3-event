import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Sidebar extends Component {

  componentDidMount() {
    //a function to add style in the left side of icon
    $('#sidebar li').on('click', function(){
      $('li').removeClass('sidenav-icon');
      $(this).addClass('sidenav-icon');
    })
  }

  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <img className="logo-brand" src={require('../assets/logo-web.svg')} alt="cloud9"/>
        </div>

        <ul className="list-unstyled components">
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-database-stack">&#xe802;</i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-users">&#xe803;</i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-user-add">&#xe800;</i>
            </NavLink>

          </li>
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-file">&#xe805;</i>
            </NavLink>

          </li>
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-chat-icon">&#xe801;</i>
            </NavLink>

          </li>
          <li>
            <NavLink to="/">
              <i className="demo-icon icon-setting-icon">&#xe804;</i>
            </NavLink>

          </li>
        </ul>
      </nav>
    );
  }

}

export default Sidebar;
