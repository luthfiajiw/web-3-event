import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      month: "",
      startDate: moment(),
      selectedDate: "",
      value: "",
      customTxt: "No file chosen yet",
      dateHour: 0,
      hour: "0am",
      dateMinute: 0,
      minute: "0m"
    }
    this.textInput = React.createRef();
  }

  //handle date change
  handleChange = (date) => {
    this.setState({
      startDate: date,
      selectedDate: this.refs.dateValue.input.value,
      value: date
    })
  }

  //handle input focus
  handleFocus = () => {
    this.refs.input1.focus()
  }
  handleFocus2 = () => {
    this.refs.input2.focus()
  }

  //input hour function
  addTime = (e) => {
    e.preventDefault();

    let hour = this.state.dateHour

    if (hour < 23) {
      hour = hour + 1
    }

    this.setState({
      dateHour: hour
    })

    if (hour <= 11) {
      this.setState({
        hour: hour + "am"
      })
    } else if(hour == 12){
      this.setState({
        hour: hour + "pm"
      })
    } else {
      hour = hour - 12
      this.setState({
        hour: hour + "pm"
      })
    }
  }

  subHour = (e) => {
    e.preventDefault();

    let hour = this.state.dateHour

    if (hour > 0) {
      hour = hour - 1
    }

    this.setState({
      dateHour: hour
    })

    if (hour <= 11) {
      this.setState({
        hour: hour + "am"
      })
    } else if(hour == 12){
      this.setState({
        hour: hour + "pm"
      })
    } else {
      hour = hour - 12
      this.setState({
        hour: hour + "pm"
      })
    }
  }

  //input minute function
  addMinute = (e) => {
    e.preventDefault();

    let minute = this.state.dateMinute

    if (minute < 55) {
      minute = minute + 5
    }

    this.setState({
      dateMinute: minute,
      minute: minute + "m"
    })
  }

  subMinute = (e) => {
    e.preventDefault();

    let minute = this.state.dateMinute

    if (minute > 0) {
      minute = minute - 5
    }

    this.setState({
      dateMinute: minute,
      minute: minute + "m"
    })
  }

  //Date function for calendar
  dateTime = () => {
    let date = new Date();

    let month = [
      "Jan", "Feb", "Mar", "Apr", "May",
      "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
        month: month[thisMonth]
      })
    }
  }

  updateDateEvent = () => {
    const dateValue = this.refs.dateValue;

    this.setState({
      selectedDate: dateValue.input.value
    })
  }


  componentDidMount() {
    this.dateTime();

    const btnUpload = this.refs.btnUpload;
    const realFile = this.refs.realFile;
    const customTxt = this.refs.customTxt;


    btnUpload.addEventListener("click", () => {
      realFile.click();
    });

    realFile.addEventListener("change", () => {
      if (realFile.value) {
        this.setState({
          customTxt: realFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
        })
      } else {
        this.setState({
          customTxt: "No file chosen yet.",
        })
      }
    })

    this.setState({
      selectedDate: this.refs.dateValue.input.value
    })
  }


  render() {
    console.log(this.state.selectedDate);
    return (
      <div className="main-panel">
        <div className="container-fluid  create-event">
          <div className="row row-panel">
            <div className="col-md-7 pl-3 pl-md-5 pl-lg-5 pr-3 pr-md-2 pr-lg-2 pt-4">
              <div className="mb-5 mt-4 d-flex align-items-center bd-highlight">
                <h2 className="mt-1">Create Event</h2> <Link to='/' id="btn-cancel-1" className="btn-cancel ml-auto">Cancel</Link>
              </div>
              <div className="card px-4 py-4 first-card">
                <div className="content">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                          <label>Title Event</label>
                          <div className="input-group">
                            <input ref="input1" type="text" className="form-control" placeholder="Title" aria-label="Title" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                              <button onClick={this.handleFocus} className="btn btn-outline-primary" type="button" id="button-addon2">+ Add description</button>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 mt-3">
                        <label>Day</label>
                          <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              ref="dateValue"
                              dateFormat="DD MMMM YYYY"
                              value={this.state.value}
                              className="container-datepicker"
                              placeholderText="Click to select a date"
                              withPortal
                          />
                      </div>

                      <div className="col-md-3 mt-3">
                        <label>Hour</label>
                        <div className="d-flex time-input justify-content-between">
                          <div className="input-time">{this.state.hour}</div>
                          <div className="d-flex flex-column">
                            <button className="btn-time" onClick={this.addTime}>+</button>
                            <button className="btn-time" onClick={this.subHour}>-</button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-2 mt-3">
                        <label>Minute</label>
                        <div className="d-flex time-input justify-content-between">
                          <div className="input-time">{this.state.minute}</div>
                          <div className="d-flex flex-column">
                            <button className="btn-time" onClick={this.addMinute}>+</button>
                            <button className="btn-time" onClick={this.subMinute}>-</button>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 mt-3">
                        <label>Duration</label>
                        <div className="input-group mb-2">
                          <select className="custom-select">
                            <option value="0">Choose...</option>
                            <option value="1">30m</option>
                            <option value="2">45m</option>
                            <option value="3">1h </option>
                            <option value="4">1h 30m</option>
                            <option value="5">2h 15m</option>
                            <option value="6">2h 30m</option>
                            <option value="7">2h 45m</option>
                            <option value="8">3h</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <label className="label-checkbox">
                          <span className="agreement-text">This event will take place on the {this.state.selectedDate} start from {this.state.dateHour}:{this.state.dateMinute}</span>
                          <input type="checkbox"/>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <label>Location</label>
                        <div className="input-group mb-4">
                          <input ref="input2" type="text" className="form-control" placeholder="Location" aria-label="Location" aria-describedby="button-addon2"/>
                          <div className="input-group-append">
                            <button onClick={this.handleFocus2} className="btn btn-outline-primary" type="button" id="button-addon2">+ Set meeting room</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row my-5">
                      <div className="col-md-12">
                        <label>Upload attachements</label>
                        <br/>
                        <div className="upload text-md-center text-lg-center d-flex flex-column flex-md-row flex-lg-row">
                          <div className="mr-md-auto mr-lg-auto mt-2 ">
                            <input type="file" id="real-file-input" ref="realFile"/>
                             <span className="custom-text-file" ref="customTxt" >{this.state.customTxt}</span>
                        </div>
                          <div className="mt-2">
                            <a href="" className="btn-notes">+ Add notes</a>
                            <a href="" className="btn-edit-remove">Edit</a>
                            <a href="" className="btn-edit-remove">Remove</a>
                          </div>
                          <div className="ml-md-auto ml-lg-auto mt-2">
                            <a id="btn-file-upload" className="btn btn-primary" ref="btnUpload">+ Add files</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="drop-files text-center">
                          <input type="file" hidden="hidden"/>
                          <img className="drag-drop-upload" src={require('../assets/upload-drag-cloud.svg')} alt=""/> <span className="">You can also drop your files here</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>

            <div className="col-md-3 pl-3 pl-md-2 pl-lg-2 pr-3 pr-md-5 pr-lg-5 pt-4">
              <div className="mb-3 mb-md-5 mb-lg-5 mt-4 d-flex align-items-center bd-highlight">
                <span className="h2 ml-auto"><Link to='/' id="btn-cancel-2" className="btn-cancel">Cancel</Link></span>
              </div>
              <div className="card px-4 py-4 second-card">
                <div className="content">


                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label>Add team members</label>
                      <div className="members d-flex justify-content-start">
                        <div className="bd-highlight member-image" id="member-image-1">LA</div>
                        <div className="bd-highlight member-image" id="member-image-2">AM</div>
                        <div className="bd-highlight member-image" id="member-image-3">ES</div>
                        <div id="member-invite">
                          <img className="icon" src={require('../assets/icons8-telegram-app.svg')}/> +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label>Add guest</label>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email invitation" aria-label="Event invitation" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary" type="button" id="button-addon2">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <label>Notify people on</label>
                      <div className="d-flex">
                        <label className="label-checkbox label-blue">
                          Slack
                          <input type="checkbox"/>
                          <span className="checkmark"></span>
                        </label>
                        <label className="label-checkbox label-blue ml-4">
                          HipChat
                          <input type="checkbox"/>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label>Set reminder</label>
                        <div className="input-group mb-2">
                          <select className="custom-select">
                            <option value="0">Choose...</option>
                            <option value="1">2 Hours before event</option>
                            <option value="2">1 Hours 30 Minutes before event</option>
                            <option value="3">45 Minutes before event</option>
                            <option value="4">30 Minutes before event</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="btn-primary">Create Event</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-2 side-panel1 text-center">
              <div className="row my-4 text-center text-md-left">
                <div className="col-md-12 d-md-flex pl-4 mt-4">
                  <div className="img">
                    <img src={require('../assets/upload-cloud.svg')} alt=""/>
                  </div>
                  <div className="ml-md-4 ml-lg-4 mt-2">
                    <h5>Uploader</h5>
                    <span className="date-calendar">{this.state.date} {this.state.month}</span>
                  </div>
                </div>
              </div>


              <div className="row my-5 text-left">
                <div className="col-md-12">
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="file-size my-2">10,9<span className="byte-ext">MB</span></div>
                  <div className="file-name my-1">User_interviews.pdf</div>
                  <button className="view-file-link">View file</button>
                </div>
              </div>
              <div className="row mt-3 text-left">
                <div className="col-md-12">
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar" role="progressbar" style={{width: '30%', borderRadius: '5px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="file-size my-2">7,48<span className="byte-ext">MB</span></div>
                  <img src={require('../assets/Web.jpg')} alt="" style={{width: '70%', height: '65%'}}/><br/>
                  <div className="file-name my-2">Web.jpg</div>
                  <button type="button" disabled className="view-file-link">View file</button>
                </div>
              </div>
              <div className="row my-5 text-left">
                <div className="col-md-12">
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="file-size my-2">6,00<span className="byte-ext">MB</span></div>
                  <img src={require('../assets/Web-1.jpg')} alt="" style={{width: '70%', height: '65%'}}/><br/>
                  <div className="file-name my-2">Web-1.jpg</div>
                  <button type="button" disabled className="view-file-link">View file</button>
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
