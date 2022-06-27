import React, { Component } from "react";
import { Auth, CONSTANTS } from "../../../api";
import { connect } from "react-redux";

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

class ShowTimeTable extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    // this.checkSectionAvailability = this.checkSectionAvailability.bind(this);
    // this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      code: "",
      courseName: "",
    };
  }

  getRandomColor() {
    var letters = "BCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  render() {
    // console.log(this.props.data);
    let data = this.props.data.Registration;
    let showTable = [];
    // let oneClass = []
    let row = {};
    data.map((dataList, index) =>
      // console.log(dataList),
      dataList.section.table.map((tableList, index) => {
        // console.log(dataList);
        // console.log(tableList);
        row.nama_subjek = dataList.section.course.nama_subjek;
        row.nama_pensyarah = dataList.section.nama_pensyarah;
        row.kod_subjek = dataList.section.course.kod_subjek;
        row.section = dataList.section.section;
        row.tableList = tableList;
        // console.log(row);
        showTable.push(row);
        // console.log(showTable);
        // return(
        // showTable.push(row)
        // )
      })
    );

    // for(let a=0; a< data.length;a++){
    //   let dataList = data[a]
    //   for(let b=0; b< dataList.section.table.length;b++){
    //     let tableList = dataList.section.table[0]
    //     row.nama_subjek = dataList.section.course.nama_subjek
    //     row.nama_pensyarah = dataList.section.nama_pensyarah
    //     row.kod_subjek = dataList.section.course.kod_subjek
    //     row.section = dataList.section.section
    //     row.tableList=tableList
    //     console.log(row)
    //     showTable.push(row)
    //     console.log(showTable)
    //   }

    // }

    // console.log(showTable);

    let time = [
      "7:00am - 7:59am",
      "8:00am - 8:59am",
      "9:00am - 9:59am",
      "10:00am - 10:59am",
      "11:00am - 11:59am",
      "12:00pm - 12:59pm",
      "01:00pm - 01:59pm",
      "02:00pm - 02:59pm",
      "03:00pm - 03:59pm",
      "04:00pm - 04:59pm",
      "05:00pm - 05:59pm",
      "06:00pm - 06:59pm",
    ];
    // let time = [1,2,3,4,5,6,7,8,9,10]
    let day = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div>
        <Label className="h4">Registered Time Table</Label>
        <Table bordered size="sm">
          <thead>
            <tr
              className="text-center bg-gray-200 shadow"
              style={{ height: "50px" }}
            >
              <th>Time/Day</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>

          <tbody className="mb-5 text-center">
            {4 === 0 ? (
              <tr>
                <td align="center" colSpan="8">
                  No Data
                </td>
              </tr>
            ) : (
              time.map((time, indexTime) => {
                return (
                  <tr width="10px" key={indexTime}>
                    <td className="" style={{ width: "150px" }}>
                      {time}
                    </td>
                    {indexTime === 6 ? (
                      <td className="bg-dark" colSpan="7">
                        REHAT
                      </td>
                    ) : (
                      day.map((day, indexDay) => {
                        return (
                          <td key={indexDay}>
                            {data.map((dataList, index) => {
                              // console.log(dataList),
                              let color = this.getRandomColor()
                              return(
                                dataList.section.table.map((tableList, index) => {
                                  // console.log(dataList);
                                  // console.log(tableList);
                                  row.nama_subjek =
                                    dataList.section.course.nama_subjek;
                                  row.nama_pensyarah =
                                    dataList.section.nama_pensyarah;
                                  row.kod_subjek =
                                    dataList.section.course.kod_subjek;
                                  row.section = dataList.section.section;
                                  row.tableList = tableList;
                                  row.color = color

                                  if (
                                    row.tableList.masa === indexTime + 1 &&
                                    row.tableList.hari === day
                                  ) {
                                    return (
                                      <div
                                        key={index}
                                        className="shadow"
                                        style={{
                                          backgroundColor: row.color,
                                        }}
                                      >
                                        {row.kod_subjek} ({row.section})
                                        <div>{row.nama_subjek}</div>
                                        <div>{row.nama_pensyarah}</div>
                                      </div>
                                    );
                                  } else {
                                    return "";
                                  }
                                })
                              )

                      })}
                            {showTable.map((data, index) => {
                              // if (
                              //   data.tableList.masa === indexTime + 1 &&
                              //   data.tableList.hari === day
                              // ) {
                              //   return (
                              //     <div
                              //       key={index}
                              //       className="shadow"
                              //       style={{
                              //         backgroundColor: data.color,
                              //       }}
                              //     >
                              //       {data.kod_subjek} ({data.seksyen})
                              //       <div>{data.nama_subjek}</div>
                              //       <div>{data.nama_pensyarah}</div>
                              //     </div>
                              //   );
                              // } else {
                              //   return "";
                              // }
                            })}
                          </td>
                        );
                      })
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(ShowTimeTable);
