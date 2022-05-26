import React, { Component } from "react";
import { connect } from "react-redux";
import { CurriculumActions } from "../../../../__actions";
import ListTab from "./ListTab";

import {
  Card,
  Col,
  CardTitle,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardText,
  CardBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AssignLecturerCourse extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);

    this.state = {
      activeTab: "1",
      dropdownOpen: false,
      dropDownValue: null,
      selectedCurriculum: "",
    };
  }

  async componentDidMount() {
    CurriculumActions.getListCurriculum(this.props.dispatch);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        dropDownValue: "",
        selectedCurriculum: "",
      });
    }
  }

  toggleDropDown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  changeValue(e) {
    console.log(e.currentTarget.textContent);
    let data = e.currentTarget.textContent;
    this.setState({ dropDownValue: data });
    // let id = e.currentTarget.getAttribute("nama_kurikulum");
    // this.setState({ dropDownValue: id });

    // CourseActions.getTimeTable(e.currentTarget.textContent,this.props.dispatch)
  }

  render() {
    let { data } = this.props.curriculum;
    // console.log(data);

    // this.setState({dropDownValue: 'Please select'})
    return (
      // <div>
      //   AssignLecturerCourse
      // </div>
      <>
        <Card>
          <CardBody>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggleDropDown}
              className = "mb-3"
            >
              <DropdownToggle caret className="font-xl font-weight-bold">
                {/* {this.state.dropDownValue} */}
                {/* asd */}

                {this.state.dropDownValue === null
                  ? "Select Curriculum"
                  : this.state.dropDownValue}
              </DropdownToggle>
              <DropdownMenu>
                {data.map((e, index) => {
                  return (
                    <DropdownItem
                      // id={e.id}
                      key={e.id}
                      onClick={this.changeValue}
                    >
                      <div>{e.nama_kurikulum}</div>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>
            <Row>
              <Col md={1}>
                <FormGroup>
                  <Label for="code">Code</Label>
                  <Input id="code" name="Code" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="courseName">Course Name</Label>
                  <Input id="courseName" name="courseName" />
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="year">Year</Label>
                  <Input id="year" name="year" type="number"/>
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="semester">Semester</Label>
                  <Input id="semester" name="semester" type="select" >
                  <option></option>
                  <option>1</option>
                    <option>2</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="section">Section</Label>
                  <Input id="section" name="section" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="day">Table</Label>
                  <Input id="day" name="day" type="select">
                    <option></option>
                    <option>(SUN) - Sunday</option>
                    <option>(MON) - Monday</option>
                    <option>(TUE) - Tuesday </option>
                    <option>(WED) - Wednesday</option>
                    <option>(THU) - Thursday</option>
                    <option>(FRI) - Friday</option>
                    <option>(SAT) - Saturday</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="table">Time</Label>
                  <Input id="table" name="table" type="select">
                  <option></option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="lecturer">Lecturer</Label>
                  <Input id="lecturer" name="lecturer" />
                </FormGroup>
              </Col>
            </Row>
            <Button
                block
                style={{
                  // width: "150px",
                  // height: "40px",
                  // marginTop: '10px',
                  // padding: '10px',
                  // float: "right",
                  color: "white",
                  background: "#55B04E",
                }}
                // onClick={this.onAddSectionClick}
              >
                Add Course
              </Button>
          </CardBody>
        </Card>
        <div>
          <ListTab></ListTab>
        </div>
      </>
    );
  }
}

export default connect((state) => {
  return state;
})(AssignLecturerCourse);
