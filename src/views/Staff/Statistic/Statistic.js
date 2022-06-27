import React, { Component } from 'react';
import { connect } from "react-redux";
import { CourseActions } from "../../../__actions";
import BarChart from './BarChart';
import RegisteredList from './RegisteredList';
import { StudentActions } from "../../../__actions";

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
  }
  render() {
    let {data} = this.props.student
    return (
      <div>
        Statistic
        <Row>
          <Col sm={4}>
            <Card >
              <CardBody>
                <Row>
                <Col sm={4}>

                <Icon icon={accountMultipleCheck} color="black" height="100" />
                </Col>
                <Col sm={8} className=' text-lg-center'>
                <p className=''>Total Registered Student</p>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
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
          <Col sm={4}>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
              <CardBody>
              <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>

                </h4>
                <h1 style={{ textAlignVertical: "center", textAlign: "center", color: "grey" }}>
                  {76}
                </h1>
                <h4 style={{ textAlignVertical: "center", textAlign: "center", }}>
                  Total  Student Registered
                </h4>
              </CardBody>
            </Card>
          </Col>
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
