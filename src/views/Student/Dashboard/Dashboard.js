import React, { Component } from "react";
import { Auth } from '../../../api'
import {  CourseActions } from '../../../__actions'
import { connect } from 'react-redux';

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
} from "reactstrap";

class Dashboard extends Component {

  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
    };
  }

  async componentDidMount() {
    CourseActions.getCourse(this.props.dispatch)
  }

  render() {
    const user = Auth.getAuthUser()
    console.log(this.props.dashboard)
    let {data} = this.props.dashboard
    console.log({data})
    return (
      <>
      <h2>Dashboard</h2>
        <Card className="shadow animated fadeIn rounded">
          <CardHeader className="bg-dark border-bottom-0">
            <h2>{user.name.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())}</h2>
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
      </>
    );
  }
}


export default connect(state => { return state })(Dashboard) ;
