import React, { Component } from "react";
import { connect } from "react-redux";
import { CourseActions } from "../../../__actions";
import Select from 'react-select';
import RegistrationTable from "./RegistrationTable";

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



class RegisterNewCourse extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    // this.checkSectionAvailability = this.checkSectionAvailability.bind(this);
    // this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      code: '',
      courseName: '',
    }
  }

  componentDidMount(){
    CourseActions.getCourseRegistrationList(this.props.dispatch)
  }

  render() {

    let {checkCourseList} = this.props.course
    let option = []
    var data = checkCourseList.map(data=>{
      option.push({value: data, nama_subjek: data.nama_subjek, label: (data.kod_subjek +" - "+ data.nama_subjek)})
    });

    
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
                  <td>Nur Atiqah Binti Morshidi</td>
                </tr>
              </thead>

              <tbody className="mb-5">
                <tr width="10px">
                  <th scope="row">Faculty</th>
                  <td>:</td>
                  <td>Science</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Field</th>
                  <td>:</td>
                  <td>Data Analytic</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Current Year</th>
                  <td>:</td>
                  <td>2021/2022</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Section</th>
                  <td>:</td>
                  <td>24</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Session</th>
                  <td>:</td>
                  <td>2021/2022</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Semester</th>
                  <td>:</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <div>This is footer</div>
          </CardFooter>
        </Card>

      <RegistrationTable checkCourseList = {checkCourseList}></RegistrationTable>

      
      </>
    );
  }
}





export default connect((state) => {
  return state;
})(RegisterNewCourse);
