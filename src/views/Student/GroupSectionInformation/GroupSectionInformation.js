import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Badge,
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

class GroupSectionInformation extends Component {
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
        </Card>

        <Card className="shadow animated fadeIn rounded">
          <CardBody>
            <h3 className='p-2'>Section Members</h3>
          <Card >
                <Table hover responsive size="md">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td style={{color:'DodgerBlue'}}>AMIRUL FAIZ BIN AHMAD PUAD</td>
                      <td>afaiz47@graduate.utm.my</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td style={{color:'DodgerBlue'}}>AMIRUL FAIZ BIN AHMAD PUAD</td>
                      <td>afaiz47@graduate.utm.my</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td style={{color:'DodgerBlue'}}>AMIRUL FAIZ BIN AHMAD PUAD</td>
                      <td>afaiz47@graduate.utm.my</td>

                    </tr>
                  </tbody>
                </Table>
              </Card>
          </CardBody>
        </Card>

        </>
    );
  }
}

export default GroupSectionInformation;
