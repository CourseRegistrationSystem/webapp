import React, { Component } from "react";

import {
  Card,
  Table,
  Col,
  Row,
  Badge,
} from "reactstrap";

class TransferCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row>
          <Col sm="12" className="mb-3">
            <h3>Transfer Credit Information Here</h3>
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
                <th>Semester/Session</th>
                {/* <th>Status</th> */}
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
            {
                      (this.props.data.length === 0)?
                      <tr>
                        <td align="center" >
                          No Data
                        </td>
                      </tr>:
                      this.props.data.map((data, index) =>


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
        </Card>
      </>
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
                <td>{data.seksyen}</td>
                <td>{data.semester} - {data.sesi}</td>
                {/* <td>
                  <Badge className="p-2" color="green" pill>
                    Able to register
                    {data.status}

                  </Badge>
                </td> */}
                <td>{data.tahun_kursus}</td>

              </tr>
    );
  }
}


export default TransferCredit;
