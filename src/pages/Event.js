import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import './Calendar.css';
import {Link} from 'react-router-dom';

class Event extends Component {
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
        month: month[thisMonth]
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
          <div className="row text-center row-panel">
            <div className="col-md-10 order-2 order-md-1 pl-5 pr-5 pt-4">
              <div className="mb-5 d-flex mt-4 align-items-center bd-highlight">
                <span className="h2">Event</span> <Link to="/create-event" className="btn-create ml-3">+ Create new</Link>
              </div>

              <div className="row event-list my-4 text-center text-md-left">
                <div className="col-md-4 d-md-flex">
                    <h1 id="img" className="img pt-4 text-center align-items-center">IG</h1>
                  <div className="ml-md-2 mt-2">
                    <h6>Inspiration Gathering</h6>
                    <div className="date-events">
                      Monday Aug 20, 2018 <br/>
                      11:00 AM - 11:30  AM
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-2">
                  <p className="event-list-contents">Store Kongensgade 66, 1264 Kobenhavn, Denmark</p>
                </div>
                <div className="col-md-2 mt-2">
                  <p className="event-list-contents"><span className="num-attachment">10</span> Attachment</p>
                </div>
              </div>

              <div className="row event-list my-4 text-center text-md-left">
                <div className="col-md-4 d-md-flex">
                  <h1 id="img1" className="img pt-4 text-center align-items-center">S</h1>
                  <div className="ml-md-2 mt-2">
                    <h6>Sketching</h6>
                    <div className="date-events">
                      Tuesday Aug 21, 2018 <br/>
                      10:00 AM - 12:00 AM
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-2">
                  <p className="event-list-contents">Myrhorodos'kyi district, Poltavska</p>
                </div>
                <div className="col-md-2 mt-2">
                  <p className="event-list-contents"><span className="num-attachment">11</span> Attachment</p>
                </div>
              </div>

              <div className="row event-list my-4 text-center text-md-left">
                <div className="col-md-4 d-md-flex">
                  <h1 id="img2" className="img pt-4 text-center align-items-center">HW</h1>
                  <div className="ml-md-2 mt-2">
                    <h6>Hikoot app Wireframes</h6>
                    <div className="date-events">
                      Tuesday Aug 21, 2018 <br/>
                      13:00 AM - 15:00 AM
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-2">
                  <p className="event-list-contents">Universite Paris-Dauphine</p>
                </div>
                <div className="col-md-2 mt-2">
                  <p className="event-list-contents"><span className="num-attachment">1</span> Attachment</p>
                </div>
              </div>

              <div className="row event-list my-4 text-center text-md-left">
                <div className="col-md-4 d-md-flex">
                  <h1 id="img3" className="img pt-4 text-center align-items-center">WP</h1>
                  <div className="ml-md-2 mt-2">
                    <h6>Website for the Product</h6>
                    <div className="date-events">
                      Wednesday Aug 22, 2018 <br/>
                      13:00 AM - 15:00  AM
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-2">
                  <p className="event-list-contents">L'Universite Paris-Dauphine | Tunis</p>
                </div>
                <div className="col-md-2 mt-2">
                  <p className="event-list-contents"><span className="num-attachment">1</span> Attachment</p>
                </div>
              </div>
          </div>



            <div className="col-md-2 order-1 order-md-2 side-panel text-center">
              <div className="row my-4 text-center text-md-left">
                <div className="col-md-12 d-md-flex pl-4 mt-4">
                  <img src="" alt=""/>
                  <div className="ml-md-4 ml-lg-4 mt-2 mt-md-0 mt-lg-0">
                    <h5>Calendar</h5>
                    <span className="date-calendar">{this.state.date} {this.state.month}</span>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Event;
