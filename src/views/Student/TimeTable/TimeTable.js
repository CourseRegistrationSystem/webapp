import React, { Component } from "react";
import { Auth, CONSTANTS } from "../../../api";
import { connect } from "react-redux";

import { CourseActions } from "../../../__actions";
// import Table from './components/TimeTable';

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Col,
  CardTitle,
  FormGroup,
  ListGroupItem,
  Row,
  Button,
  Collapse,
  ListGroupItemText,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import data from "@iconify/icons-mdi/cog";
import randomColor from "randomcolor";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    console.log(props);

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
    let color = randomColor();
    this.setState({
      bgColor: color,
    });
  };

  async componentDidMount() {
    CourseActions.getCourse(this.props.dispatch);
    CourseActions.getTimeTable(this.props.dispatch);
  }

  render() {
    let { selectedTimeTable, session } = this.props.course;
    console.log(selectedTimeTable);
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
    let hari = [1, 2, 3, 4, 5, 6, 7];

    return (
      <>
        <Card className="shadow animated fadeIn rounded">
        <CardHeader className="bg-dark border-bottom-0">
        <Row>
            <Col sm="6">
              <h2 style={{ textAlign: "left" }}>Time Table Information</h2>
            </Col>
            <Col sm="6">
            <div className="d-flex justify-content-end" >
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
                      <DropdownItem id={e} key={e} onClick={this.changeValue}>
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
                  <td>3</td>
                </tr>
                <tr>
                  <th className="col-2">Session</th>
                  <td style={{ width: "10px" }}>:</td>
                  <td>2020/2021</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Total subjects taken</th>
                  <td>:</td>
                  <td>4</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Total class hours</th>
                  <td>:</td>
                  <td>4 Hours</td>
                </tr>

              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Card className="shadow animated fadeIn rounded">
          <CardBody>


            {/* {dataTimeTable} */}
            <Table bordered size="sm" center>
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
                    <td align="center" colspan="8">
                      No Data
                    </td>
                  </tr>
                ) : (
                  time.map((masa, indexMasa) => {
                    return (
                      <tr width="10px">
                        <td className="" style={{ width: "150px" }}>
                          {masa}
                        </td>
                        {indexMasa === 6 ? (
                          <td className="bg-dark" colspan="7">
                            REHAT
                          </td>
                        ) : (
                          hari.map((hari, indexHari) => (
                            <td>
                              {selectedTimeTable.map((data, index) => {
                                if (
                                  data.masa === indexMasa + 1 &&
                                  data.hari === hari
                                ) {
                                  return (
                                    <>
                                      <div
                                        // onClick={this.clickHandler}
                                        className="shadow"
                                        style={{
                                          backgroundColor: data.color,
                                        }}
                                        // onMouseMove={this.MouseHover}
                                      >
                                        {data.course.kod_subjek}{this.state.bgColor}
                                        <div>{data.course.nama_subjek}</div>
                                      </div>

                                    </>
                                  );
                                }
                              })}
                            </td>
                          ))
                        )}
                      </tr>
                    );
                  })
                )}

                {/* <tr width="10px">
                  <td style={{height: '50px'}}> 1</td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td className="text-center">Sains Kemanusian</td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                </tr>
                <tr width="10px">
                <td style={{height: '50px'}}> 2</td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                </tr>
                <tr width="10px">
                <td> 3</td>
                <th colSpan={7} className="text-center bg-dark"> LUNCH </th>
                </tr>
                <tr width="10px">
                <td style={{height: '50px'}}> 4</td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                  <td ></td>
                </tr> */}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </>
    );
  }
}

class TimeTableRow extends Component {
  render() {
    let row = 10;
    return <div></div>;
  }
}

export default connect((state) => {
  return state;
})(TimeTable);
