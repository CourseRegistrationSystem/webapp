import React, { Component } from "react";
import {  CourseActions } from '../../../__actions'
import { connect } from 'react-redux';
import CourseOffered from './Tabs/CourseOffered'
import RemainingCourse from './Tabs/RemainingCourse'
import TransferCredit from './Tabs/TransferCredit'

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
} from "reactstrap";

class CourseInformation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  async componentDidMount() {
    await CourseActions.getCourse(this.props.dispatch)
    await CourseActions.getCuriculum(this.props.dispatch)
    await CourseActions.checkEligible(this.props.dispatch)
  }
  render() {
    let {data,curriculumList,checkEligible} = this.props.course
    // console.log(data)
    return (
      <>
        <div>
          <Nav fill tabs className=" animated fadeIn rounded">
            <NavItem>
              <NavLink
                className={this.state.activeTab === "1" ? "active" : ""}
                onClick={() => this.toggle("1")}
              >
                Course Offered
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => this.toggle("2")}
              >
                Remaining Course
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => this.toggle("3")}
              >
                Transfer Credit
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => this.toggle("4")}
              >
                More Tabs
              </NavLink>
            </NavItem> */}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
            <Row>
                <Col sm="12" className="mb-3">
                  <h3>Course Offered List</h3>
                </Col>
              </Row>
              <Card>
                {/* {checkEligible.message} */}
              {(checkEligible.type !== 4)?(<CourseOffered data={data} curriculumList={curriculumList}></CourseOffered>):( checkEligible.message)}

              </Card>

            {/* {checkEligible.status === true?(
        <CourseOffered checkCourseList = {checkCourseList} checkEligible = {checkEligible}></CourseOffered>
      ):(
        ""
        // checkEligible.status
      )} */}



            </TabPane>

            <TabPane tabId="2">
              <RemainingCourse></RemainingCourse>
            </TabPane>
            <TabPane tabId="3">
              <TransferCredit data={data}></TransferCredit>
            </TabPane>
            <TabPane tabId="4">
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
      // <div>
      //   Course Information
      // </div>
    );
  }
}

export default connect(state => { return state })(CourseInformation) ;
