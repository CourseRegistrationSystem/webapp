import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { RegisterScheduleActions } from "../../../__actions";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Row,
  Col,
} from "reactstrap";

// let test = this.props.registrationSchedule.dataLatestSchedule.date
// console.log(test)
var data = []

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: data.slice(),
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,12,32,12, 40, 45, 50,49, 60, 70, 49, 60, 70, 91,12,32,12],
        },
      ],
    };
  }

  componentDidMount() {
    RegisterScheduleActions.getListSchedule(this.props.dispatch);
    // ApexCharts.exec("basic-bar", "updateSeries", [
    //   {
    //     data: this.props.registrationSchedule.dataLatestSchedule.date,
    //   },
    // ]);
    // console.log(this.props.registrationSchedule.dataLatestSchedule.date)
  }

  render() {
    let {dataRegistrationSchedule,dataLatestSchedule,test} = this.props.registrationSchedule
    console.log(dataRegistrationSchedule,dataLatestSchedule.date,test)


    // console.log(this.props.registrationSchedule.dataLatestSchedule.date.slice())
    let array = []
    // for(let a=0;a<dataLatestSchedule.date.length;a++){
    //   array.push(dataLatestSchedule.date[a])
    // }
    array = dataLatestSchedule.date
    console.log('ori',array)
    array = ['01/06/2022','02/06/2022','03/06/2022','04/06/2022','05/06/2022','06/06/2022','07/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022','01/06/2022']
    console.log('dummy',array)
    this.state.options.xaxis.categories = array

    // this.setState({options:{xaxis: {categories: dataLatestSchedule.date}}})
    return (
      <div>
        <Card>
          <CardBody>
            {/* <div className="app"> */}
              <div className="row">
                <div className="mixed-chart col">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    // width='400%'
                    height={300}
                  />
                </div>
              </div>
            {/* </div> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default connect((state) => {
  return state;
})(BarChart);
