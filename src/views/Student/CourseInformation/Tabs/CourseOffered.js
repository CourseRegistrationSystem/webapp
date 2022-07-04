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

                {/* <Table hover responsive size="md">
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
                </Table> */}

                <Table hover responsive size="md">

            <thead>
              <tr>
                <th></th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Section</th>
                <th>Semester/Session</th>
                {/* <th>Status</th>
                <th>Year</th> */}
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
                        sesi={this.props.curriculumList.sesi}
                        semester={this.props.curriculumList.semester}
                        // dispatch={this.props.dispatch}
                        // authorization={this.props.authorization}
                        />
                      )
                    }
            </tbody>
          </Table>
            </>
    );
  }
}

class TakenCourseRow extends Component {
  render() {
    const data = this.props.data
    const sesi = this.props.sesi
    const semester = this.props.semester
    const numbers = this.props.numbers
    console.log(data.seksyen_list)

    let arrSection = ''
    if(data.seksyen_list !== null){

      data.seksyen_list.map((dataList,index) => {
        if(index === 0){
          arrSection = dataList.seksyen
        }else{
          arrSection = dataList.seksyen +', '+ arrSection
        }

      })
    }else{
      arrSection = 'No section assigned'
    }
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
                <td>{arrSection}</td>
                <td>{semester} - {sesi}</td>
                {/* <td>
                  <Badge className="p-2" color="green" pill>

                    {data.mod_elektif === 1?('Elective Subject'):('')}

                  </Badge>
                </td>
                <td>{data.tahun_kursus}</td> */}

              </tr>
    );
  }
}


class sectionList extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}



export default CourseOffered;
