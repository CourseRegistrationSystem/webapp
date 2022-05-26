import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { CurriculumActions } from "../../../../__actions";

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
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class AssignSectionCourse extends Component {
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
    console.log(data);

    // this.setState({dropDownValue: 'Please select'})
    return (
      // <div>
      //   AssignLecturerCourse
      // </div>
      <>
        <div>
          <Nav fill tabs className=" animated fadeIn rounded">
            <NavItem>
              <NavLink
                className={this.state.activeTab === "1" ? "active" : ""}
                onClick={() => this.toggle("1")}
              >
                Year 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => this.toggle("2")}
              >
                Year 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => this.toggle("3")}
              >
                Year 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => this.toggle("4")}
              >
                Year 4
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.activeTab === "5" ? "active" : ""}
                onClick={() => this.toggle("5")}
              >
                Others
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              {/* <CourseOffered data={data} curriculumList={curriculumList}>
             </CourseOffered> */}

<Table className="table table-hover table-outline mb-0 d-none d-sm-table" hover>
  <thead className="thead-light">
    <tr>
      <th>
        No
      </th>
      <th>
        Code
      </th>
      <th>
        Course Name
      </th>
      <th>
        Section
      </th>
      <th>
        Day/time Venue
      </th>
      <th>
        Lecturer
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
      SECJ1013
      </td>
      <td>
      Programming Technique I
      </td>
      <td>
      01
      </td>
      <td>
      SUN 02
      </td>
      <td>
      Dr. Jamilah binti Mahmood (P)
      </td>
    </tr>
   
  </tbody>
</Table>
            </TabPane>

            <TabPane tabId="2">
              {/* <RemainingCourse></RemainingCourse> */}
            </TabPane>
            <TabPane tabId="3">
              {/* <TransferCredit data={data}></TransferCredit> */}
            </TabPane>
            <TabPane tabId="4">
              {/* <TransferCredit data={data}></TransferCredit> */}
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </>
    );
  }
}

export default connect((state) => {
  return state;
})(AssignSectionCourse);
