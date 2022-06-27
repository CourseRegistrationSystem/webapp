import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import Dates from "../../../../__ifunc/dates";
import alertify from "alertifyjs";
import RegistrationScheduleLog from "./RegistrationScheduleLog";
import { RegisterScheduleActions } from "../../../../__actions";
import { connect } from "react-redux";
// import playAlert from "alert-sound-notify";

//======date picker ======
import "react-datepicker/dist/react-datepicker.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

//====== Alert ======
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Col,
  CardTitle,
  Form,
  Label,
  FormGroup,
  ListGroupItem,
  Row,
  Button,
  Collapse,
  ListGroupItemText,
  Input,
} from "reactstrap";

class RegistrationScheduleSession extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.onSubmitScheduleonClick = this.onSubmitScheduleOnClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);


    this.state = {
      startDate: "",
      endDate: "",
      session: "",
      semester: ""

    };
  }


  onChange = (dates) => {
    const [start, end] = dates;
    this.setState({
      startDate: start,
      endDate: end,
    });
  };

  onSubmitScheduleOnClick= (e) =>  {
    e.preventDefault();

    // console.log(this.state.forSubmitRegistration)
    let param = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      session: this.state.session,
      semester: this.state.semester
    }

    console.log(param)



    RegisterScheduleActions.createRegistrationSchedule(param).then(
      (result) => {
        console.log(result)
        RegisterScheduleActions.getListSchedule(this.props.dispatch);
        toast.success("Successfully registered", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      (error) => {

        toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        if (error === "Sensor Device already register!.") {
          this.setState({
            showMessageExistDevice: true,
            MessageExistDevice: "* The device is already registered.",
          });
        }else{
          this.setState({
            showMessageExistUser: false,
            MessageExistUser: "",
          });
        }
      }
    );
  }

  onInputChange(e) {
    const { name, value } = e.target;
    console.log(e.target)
    this.setState({ [name]: value });
    console.log([name], value);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Card>
          <CardHeader className="bg-dark border-bottom-0">
            <h2>Registration Session</h2>
          </CardHeader>
          <CardBody>
            <Form onSubmit={this.onSubmitScheduleOnClick}>
              <Row>
                <Col md={2}>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.onChange}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    selectsRange
                    inline
                  />
                </Col>
                <Col md={10}>
                  <Card>
                    <CardBody>
                    <FormGroup row>
                    <Label sm={1}>
                      Session
                    </Label>
                    <Col sm={4}>
                      <Input
                        id="session"
                        name="session"
                        placeholder="exp: 2019/2020"
                        type="text"
                        onChange={this.onInputChange}
                      required
                      />
                    </Col>
                    <Label sm={1}>
                      Semester
                    </Label>
                    <Col sm={4}>
                      <Input
                        id="semester"
                        name="semester"
                        placeholder="exp: 2"
                        type="text"
                        onChange={this.onInputChange}
                      required
                      />
                    </Col>
                  </FormGroup>

                    </CardBody>
                    </Card>
                    <Card>
                    <CardBody>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">Start Date</Label>
                        <Input
                          id="exampleCity"
                          name="city"
                          placeholder={Dates.format(
                            this.state.startDate,
                            Dates.FORMAT.DATE3
                          )}
                          disabled
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCity">Start Time</Label>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={(date) =>
                            this.setState({ startDate: date })
                          } //this.setState({date: date})
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                        {/* <Input>

                      </Input> */}
                      </FormGroup>
                    </Col>
                    {/* <Col md={2}> */}

                    {/* </Col> */}
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleState">End Date</Label>
                        <Input
                          id="exampleState"
                          name="state"
                          placeholder={Dates.format(
                            this.state.endDate,
                            Dates.FORMAT.DATE3
                          )}
                          disabled
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCity">Start Time</Label>
                        <DatePicker
                          selected={this.state.endDate}
                          onChange={(date) => this.setState({ endDate: date })} //this.setState({date: date})
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                        {/* <Input>

                      </Input> */}
                      </FormGroup>
                    </Col>
                    <Button
                      block
                      color="primary"
                      // style={{
                      //   color: "white",
                      //   background: "green",
                      // }}

                    >
                      submit
                    </Button>

                    {/* <Col md={3}> */}

                    {/* </Col> */}
                  </Row>
                    </CardBody>
                  </Card>

                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <RegistrationScheduleLog></RegistrationScheduleLog>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(RegistrationScheduleSession);
