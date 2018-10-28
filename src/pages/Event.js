import React, { Component } from 'react';

class Event extends Component {

  render() {
    return (
      <div className="main-panel">
        <div className="container-fluid">
          <div className="row row-panel">
            <div className="col-md-10 order-2 order-md-1 pl-5 pr-5 pt-4">
              <div className="mb-5 d-flex">
                <span className="h3">Event</span> <a href="#" className="btn-create ml-3">Create new +</a>
              </div>

                <div className="row event-list my-4">
                  <div className="col-md-5">
                    col 1
                  </div>
                  <div className="col-md-5">
                    col 2
                  </div>
                  <div className="col-md-2">
                    col 3
                  </div>
                </div>

                <div className="row event-list my-4">
                  <div className="col-md-5">
                    col 1
                  </div>
                  <div className="col-md-5">
                    col 2
                  </div>
                  <div className="col-md-2">
                    col 3
                  </div>
                </div>

                <div className="row event-list my-4">
                  <div className="col-md-5">
                    col 1
                  </div>
                  <div className="col-md-5">
                    col 2
                  </div>
                  <div className="col-md-2">
                    col 3
                  </div>
                </div>

                <div className="row event-list my-4">
                  <div className="col-md-5">
                    col 1
                  </div>
                  <div className="col-md-5">
                    col 2
                  </div>
                  <div className="col-md-2">
                    col 3
                  </div>
                </div>

            </div>
            <div className="col-md-2 order-1 order-md-2 fixed side-panel">
              <h3>Calendar</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Event;
