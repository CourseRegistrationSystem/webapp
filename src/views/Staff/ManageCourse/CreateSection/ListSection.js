import React, { Component } from "react";
import { connect } from "react-redux";
import { CurriculumActions } from "../../../../__actions";

import {
  Card,
  Col,
  CardTitle,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  CardText,
} from "reactstrap";

class ListSection extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);

    this.state = {
      activeTab: "1",
      dropdownOpen: false,
      dropDownValue: null,
      selectedCurriculum: "",
    };
  }

  async componentDidMount() {
    CurriculumActions.getListCurriculum(this.props.dispatch);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        dropDownValue: "",
        selectedCurriculum: "",
      });
    }
  }

  toggleDropDown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  changeValue(e) {
    console.log(e.currentTarget.textContent);
    let data = e.currentTarget.textContent;
    this.setState({ dropDownValue: data });
    // let id = e.currentTarget.getAttribute("nama_kurikulum");
    // this.setState({ dropDownValue: id });

    // CourseActions.getTimeTable(e.currentTarget.textContent,this.props.dispatch)
  }

  render() {
    let { data } = this.props.curriculum;
    let dataSection = this.props.dataSection;
    console.log(dataSection);

    // this.setState({dropDownValue: 'Please select'})
    return (
      // <div>
      //   AssignLecturerCourse
      // </div>
      <>
        <div>
          <Row>
            {dataSection.map((datasection, index) => {
              return (
                <SectionRow
                  datasection={datasection}
                  index={index}
                ></SectionRow>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}

class SectionRow extends Component {
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
    let datasection = this.props.datasection;
    console.log(datasection);
    return (
      // <div>
      <Col sm="6">
        <Card body>
          <CardTitle className="h3">
            Section {datasection.section} - {datasection.session}
          </CardTitle>
          <CardText>
            <div>Section : {datasection.section}</div>
            <div>Session : {datasection.session}</div>
            <div>Capacity : {datasection.student.length}/{datasection.capacity}</div>
            <div>Date Created : {datasection.dateCreated}</div>
          </CardText>

          <Button onClick={this.buttonModalShow} value={datasection.id}>Student List in this section</Button>
          <Modal
            isOpen={this.state.showStudList}
            onClick={this.toggleModelShow}
            style={{ maxWidth: "80%", width: "60%" }}
          >
            <ModalHeader
              className="bg-dark border-bottom-0"
              toggle={this.toggleModelShow}
            >
              Section {datasection.section} - {datasection.session}
            </ModalHeader>
            <ModalBody>
            <Table>
              <thead>
                <tr>
                <th>Number</th>
                  <th>Name</th>
                  <th>Matric Number</th>
                  <th>Programme</th>
                </tr>
              </thead>
              <tbody>
              {
                      (datasection.student.length === 0)?
                      <tr>
                        <td align="center" colSpan={4}>
                          No Data
                        </td>
                      </tr>:
                      datasection.student.map((studentList, index) =>


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
      </Col>
      // </div>
    );
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
        <td>{studentList.name}</td>
        <td>{studentList.matricNo}</td>
        <td>{studentList.program}</td>
      </tr>
    );
  }
}


export default connect((state) => {
  return state;
})(ListSection);
