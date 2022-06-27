import React, { Component } from "react";
import { connect } from "react-redux";
import { CourseActions } from "../../../__actions";
import Select from 'react-select';
import RegistrationTable from "./RegistrationTable";
import DisplayAlreadyRegistered from "./DisplayAlreadyRegistered";
import { Auth } from "../../../api";


import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
} from "reactstrap";


class RegisterNewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      courseName: '',
    }
  }

  async componentDidMount(){
      await CourseActions.checkEligible(this.props.dispatch)
      await CourseActions.getCourseRegistrationList(this.props.dispatch)
  }

  render() {
    const user = Auth.getAuthUser();
    let {checkCourseList,checkEligible} = this.props.course
    console.log(checkCourseList,checkEligible,user)

    return (
      <>
        <Card className="shadow animated fadeIn rounded">
          <CardHeader className="bg-dark border-bottom-0">
            <h2>Personal Information</h2>
          </CardHeader>
          <CardBody>
            <Table borderless size="sm">
              <thead>
                <tr>
                  <th className="col-2">Name</th>
                  <td style={{ width: "10px" }}>:</td>
                  <td>{user.name.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}</td>
                </tr>
              </thead>

              <tbody className="mb-5">
                <tr width="10px">
                  <th scope="row">Student Profile</th>
                  <td>:</td>
                  <td>{user.description}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Session</th>
                  <td>:</td>
                  <td>{checkEligible.data?(checkEligible.data.session):("No schedule")}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Semester</th>
                  <td>:</td>
                  <td>{checkEligible.data?(checkEligible.data.semester):("No schedule")}</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <div>This is footer</div>
          </CardFooter>
        </Card>

      {/* {console.log(checkEligible)} */}
      {checkEligible.status === true?(
        <RegistrationTable checkCourseList = {checkCourseList} checkEligible = {checkEligible}></RegistrationTable>
      ):(
        <DisplayAlreadyRegistered checkEligible={checkEligible}></DisplayAlreadyRegistered>
        // checkEligible.status
      )}



      </>
    );
  }
}





export default connect((state) => {
  return state;
})(RegisterNewCourse);
