import React, { Component } from 'react';
import { connect } from "react-redux";
import BarChart from './BarChart';
import RegisteredList from './RegisteredList';
import { StudentActions, CourseActions } from "../../../__actions";

//icon
import { Icon } from '@iconify/react';
import accountMultipleCheck from '@iconify/icons-mdi/account-multiple-check';

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Row,
  Col,
} from "reactstrap";

class Statistic extends Component {
  componentDidMount() {
    StudentActions.getListStudent(this.props.dispatch);
    CourseActions.getLatestData(this.props.dispatch);

  }
  render() {
    let {data} = this.props.student
    let {dataCount} = this.props.course
    return (
      <div>
        <Row>
          <Col sm={12}>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
              <CardBody>
              <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>

                </h4>
                <h1 style={{ textAlignVertical: "center", textAlign: "center", color: "grey" }}>
                  {data.length}
                </h1>
                <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>
                  Total  Student Registered
                </h4>
              </CardBody>
            </Card>
          </Col>
          {/* <Col sm={4}>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
              <CardBody>
              <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>

                </h4>
                <h1 style={{ textAlignVertical: "center", textAlign: "center", color: "grey" }}>
                  {dataCount.length}
                </h1>
                <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>
                  Total Course Registered
                </h4>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
        {/* <BarChart></BarChart> */}
      <RegisteredList></RegisteredList>
      </div>
    );
  }
}


export default connect((state) => {
  return state;
})(Statistic);
