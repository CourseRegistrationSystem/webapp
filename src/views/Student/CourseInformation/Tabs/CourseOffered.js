import React, { Component } from 'react';

import {
  Card,
  Table,
  Col,
  Row,
  Badge,
} from "reactstrap";

class CourseOffered extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <>
      <Row>
                <Col sm="12" className="mb-3">
                  <h3>Course Offered List</h3>
                </Col>
              </Row>
              <Card>
                <Table hover responsive size="md">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Course Code</th>
                      <th>Course Name</th>
                      <th>Section</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td style={{color:'DodgerBlue'}}>SECJ 1234</td>
                      <td>Teknologi Automotif</td>
                      <td>1</td>
                      <td><Badge className="p-2" color="green" pill>
                        Able to register
                        </Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td style={{color:'DodgerBlue'}}>SECJ 1234</td>
                      <td>Teknologi Automotif</td>
                      <td>1</td>
                      <td><Badge className="p-2" color="grey" pill>
                        Not Open
                        </Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td style={{color:'DodgerBlue'}}>SECJ 1234</td>
                      <td>Teknologi Automotif</td>
                      <td>1</td>
                      <td>
                        <Badge className="p-2" color="red" pill>
                        Problem to register
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card></>
    );
  }
}



export default CourseOffered;
