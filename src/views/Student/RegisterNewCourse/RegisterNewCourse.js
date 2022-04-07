import React, { Component } from "react";

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
} from "reactstrap";

class RegisterNewCourse extends Component {
  render() {
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

      <Card className="shadow animated fadeIn rounded">
        {/* <CardBody> */}
            <Table bordered size="sm" center >
              <thead>
                <tr>
                  <th ></th>
                  <th >Sunday</th>
                  <th >Monday</th>
                  <th >Tuesday</th>
                  <th >Wednesday</th>
                  <th >Thursday</th>
                  <th >Friday</th>
                  <th >Saturday</th>
                </tr>
              </thead>

              <tbody className="mb-5">
                <tr width="10px">
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
                </tr>

              </tbody>
            </Table>
          {/* </CardBody> */}
          <CardFooter>
            <div>This is footer</div>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default RegisterNewCourse;
