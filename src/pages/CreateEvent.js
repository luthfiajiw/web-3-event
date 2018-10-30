import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateEvent extends Component {
  state = {
    date: "",
    month: ""
  }

  //Date function for calendar
  dateTime = () => {
    let date = new Date();

    let month = [
      "Jan", "Feb", "March", "April", "May",
      "June", "July", "Aug", "Sep", "Oct", "Nov", "Des"
    ]

    let thisDate = date.getDate();
    let  thisMonth = date.getMonth();

    if (thisDate.toString().length > 1 ) {
      this.setState({
        date: thisDate,
        month: month[thisMonth]
      })
    } else {
      this.setState({
        date: "0" + thisDate,
        month: month[this.Month]
      })
    }
  }

  componentDidMount() {
    this.dateTime();
  }


  render() {
    return (
      <div className="main-panel">
        <div className="container-fluid">
          <div className="row row-panel">
            <div className="col-md-10 pl-5 pr-5 pt-4">
              <div className="mb-5 d-flex mt-2 align-items-center bd-highlight">
                <span className="h2">Create Event</span> <Link to="/" className="btn-cancel ml-3 ml-md-auto ml-lg-auto">Cancel</Link>
              </div>

              <div className="card px-4 py-4">
                <div className="content">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                          <label>Title Event</label>
                          <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="button-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button" id="button-addon2">+ Add description</button>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-5">
                        <label>Day</label>
                        <div className="input-group mb-2">
                          <input type="text" className="form-control" placeholder="Date and Time" aria-label="Date and Time" aria-describeby="button-addon2"/>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="buton" id="button-addon2">Date</button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <label>Hour</label>
                        <div className="input-group mb-2">
                          <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <label>Minute</label>
                        <div className="input-group mb-2">
                          <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label>Duration</label>
                        <div className="input-group mb-2">
                          <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <label class="label-checkbox">
                          This event will take place on the 13th of November 2017 from 10:15am until 1:00pm
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                    </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <label>Location</label>
                        <div class="input-group mb-4">
                          <input type="text" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="button-addon2"/>
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">+ Set meeting room</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-md-12">
                        <label>Upload attachements</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                          </div>
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>



            <div className="col-md-2 side-panel text-center">
              <div className="row my-4 text-center text-md-left">
                <div className="col-md-12 d-md-flex pl-4 mt-4">
                  <img src="" alt=""/>
                  <div className="ml-md-4 ml-lg-4 mt-2 mt-md-0 mt-lg-0">
                    <h5>Uploader</h5>
                    <span className="date-calendar">{this.state.date} {this.state.month}</span>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CreateEvent;
