import React, { Component } from "react";
import { connect } from "react-redux";
import Dates from "../../../../__ifunc/dates";
import { RegisterScheduleActions } from "../../../../__actions";

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
  Badge,
} from "reactstrap";

class RegistrationScheduleLog extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    // this.onSubmitScheduleonClick = this.onSubmitScheduleonClick.bind(this);
    // this.onChange = this.onChange.bind(this);

    this.state = {
      code: "",
      courseName: "",
      startDate: "",
      endDate: "",
      date: "",
    };
  }

  componentDidMount() {
    RegisterScheduleActions.getListSchedule(this.props.dispatch);
  }
  render() {
    let { dataRegistrationSchedule } = this.props.registrationSchedule;
    console.log(dataRegistrationSchedule);
    return (
      <div>
        <Card>
          <CardBody>
            <Label className="h4">Registration Log</Label>
            <Table
              className="table table-hover table-outline mb-0 d-none d-sm-table"
              hover
            >
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Session</th>
                  <th>Semester</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Date Created</th>
                  <th>Created By</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>


                  <th scope="row">1</th>
                  <td>2019/2020</td>
                  <td>1</td>
                  <td>{Date()}</td>
                  <td>{Date()}</td>
                  <td>Date Created</td>
                  <td>Created By</td>
                </tr> */}

                {dataRegistrationSchedule.length === 0 ? (
                  <tr>
                    <td align="center" colSpan={4}>
                      No Data
                    </td>
                  </tr>
                ) : (
                  dataRegistrationSchedule.map((dataList, index) => (
                    <RegistrationLogRow
                      key={index}
                      numbers={index}
                      dataList={dataList}
                      // dispatch={this.props.dispatch}
                      // authorization={this.props.authorization}
                    />
                  ))
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class RegistrationLogRow extends Component {
  render() {
    let dataList = this.props.dataList;
    const numbers = this.props.numbers;
    let number = numbers + 1;
    return (
      <>
        <tr>
          <td>{number}</td>
          <td>{dataList.session}</td>
          <td>{dataList.semester}</td>
          <td>
            {Dates.format(dataList.startDateTime, Dates.FORMAT.DATE_TIME5)}
          </td>
          <td>{Dates.format(dataList.endDateTime, Dates.FORMAT.DATE_TIME5)}</td>
          <td>{Dates.format(dataList.createdDate, Dates.FORMAT.DATE_TIME5)}</td>
          <td>{dataList.nameCreatedBy}</td>
          <td>
            {dataList.status === true ? (
              <Badge className="p-2" color="green" pill>
                {"In Schedule"}
              </Badge>
            ) : dataList.status === "waiting" ? (
              <Badge className="p-2" color="yellow" pill>
                {"Waiting for registration session"}
              </Badge>
            ) : (
              <Badge className="p-2" color="grey" pill>
                {"Not Schedule"}
              </Badge>
            )}
          </td>
        </tr>
      </>
    );
  }
}

export default connect((state) => {
  return state;
})(RegistrationScheduleLog);
