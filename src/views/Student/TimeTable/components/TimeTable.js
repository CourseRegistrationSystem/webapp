import React, { Component } from 'react';
import {CONSTANTS } from "../../../../api";
import { connect } from "react-redux";



class TimeTable extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    console.log(props)

    this.state = {
      checked: 1,
      dropdownOpen: false,
      dropDownValue: 'Select action',
      selectedSession: this.props.currentSession
    };
  }


  changeValue(e) {
    const { dispatch } = this.props
    console.log(dispatch)

    this.setState({dropDownValue: e.currentTarget.textContent});
    let id = e.currentTarget.getAttribute("id");
    dispatch({ type: CONSTANTS.COURSE.GET_SELECTED_TIMETABLE_LIST, result: id })
    this.setState({selectedSession: id});
}
  toggle(event) {

    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

  render() {
    // console.log(this.props.data)


    return (
<>
</>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(TimeTable);
