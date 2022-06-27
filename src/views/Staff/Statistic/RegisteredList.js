import React, { Component } from 'react';
import { connect } from "react-redux";
import { StudentActions } from "../../../__actions";
import Dates from "../../../__ifunc/dates";
import { Auth, CONSTANTS } from "../../../api";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Row,
  Col,
  Label,
  PaginationItem,
  PaginationLink,
  Pagination,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Button,
  // InputGroupAddon,
  InputGroup,
  Input,
  InputGroupText,

} from "reactstrap";

class RegisteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    StudentActions.getListStudent(this.props.dispatch);
    // ApexCharts.exec("basic-bar", "updateSeries", [
    //   {
    //     data: this.props.registrationSchedule.dataLatestSchedule.date,
    //   },
    // ]);
    // console.log(this.props.registrationSchedule.dataLatestSchedule.date)
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(value)
  }

  onPageButtonToggle = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };

  onPaginationCountChange = (count) => {
    const { dispatch } = this.props;
    dispatch({ type: CONSTANTS.STUDENT.STUDENT_COUNT_CHANGE, result: count });
  };

  onPaginationNav = (type) => {
    const { dispatch } = this.props
    const { pagination } = this.props.student

console.log(type)
  // nextPage = () => {
  //     this.setState({
  //         currentpage: this.state.currentpage + 1,
  //     });
  // }
  // previousPage = () => {
  //     if (this.state.currentpage > 1) {
  //         this.setState({
  //             currentpage: this.state.currentpage - 1,
  //         });
  //     }
  // }

    if (type === 'first') {
      dispatch({ type: CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE, result: 1 })
    } else if (type === 'prev') {
      dispatch({ type: CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE, result: pagination.currentPage - 5 })
    } else if (type === 'next') {
      dispatch({ type: CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE, result: pagination.currentPage + 5 })
    } else if (type === 'last') {
      dispatch({ type: CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE, result: pagination.totalPage })
    } else {
      dispatch({ type: CONSTANTS.STUDENT.STUDENT_PAGE_CHANGE, result: type })
    }
    console.log(type)
    console.log(pagination.currentPage)


  }

  onSearchName = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
    const { dispatch } = this.props;
    dispatch({
      type: CONSTANTS.STUDENT.STUDENT_SEARCH,
      result: e.target.value,
    });
    // console.log(e.target.value)
  };

  render() {
    let {dataList , data, pagination} = this.props.student
    console.log(data,pagination)
    return (
      <div>
        <Card>
          <CardBody>
          <Label className="h4">Registered Student List</Label>
          <InputGroup>
                          <Input
                            type="text"
                            placeholder="Search..."
                            value={this.state.searchValue}
                            onChange={this.onSearchName}
                            style={{
                              backgroundColor:
                                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                              borderColor:
                                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                            }}
                          />
                          {/* <InputGroupAddon addonType="append"> */}
                            <InputGroupText
                              style={{
                                backgroundColor: "#000000",
                                color: "white",
                                borderColor: "#FFFFFF",
                              }}
                            >
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 18,
                                  borderRadius: 10,
                                }}
                              ></i>
                            </InputGroupText>
                          {/* </InputGroupAddon> */}

                        </InputGroup>
                        <div className="text-muted small">
                          * Name, Matric Number
                        </div>
                        <div className="text-muted small">* Case sensitive</div>
          <Table
              className="table table-hover table-outline mb-0 d-none d-sm-table"
              hover
            >
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Matric No</th>
                  <th>Subjects count</th>
                  <th>Registration Date Attempt</th>
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

                {dataList.length === 0 ? (
                  <tr>
                    <td align="center" colSpan={4}>
                      No Data
                    </td>
                  </tr>
                ) : (
                  dataList.map((dataList, index) => (
                    <ListRow
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
            <CardFooter>
              <Row>
                <Col xs="12" sm="2" className="text-center text-sm-left mt-2 mt-sm-0 order-2 order-sm-1">
                  <ButtonDropdown isOpen={this.state.isDropdownOpen} toggle={e => { this.onPageButtonToggle() }}>
                    <Button size="sm" color="secondary" className="btn-ghost-*"><span className="lead font-sm font-italic">No. of rows: </span></Button>
                    <DropdownToggle caret size="sm" color="dark">
                      {pagination.itemPerPage}
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem onClick={() => { this.onPaginationCountChange(1) }}>1</DropdownItem>
                    <DropdownItem onClick={() => { this.onPaginationCountChange(3) }}>3</DropdownItem>
                      <DropdownItem onClick={() => { this.onPaginationCountChange(5) }}>5</DropdownItem>
                      <DropdownItem onClick={() => { this.onPaginationCountChange(10) }}>10</DropdownItem>
                      <DropdownItem onClick={() => { this.onPaginationCountChange(50) }}>50</DropdownItem>
                      <DropdownItem onClick={() => { this.onPaginationCountChange(100) }}>100</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </Col>
                <Col xs="12" sm="10" className="text-center text-sm-right order-1 order-sm-2">
                  <div style={{ display: 'inline-block' }}>
                    <Pagination size="sm" aria-label="Page navigation" className="table-pgn">
                      <PageFirst pagination={pagination} onClick={this.onPaginationNav} />
                      <PagePrev pagination={pagination} onClick={this.onPaginationNav} />
                      <PageItems pagination={pagination} onClick={this.onPaginationNav} />
                      <PageNext pagination={pagination} onClick={this.onPaginationNav} />
                      <PageLast pagination={pagination} onClick={this.onPaginationNav} />
                    </Pagination>
                  </div>
                </Col>
              </Row>
              <div className="text-left mt-2">
              page <strong>{pagination.currentPage}</strong> of <strong>{pagination.totalPage}</strong> page(s)
              </div>
              <div className="text-right">
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class ListRow
 extends Component {
  render() {
    let dataList = this.props.dataList;
    const numbers = this.props.numbers;
    let number = numbers + 1;

    return (
      <>
      <tr>
          <td>{number}</td>
          <td>{dataList.name}</td>
          <td>{dataList.matricNo}</td>
          <td>{dataList.Registration.length}</td>
          <td>
            {Dates.format(dataList.createdDate, Dates.FORMAT.DATE_TIME5)}
          </td>
          </tr>

      </>
    );
  }
}

const PageFirst = ({ pagination, onClick }) => {
  if (pagination.currentPage === 1) {
    return (
      <PaginationItem disabled>
        <PaginationLink first={true} />
      </PaginationItem>
    )
  }
  return (
    <PaginationItem>
      <PaginationLink first={true} onClick={() => { onClick("first") }} />
    </PaginationItem>
  )
}

const PagePrev = ({ pagination, onClick }) => {
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5)
  console.log("pagination",pagination.currentPage,"pageCurSec :",pageCurrentSection)
  if (pageCurrentSection === 1) {
    return (
      <PaginationItem disabled>
        <PaginationLink previous  />

      </PaginationItem>
    )
  }
  return (
    <PaginationItem>
      <PaginationLink previous onClick={() => { onClick("prev") }} />
    </PaginationItem>
  )
}
const PageItems = ({ pagination, onClick }) => {
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5)
  let pageCurrentMax = 5
  if (pagination.totalPage < 5) {
    pageCurrentMax = pagination.totalPage
  } else {
    if ((pageCurrentSection * 5) > pagination.totalPage) {
      pageCurrentMax = 5 - ((pageCurrentSection * 5) - pagination.totalPage)
    }
  }

  let pageCount = Array.from(Array(pageCurrentMax), (_, x) => (((pageCurrentSection - 1) * 5) + 1 + x))
  return pageCount.map((page) => {
    let active = true
    if (page !== pagination.currentPage) {
      active = false
    }
    return (
      <PaginationItem key={page} active={active}>
        <PaginationLink onClick={() => { onClick(page) }}>
          {page}
        </PaginationLink>
      </PaginationItem>
    )
  })
}
const PageNext = ({ pagination, onClick }) => {
  let pageMaxSection = Math.ceil(pagination.totalPage / 5)
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5)

  if (pageMaxSection === pageCurrentSection) {
    return (
      <PaginationItem disabled>
        <PaginationLink next />
      </PaginationItem>
    )
  }
  return (
    <PaginationItem>
      <PaginationLink next onClick={() => { onClick("next") }} />
    </PaginationItem>
  )
}
const PageLast = ({ pagination, onClick }) => {
  console.log(pagination.currentPage,pagination.totalPage)
  if (pagination.currentPage === pagination.totalPage) {
    return (
      <PaginationItem disabled>
        <PaginationLink last />
      </PaginationItem>
    )
  }
  return (
    <PaginationItem>
      <PaginationLink last onClick={() => { onClick("last") }} />
    </PaginationItem>
  )
}


export default connect((state) => {
  return state;
})(RegisteredList);
