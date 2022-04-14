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

                <Table hover responsive size="md">

            <thead>
              <tr>
                <th></th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Section</th>
                <th>Semester/Session</th>
                <th>Status</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
            {
                      (this.props.curriculumList.length === 0)?
                      <tr>
                        <td align="center" >
                          No Data
                        </td>
                      </tr>:
                      this.props.curriculumList.map((data, index) =>


                      <TakenCourseRow
                        key={index}
                        numbers={index}
                        data={data}
                        // dispatch={this.props.dispatch}
                        // authorization={this.props.authorization}
                        />
                      )
                    }
            </tbody>
          </Table>
              </Card></>
    );
  }
}

class TakenCourseRow extends Component {
  render() {
    const data = this.props.data
    const numbers = this.props.numbers

    let number =  numbers + 1
//     kod_kursus: "SECJ"
// kod_subjek: "SCSD3761"
// nama_subjek: "Technopreneurship Seminar"
// seksyen: 1
// semester: 2
// sesi: "2021/2022"
// status: "-"
// tahun_kursus: 4
    return (
      <tr>
                <th scope="row">{number}</th>
                <td style={{ color: "DodgerBlue" }}>{data.kod_subjek}</td>
                <td>{data.nama_subjek}</td>
                <td>{data.mod_elektif}</td>
                <td>{data.semester_ambil} - {data.tahun_ambil}</td>
                <td>
                  <Badge className="p-2" color="green" pill>
                    
                    {data.mod_elektif === 1?('Elective Subject'):('')}

                  </Badge>
                </td>
                <td>{data.tahun_kursus}</td>

              </tr>
    );
  }
}



export default CourseOffered;
