import React, { Component } from "react";
import { connect } from "react-redux";
import { CourseActions } from "../../../__actions";
import Select from "react-select";

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

class RegistrationTable extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.checkSectionAvailability = this.checkSectionAvailability.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitRegistrationClick = this.onSubmitRegistrationClick.bind(this);


    this.state = {
      showMessage: true,
      Message: "",
      code: "",
      courseName: "",
      count: [],
      course: [],
      forSubmitRegistration: [],
    };
  }

  checkSectionAvailability = (e) => {
    e.preventDefault();

    let _param = {
      kod_subjek: this.state.kod_subjek,
      nama_subjek: this.state.nama_subjek,
      subjek_list: this.state.subjek_list,
    };

    // console.log(fence)
    CourseActions.checkCourseList(_param, this.props.dispatch).then(
      (result) => {
        // this.setState({ updateDevice: !this.state.updateDevice });
        // this.componentDidMount()
        // window.location.reload(false);
        // window.location = "/fenceListLocation";
        // DevicedataActions.getLatestData(dispatch)
        // console.log(dispatch)
      },
      (error) => {
        //console.log('=======error=========='+error)
        this.setState({
          showMessage: true,
          Message: +error,
        });
      }
    );
    // });
  };



  async onSubmitRegistrationClick(e) {
    this.state.forSubmitRegistration.session = (this.props.checkEligible.data.session)
    this.state.forSubmitRegistration.semester = (this.props.checkEligible.data.semester)
      await CourseActions.submitRegistration(this.state.forSubmitRegistration).then(
      (result) => {
        console.log(result)
        CourseActions.checkEligible(this.props.dispatch)
        CourseActions.getCourseRegistrationList(this.props.dispatch)
      },
      (error) => {
        console.log(error)
          this.setState({
            showMessage: true,
            Message: +error,
          });
      }
    );
  }

  onInputChange(e) {
    const { value, nama_subjek } = e;
    this.setState({
      kod_subjek: value.kod_subjek,
      nama_subjek: nama_subjek,
      subjek_list: value.seksyen_list,
    });
  }

  render() {
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

    let {
      checkCourseList,
      checkTableList,
      courseRegistrationTable,
      seksyenRegistrationTable,
    } = this.props.course;

    // let option = [];
    // checkCourseList.map((data) => {
    //   option.push({
    //     value: data,
    //     nama_subjek: data.nama_subjek,
    //     label: data.kod_subjek + " - " + data.nama_subjek,
    //   });
    // });

    if (
      courseRegistrationTable !== undefined && courseRegistrationTable.courseSeksyen
    ) {

      if(this.state.course !==0){

        let data = []
        this.state.course.map((dataList) => data.push(dataList.courseSeksyen))
        if(  data.includes(courseRegistrationTable.courseSeksyen)){  //avoid same data insert in the list
          console.log('includes')
        }else{
          this.state.forSubmitRegistration.push(seksyenRegistrationTable);
          this.state.course.push(courseRegistrationTable);
          console.log(courseRegistrationTable,seksyenRegistrationTable)
          console.log(this.state.course)
          seksyenRegistrationTable.table.map((dataList, index) => {

            if(this.state.count){}
            this.state.count.push(dataList); // just want to get jadual
          });
        }
      }



    }

    // console.log(seksyenRegistrationTable);
    // console.log(this.state.count); //get all data in seksyen
    // console.log(courseRegistrationTable);
    // console.log(this.state.course);
    return (
      <>
        <Card>
          <CardBody>
            <Form onSubmit={this.checkSectionAvailability}>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="code">Code</Label>
                    <Select
                      isSearchable={true}
                      name="code"
                      onChange={this.onInputChange}
                      options={checkCourseList}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                  </FormGroup>
                </Col>
              </Row>

              <Button
                style={{
                  color: "white",
                  background: "grey",
                }}
              >
                Check
              </Button>
            </Form>
            <Row>
              <Table
                className="table table-hover table-outline mb-0 d-none d-sm-table ml-3 mr-3 mt-3"
                hover
              >
                <thead className="thead-light">
                  <tr>
                    <th>No</th>
                    <th>Code</th>
                    <th>Course Name</th>
                    <th>Section</th>
                    <th>Day/time Venue</th>
                    <th>Lecturer</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="mb-5 text-center">
                  {checkTableList !== undefined ? (
                    checkTableList.subjek_list !== undefined &&
                    checkTableList.subjek_list !== null ? (
                      checkTableList.subjek_list.length === 0 ? (
                        <tr>
                          <td align="center" colSpan="8">
                            No Data
                          </td>
                        </tr>
                      ) : (

                        checkTableList.subjek_list.map((data, index) => (
                          <>
                            <CourseKeyInList
                              key={index}
                              numbers={index}
                              dataSeksyen={data}
                              dataCourse={checkTableList}
                              dispatch={this.props.dispatch}
                              count={this.state.count}
                              course={this.state.course}
                            />
                          </>
                        ))
                      )
                    ) : (
                      // if the section is null
                      <tr>
                        <td align="center" colSpan="8">
                          No Data
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td align="center" colSpan="8">
                        No Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Row>
          </CardBody>
        </Card>

        <Card className="shadow animated fadeIn rounded">
          <CardBody>
            {/* {dataTimeTable} */}
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
                {this.state.count.length === 0 ? (
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
                                {this.state.count.map((data, index) => {
                                  if (
                                    data.masa === indexTime + 1 &&
                                    data.hari === day
                                  ) {
                                    return (
                                      <div
                                        key={index}
                                        className="shadow"
                                        style={{
                                          backgroundColor: data.color,
                                        }}
                                      >
                                        {data.kod_subjek} ({data.seksyen})
                                        <div>{data.nama_subjek}</div>
                                        <div>{data.nama_pensyarah}</div>

                                      </div>

                                    );
                                  } else {
                                    return "";
                                  }
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
            <Button block
              style={{
                color: "white",
                background: "green",
              }}
              onClick={() => this.onSubmitRegistrationClick()}
            >
              submit
            </Button>
          </CardBody>

        </Card>
      </>
    );
  }
}

class CourseKeyInList extends Component {
  constructor(props) {
    super(props);
    this.onAddSectionClick = this.onAddSectionClick.bind(this);

    this.state = {
      code: "",
      courseName: "",
    };
  }

//   onDeleteObject = (dataSeksyen, dataCourse) => {
//     const newCountries = this.state.countries.filter(element => element.id !== country.id);
//     this.setState({ countries: newCountries });

// }

  onAddSectionClick = (dataSeksyen, dataCourse) => {
    // e.preventDefault()
    // console.log(dataSeksyen, dataCourse);
    let insertCourseData = {courseSeksyen: dataCourse.kod_subjek + dataSeksyen.seksyen}
    const { dispatch } = this.props;
    dispatch({
      type: "COURSE_REGISTRATION_TABLE",
      dataSeksyen: dataSeksyen,
      dataCourse: dataCourse,
      insertCourseData: insertCourseData,
    });
    // this.setState({courseRegistrationTable: courseRegistrationTable.push(e)});
  };

  render() {
    let course = this.props.course;
    var data = [];

    course.map(
      (t) => data.push(t.courseSeksyen)
    );

    let dataSeksyen = this.props.dataSeksyen;
    let dataCourse = this.props.dataCourse;
    let numbers = this.props.numbers;
    let number = numbers + 1;
    return (
      <tr>
        <td align="center">{number}</td>
        <td align="left">{dataCourse.kod_subjek}</td>
        <td align="left">{dataCourse.nama_subjek}</td>
        <td align="left">{dataSeksyen.seksyen}</td>
        <td align="left">

          {dataSeksyen.table.map((dataList, index) => {
            let display = dataList.masa + dataList.hari;
            return dataList.hari === 1
              ? "SUN"
              : (dataList.hari === 2
                  ? "MON"
                  : dataList.hari === 3
                  ? "TUE"
                  : dataList.hari === 4
                  ? "WED"
                  : dataList.hari === 5
                  ? "THU"
                  : dataList.hari === 6
                  ? "FRI"
                  : dataList.hari === 7
                  ? "SAT"
                  : dataList.hari === 8
                  ? "SUN"
                  : "") +
                  dataList.masa.toString() +
                  ", ";
          })}
        </td>
        <td align="left">{dataSeksyen.pensyarah}</td>
        <td>

          {(data.includes(dataCourse.kod_subjek+dataSeksyen.seksyen)?(
            <Button
             style={{
               color: "white",
               background: "grey",
             }}
             disabled

           >
             disabled
           </Button>
          ):(<Button
            style={{
              color: "white",
              background: "green",
            }}
            data={{ data: dataSeksyen }}
            onClick={() => this.onAddSectionClick(dataSeksyen,dataCourse)}
          >
            Insert
          </Button>))}


        </td>
      </tr>
    );
  }
}

export default connect((state) => {
  return state;
})(RegistrationTable, CourseKeyInList);
