import React, { Component } from 'react';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { CourseActions } from "../../../__actions";
import Dates from "../../../__ifunc/dates";
import ShowTimeTable from './ShowTimeTable';
import countdown from "countdown"

import {
  Card,
  CardBody,
} from "reactstrap";

// TimeAgo.addDefaultLocale(en);

class DisplayAlreadyRegistered extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      // timeAgo: new TimeAgo("en-US"),
      curTime: null,
    };
  }

  componentDidMount(){
    setInterval( () => {
      this.setState({
        // curTime : date
      })
      // console.log(this.state.curTime)
    },1000)
  }
  // handleClick = (date) => {
  //   setInterval( () => {
  //     this.setState({
  //       curTime : date
  //     })
  //     // console.log(this.state.curTime)
  //   },1000)
  // }

  render() {
    let {checkEligible} = this.props
    // console.log(checkEligible)

    return (
      <div>
        <Card>
          <CardBody>
            {(checkEligible.type === 2)?(<ShowTimeTable data={checkEligible.data.registerDetails}></ShowTimeTable>):( checkEligible.message)}
          </CardBody>
        </Card>

        {(checkEligible.type === 1)?(

<Card>
<CardBody>
  <div className="text-center h1">
    {checkEligible.message}
  </div>
  <div className="text-center h3">{(Dates.format(checkEligible.data.startDateTime, Dates.FORMAT.DATE4))}</div>
  <div className="text-center h3">{(Dates.format(checkEligible.data.startDateTime, Dates.FORMAT.TIME4))}</div>
  <div className="text-center">
    Countdown:{" "}
    {countdown( new Date(checkEligible.data.startDateTime) ).toString()}
  </div>
</CardBody>
</Card>
        ):("")}
      </div>
    );
  }
}

export default DisplayAlreadyRegistered;
