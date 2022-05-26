import React, { Component } from "react";
import { Auth } from "../../../api";
import { CourseActions,CurriculumActions } from "../../../__actions";
import { connect } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  CardTitle,
  FormGroup,
  ListGroupItem,
  Row,
  Button,
  Collapse,
  ListGroupItemText,
  Input,
  Badge,
} from "reactstrap";

TimeAgo.addDefaultLocale(en);

class Dashboard extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      timeAgo: new TimeAgo("en-US"),
    };
  }

  async componentDidMount() {
    // CourseActions.getCourse(this.props.dispatch);
    CurriculumActions.getListCurriculum(this.props.dispatch);
  }

  render() {
    const user = Auth.getAuthUser();
    console.log(this.props.dashboard);
    let { data } = this.props.dashboard;
    console.log({ data });

    let String = 'dlrow olleh'
    let split = String.split('') // split the array into single char
    let reverse = split.reverse() // arrange the char in reverse
    let output = reverse.join('') // combine the char into an array
    console.log(output)
    
    return (
      <>
        {/* <h2>Dashboard</h2> */}
        <Card className="shadow animated fadeIn rounded">
          <CardHeader className="bg-dark border-bottom-0">
            <h2>
              Welcome,{" "}
              {user.name
                .toLowerCase()
                .replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}
              <Badge className="p-2" color="green" pill>
                {user.description}
              </Badge>
            </h2>
          </CardHeader>
          <CardBody>
            <h3>Important Message</h3>
            <div>Name : {user.name.toString().toLowerCase()}</div>
            <div>Matric No : {user.matricNo}</div>
            <div>Status : {user.description}</div>
            <div>Role : {user.role}</div>
          </CardBody>
          <CardFooter>
            <div>This is footer</div>
            {data.map}
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <div className="text-center h1">
              Course Registration 2022/2023 Semester 1 will open on
            </div>
            <div className="text-center h3">25 October 2021</div>
            <div className="text-center h3">12:00 am</div>
            <div className="text-center">
              Countdown:{" "}
              {this.state.timeAgo.format(
                new Date("2022-04-12 16:49:00").getTime()
              )}
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default connect((state) => {
  return state;
})(Dashboard);
