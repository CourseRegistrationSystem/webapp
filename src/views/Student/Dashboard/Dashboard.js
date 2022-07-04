import React, { Component } from "react";
import { Auth } from "../../../api";
import { CourseActions } from "../../../__actions";
import { connect } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Dates from "../../../__ifunc/dates";
import countdown from "countdown"

import RegistrationTable from "../RegisterNewCourse/RegistrationTable";
import DisplayAlreadyRegistered from "../RegisterNewCourse/DisplayAlreadyRegistered";


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
  Label
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
    await CourseActions.getCourse(this.props.dispatch);
    await CourseActions.checkEligible(this.props.dispatch)

    setInterval( () => {
      this.setState({
        // curTime : date
      })
      // console.log(this.state.curTime)
    },1000)
  }

  render() {
    const user = Auth.getAuthUser();
    let { data } = this.props.dashboard;
    let { checkEligible} = this.props.course

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
          <h3>Personal Information</h3>
            <div>Name : {user.name.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}</div>
            <div>Matric No : {user.matricNo}</div>
            <div>Status : {user.description}</div>
            <div>Role : {user.role}</div>
          </CardBody>
          <CardFooter>
          <div className="small">* Your data information is confidential</div>
            {data.map}
          </CardFooter>
        </Card>

{checkEligible.status === true?(
         <Card>
         <CardBody>
         <Label>{checkEligible.message}</Label>
           </CardBody>
           </Card>
      ):(
        <DisplayAlreadyRegistered checkEligible={checkEligible}></DisplayAlreadyRegistered>
        // checkEligible.status
      )}
      </>
    );
  }
}

export default connect((state) => {
  return state;
})(Dashboard);
