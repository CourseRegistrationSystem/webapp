import React, { Component } from "react";
import { SectionActions,CourseActions } from "../../../__actions";
import { connect } from "react-redux";
import { Auth } from "../../../api";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Badge,
  Col,
  CardTitle,
  FormGroup,
  ListGroupItem,
  Row,
  Button,
  Collapse,
  ListGroupItemText,
  Input,
  CardGroup,
  CardSubtitle,
  CardImg,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

class GroupSectionInformation extends Component {
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

  async componentDidMount() {
    await SectionActions.getSectionMemberList(
      Auth.getAuthUser().matricNo,
      this.props.dispatch
    );
    await CourseActions.checkEligible(this.props.dispatch)
  }

  render() {
    const user = Auth.getAuthUser();
    console.log(user);

    let { sectionListById } = this.props.section;
    let { checkEligible} = this.props.course
    console.log(sectionListById.length);
    return (
      <>
        <Card className="shadow animated fadeIn rounded">
          <CardHeader className="bg-dark border-bottom-0">
            <h2>Personal Information</h2>
          </CardHeader>
          <CardBody>
            <Table borderless size="sm">
              <thead>
                <tr>
                  <th className="col-2">Name</th>
                  <td style={{ width: "10px" }}>:</td>
                  <td>{user.name.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}</td>
                </tr>
              </thead>

              <tbody className="mb-5">
                <tr width="10px">
                  <th scope="row">Student Profile</th>
                  <td>:</td>
                  <td>{user.description}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Session</th>
                  <td>:</td>
                  <td>{checkEligible.data?(checkEligible.data.session):("No schedule")}</td>
                </tr>
                <tr width="10px">
                  <th scope="row">Registration Course Semester</th>
                  <td>:</td>
                  <td>{checkEligible.data?(checkEligible.data.semester):("No schedule")}</td>
                </tr>
               
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Card className="shadow animated fadeIn rounded">
          <CardBody>
            <h3 className="p-2">Section Members</h3>
            <Card>
              <CardGroup>
                {sectionListById.length === 0
                  ? "No Data Recorded"
                  : sectionListById.map((dataList, index) => {
                      // console.log(dataList)
                      return (
                        <SectionList
                          dataList={dataList}
                          index={index}
                        ></SectionList>
                      );


                    })}
              </CardGroup>
            </Card>
          </CardBody>
        </Card>
      </>
    );
  }
}

class SectionList extends Component {
  constructor(props) {
    super(props);

    this.toggleModelShow = this.toggleModelShow.bind(this);
    // this.toggle = this.toggle.bind(this);
    this.buttonModalShow = this.buttonModalShow.bind(this);

    this.state = {
      showStudList: false,
    };
  }

  buttonModalShow(e) {
    console.log(e.target.value)
  this.setState({
      showStudList: !this.state.showStudList,
      // expanded: false,
    });
  }

  toggleModelShow(e) {
    console.log(this.state.showStudList);
    this.setState({
      showStudList: !this.state.showStudList,
      // expanded: false,
    });
  }

  render() {
    let dataList = this.props.dataList;
    console.log(dataList)
    return( <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        {dataList.course.kod_subjek} - {dataList.course.nama_subjek}
      </CardTitle>
      <CardText>
        <div>Lecturer Name : {dataList.nama_pensyarah}</div>
        <div>Number of student : {dataList.capacity}</div>
      </CardText>

      <Button onClick={this.buttonModalShow} value={dataList.id}>Student List in this section</Button>
      <Modal
            isOpen={this.state.showStudList}
            onClick={this.toggleModelShow}
            style={{ maxWidth: "80%", width: "60%" }}
          >
            <ModalHeader
              className="bg-dark border-bottom-0"
              toggle={this.toggleModelShow}
            >
              {dataList.course.kod_subjek} - {dataList.course.nama_subjek}
            </ModalHeader>
            <ModalBody>
            <Table>
              <thead>
                <tr>
                <th>Number</th>
                  <th>Name</th>
                  <th>Matric Number</th>
                </tr>
              </thead>
              <tbody>
              {
                      (dataList.registration.length === 0)?
                      <tr>
                        <td align="center" colSpan={4}>
                          No Data
                        </td>
                      </tr>:
                      dataList.registration.map((studentList, index) =>


                      <StudentRow
                        key={index}
                        numbers={index}
                        studentList={studentList}
                        // dispatch={this.props.dispatch}
                        // authorization={this.props.authorization}
                        />
                      )
                    }
              </tbody>
            </Table>
      </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={this.toggleModelShow}
      >
        Do Something
      </Button>
      {' '}
      <Button onClick={this.toggleModelShow}>
        Cancel
      </Button>
    </ModalFooter>
          </Modal>
    </Card>
  </Col>);
  }
}

class StudentRow extends Component {
  render() {
    let studentList = this.props.studentList;
    const numbers = this.props.numbers
    let number =  numbers + 1
    return (
      <tr>
        <td>{number}</td>
        <td>{studentList.nama_pelajar}</td>
        <td>{studentList.kad_matrik_pelajar}</td>
      </tr>
    );
  }
}

export default connect((state) => {
  return state;
})(GroupSectionInformation);
