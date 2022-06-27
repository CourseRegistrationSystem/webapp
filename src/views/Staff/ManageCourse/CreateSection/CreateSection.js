import React, { Component } from "react";
import { connect } from "react-redux";
import { SectionActions, CurriculumActions } from "../../../../__actions";
import ListOfSection from "./ListSection";

import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CardHeader,
  Table,
  Button,
  Col,
  Row,
  FormText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

class CreateSection extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddSectionClick = this.onAddSectionClick.bind(this);

    this.state = {
      activeTab: "1",
      dropdownOpen: false,
      dropDownValue: null,
      selectedCurriculum: "",
      selectCurriculum: "-",

      showMessageSemester: false,
      MessageSemester: "",
      showMessageSession: false,
      MessageSession: "",
      showMessageProgram: false,
      MessageProgram: "",
      showMessageSection: false,
      MessageSection: "",

      semester: "1",
      session: "",
      program: "Bachelor of Computer Science (Software Engineering)",
      section: "",
    };
  }

  async componentDidMount() {
    CurriculumActions.getListCurriculum(this.props.dispatch);
    SectionActions.getListSection(this.props.dispatch);
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

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log([name], value);
  }

  onAddSectionClick(e) {
    e.preventDefault();

    if (this.state.semester !== "") {
      this.setState({ showMessageSemester: false, MessageSemester: "" });
    } else {
      this.setState({
        showMessageSemester: true,
        MessageSemester:
          "* Required data, please fill in the user's fullname.",
      });
    }
    if (this.state.session !== "") {
      this.setState({
        showMessageSession: false,
        MessageSession: "",
      });
    } else {
      this.setState({
        showMessageSession: true,
        MessageSession: "* Required data, please fill in the user's IC.",
      });
    }
    if (this.state.program !== "") {
      this.setState({
        showMessageProgram: false,
        MessageProgram: "",
      });
    } else {
      this.setState({
        showMessageProgram: true,
        MessageProgram:
          "* Required data, please fill in the user's phone number.",
      });
    }
    if (this.state.section !== "") {
      this.setState({
        showMessageSection: false,
        MessageSection: "",
      });
    } else {
      this.setState({
        showMessageSection: true,
        MessageSection:
          "* Required data, please fill in the user's license number.",
      });
    }

    let _param = {
      semester: this.state.semester,
      session: this.state.session,
      program: this.state.program,
      section: this.state.section,
    };
    // if(this.showMessage === false ){
      SectionActions.registerSection(_param).then(
      (result) => {
        console.log(result)
        // this.setState({ updateDevice: !this.state.updateDevice });
        // this.props.history.push("/carDetails");
      },
      (error) => {

        if (error === "Sensor Device already register!.") {
          this.setState({
            showMessageExistDevice: true,
            MessageExistDevice: "* The device is already registered.",
          });
        }else{
          this.setState({
            showMessageExistUser: false,
            MessageExistUser: "",
          });
        }
      }
    );
    // }
  }

  render() {
    let { data } = this.props.curriculum;
    let { dataSection } = this.props.section;
    console.log(dataSection);
    return (
      <div>
        <Card>
          <CardBody className="p5 text-center">
            Create New Section
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Semester</Label>
                    <Input
                      id="semester"
                      name="semester"
                      placeholder="Example: 1/2"
                      type="select"
                      onChange={this.onInputChange}
                      required
                    >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3 - Short Semester</option>
                    </Input>
                    <div style={{textAlign: 'left', marginLeft: '', color: 'red', fontSize: '10px'}}>{this.state.showMessageSemester && this.state.MessageSemester}</div>
                  </FormGroup>

                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="session">Session</Label>
                    <Input
                      id="session"
                      name="session"
                      placeholder="Example: 2019/2020"
                      type="text"
                      onChange={this.onInputChange}
                      required
                    />
                    <div style={{textAlign: 'left', marginLeft: '', color: 'red', fontSize: '10px'}}>{this.state.showMessageSession && this.state.MessageSession}</div>
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Program</Label>
                <br></br>
                <div>
                  <Input
                    id="program"
                    name="program"
                    type="select"
                    value={this.state.selectCurriculum}
                    onChange={this.onInputChange}
                  >
                    {data.map((e, index) => (
                      <option value={e.nama_kurikulum}>
                        {e.nama_kurikulum}
                      </option>
                    ))}
                  </Input>
                  <div style={{textAlign: 'left', marginLeft: '', color: 'red', fontSize: '10px'}}>{this.state.showMessageProgram && this.state.MessageProgram}</div>
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Section</Label>
                <Input
                  id="section"
                  name="section"
                  placeholder="section"
                  type="number"
                  onChange={this.onInputChange}
                  required
                  // disabled
                />
                <div style={{textAlign: 'left', marginLeft: '', color: 'red', fontSize: '10px'}}>{this.state.showMessageSection && this.state.MessageSection}</div>
              </FormGroup>

              <Button
                block
                style={{
                  // width: "150px",
                  // height: "40px",
                  // marginTop: '10px',
                  // padding: '10px',
                  // float: "right",
                  color: "white",
                  background: "#55B04E",
                }}
                onClick={this.onAddSectionClick}
              >
                Create New Section
              </Button>
            </Form>
            You may assign students in this section after create this section
          </CardBody>
        </Card>

        <ListOfSection dataSection={dataSection}></ListOfSection>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(CreateSection);
