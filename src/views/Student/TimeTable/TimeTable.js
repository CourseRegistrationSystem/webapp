import React, { Component } from "react";
import { Auth, CONSTANTS } from "../../../api";
import { connect } from "react-redux";

import { CourseActions } from "../../../__actions";
// import Table from './components/TimeTable';

import {
  Card,
  CardBody,
  CardHeader,
  Table,
  Col,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    // console.log(props);

    this.state = {
      checked: 1,
      dropdownOpen: false,
      dropDownValue: "",
      selectedSession: this.props.currentSession,
      bgColor: "",
      display: false,
    };
  }

  changeValue(e) {
    const { dispatch } = this.props;
    // console.log(dispatch)

    this.setState({ dropDownValue: e.currentTarget.textContent });
    let id = e.currentTarget.getAttribute("id");
    dispatch({
      type: CONSTANTS.COURSE.GET_SELECTED_TIMETABLE_LIST,
      result: id,
    });
    this.setState({ selectedSession: id });

    // CourseActions.getTimeTable(e.currentTarget.textContent,this.props.dispatch)
  }
  toggle(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  MouseHover = (e) => {
    // call Function Inside Mouse Hover  Event
    // // let color = randomColor();
    // this.setState({
    //   bgColor: color,
    // });
  };

  async componentDidMount() {
    CourseActions.getCourse(this.props.dispatch);
    CourseActions.getTimeTable(this.props.dispatch);
    CourseActions.getCuriculum(this.props.dispatch);
  }

  render() {
    let { selectedSession, selectedTimeTable, session } = this.props.course;
    // console.log(selectedSession,session);
    let time = [
      "7:00am - 7:59am",
      "8:00am - 8:59am",
      "9:00am - 9:59am",
      "10:00am - 10:59am",
      "11:00am - 11:59am",
      "12:00pm - 12:59pm",
      "01:00pm - 01:59pm",
      "02:00pm - 02:59pm",
      "03:00pm - 03:59pm",
      "04:00pm - 04:59pm",
      "05:00pm - 05:59pm",
      "06:00pm - 06:59pm",
    ];
    // let time = [1,2,3,4,5,6,7,8,9,10]
    let day = [1, 2, 3, 4, 5, 6, 7];

    return (
      <>
        <Card className="shadow animated fadeIn rounded">
          <CardHeader className="bg-dark border-bottom-0">
            <Row>
              <Col sm="6">
                <h2 style={{ textAlign: "left" }}>Time Table Information</h2>
              </Col>
              <Col sm="6">
                <div className="d-flex justify-content-end">
                  {/* <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}> */}
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret className="font-xl font-weight-bold">
                      {/* {this.state.dropDownValue} */}
                      {this.state.dropDownValue === ""
                        ? session[0]
                        : this.state.dropDownValue}
                    </DropdownToggle>
                    <DropdownMenu end>
                      {session.map((e) => {
                        return (
                          <DropdownItem
                            id={e}
                            key={e}
                            onClick={this.changeValue}
                          >
                            {e}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Table borderless size="sm">
              <tbody className="mb-5">
                <tr width="10px">
                  <th scope="row">Semester</th>
                  <td>:</td>
                  <td>{this.state.dropDownValue === ""
                        ? session[0]
                        : this.state.dropDownValue}</td>
                </tr>
                <tr>
                  <th className="col-2">Session</th>
                  <td style={{ width: "10px" }}>:</td>
                  <td>{this.state.dropDownValue === ""
                        ? session[0]
                        : this.state.dropDownValue}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Total subjects taken</th>
                  <td>:</td>
                  <td>{selectedSession.length}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Total class hours</th>
                  <td>:</td>
                  <td>{selectedTimeTable.length} Hours</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Card className="shadow animated fadeIn rounded">
          <CardBody>
            {/* {dataTimeTable} */}
            <Table bordered size="sm">
              <thead>
                <tr
                  className="text-center bg-gray-200 shadow"
                  style={{ height: "50px" }}
                >
                  <th>Time/Day</th>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>

              <tbody className="mb-5 text-center">
                {selectedTimeTable.length === 0 ? (
                  <tr>
                    <td align="center" colSpan="8">
                      No Data
                    </td>
                  </tr>
                ) : 
                
                (
                  time.map((time, indexTime) => {
                    return (
                      <tr width="10px" key={indexTime}>
                        <td className="" style={{ width: "150px" }}>
                          {time}
                        </td>
                        {indexTime === 6 ? (
                          <td className="bg-dark" colSpan="7">
                            REHAT
                          </td>
                        ) : (
                          day.map((day, indexDay) => {
                            return (
                              <td key={indexDay}>
                                {selectedTimeTable.map((data, index) => {
                                  
                                  if (
                                    data.masa === indexTime + 1 &&
                                    data.hari === day
                                  ) {
                                    return (
                                      // <>
                                        <div
                                          key={index}
                                          className="shadow"
                                          style={{
                                            backgroundColor: data.color,
                                          }}
                                        >
                                          {data.course.kod_subjek} (
                                          {data.seksyen})
                                          <div>{data.course.nama_subjek}</div>
                                          {data.course.lecturer.map((data, index) => (
                                            <div
                                              key={index}
                                              className="small text-muted"
                                            >
                                              {data.nama}
                                            </div>
                                          ))}
                                        </div>
                                      // </>
                                    );
                                  }
                                  else{
                                    return('')
                                  }
                                })
                                }
                              </td>
                            );
                          })
                        )}
                      </tr>
                    );
                  })
                )
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Card>
          <CardBody>

          <Table bordered size="sm">
              <thead>
                <tr
                  className="text-center bg-gray-200 shadow"
                  style={{ height: "50px" }}
                >
                  <th>No</th>
                  <th>Subject Code</th>
                  <th>Section</th>
                  <th>Subject Name</th>
                  
                  <th>Lecturer Name</th>
                
                </tr>
              </thead>

              <tbody className="mb-5 text-center">
                {selectedSession.length === 0 ? (
                  <tr>
                    <td align="center" colSpan="4">
                      No Data
                    </td>
                  </tr>
                ) : 
                (
                  selectedSession.map((data,index) => 
                    <CoursesRow
                      key={index}
                      data = {data}
                      index = {index}
                    >

                    </CoursesRow>
                  )
                  
                )}
                </tbody>
                </Table>

          </CardBody>
        </Card>
      </>
    );
  }
}

class CoursesRow extends Component {
  
  render() {
    let data = this.props.data
    let numbers = this.props.index
    let number = numbers + 1 
    // console.log(data)
    let row = 10;
    return (
      <tr>
      <td align="center">
        {number}
      </td>
      <td align="center">
        {data.kod_subjek}
      </td>
      <td align="center">
      {data.seksyen}
      </td>
      <td align="left">
      {data.nama_subjek}
      </td>
      
      <td align="left">
      {data.lecturer.map((data,index) => {
        return(
          <div key={index}>
            <div>{data.nama}</div>
          </div>
        )
      })}
      </td>
    </tr>  
    )
  }
}

export default connect((state) => {
  return state;
})(TimeTable);
