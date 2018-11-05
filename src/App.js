import React, { Component } from 'react';
import './App.css';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';
import Topbar from './pages/Topbar';
import Sidebar from './pages/Sidebar';
import BottomBar from './pages/BottomBar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar />

          {/* Page content */}
            <div className="container-fluid topbar">
              <Topbar />


              <Switch>
                <Route exact path="/" component={Event}/>
                <Route path="/create-event" component={CreateEvent}/>
              </Switch>

              <BottomBar />
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
