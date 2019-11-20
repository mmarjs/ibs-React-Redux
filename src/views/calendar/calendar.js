import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";
import { events } from "./event-data";
import "./calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null,
      modal: true
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  alertselectedEvent(event) {
    
    alert("\n" + event.title +  " \n\nStart Time: " +  event.start + " \nEnd Time: " + event.end);
   
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <div><SweetAlert
          input
          showCancel
          style={{}}
          title="Create New Event"
          placeHolder="Write Event Title"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          cancelBtnBsStyle="danger"
          confirmBtnBsStyle="info"
          >
        </SweetAlert>
          
        </div>
      )
    });
  }
  addNewEvent(e, slotInfo) {
   
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    
    this.setState({
      alert: null,
      events: newEvents
    });
    
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event, start, end, isSelected) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  render() {
    
    return (
        <div>
        <h5 className="mb-4">Calendar Page</h5>
        {this.state.alert}
          <Row>
            <Col xs={12} md={12} className="ml-auto mr-auto">
              <Card className="card-calendar">
                <CardBody>
                  <BigCalendar
                    selectable
                    events={this.state.events}
                    defaultView="month"
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date()}
                    onSelectEvent={event => this.alertselectedEvent(event)}
                    onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                    eventPropGetter={this.eventColors}
                    
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>   
    )
  }
}  
export default Calendar;