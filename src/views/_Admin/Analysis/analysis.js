
import React from 'react';
// import '../coreui-4.0.0/dist/css/coreui.min.css'
// import '../coreui-4.0.0/dist/js/coreui.bundle.min.js'

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


} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Doughnut, Pie } from "react-chartjs-2";
import 'chartjs-plugin-labels';

const KPI = {
  labels: ['Pass', 'Failed'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#0F123F',
        '#CFD8DC',

      ],
      hoverBackgroundColor: [
      '#0F123F',
      '#CFD8DC',

      ],
      data: [8, 3]
    }
  ]
}

const AREA = {
  labels: ['In Located Area', 'Outside Located Area'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        'Orange',
        '#CFD8DC',

      ],
      hoverBackgroundColor: [
      'Orange',
      '#CFD8DC',

      ],
      data: [8, 3]
    }
  ]
}

const ACTIVE = {
  labels: ['Online', 'Offline'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#3BB143',
        '#CFD8DC',

      ],
      hoverBackgroundColor: [
      '#3BB143',
      '#CFD8DC',

      ],
      data: [4, 1]
    }
  ]
}

const TRAINED = {
  labels: ['Car 1', 'Car 2', 'Car 3', 'Car 4', 'Car 5'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#FDA172',
        '#FF8C00',
        '#FC6A03',
        '#DD571C',
        '#CFD8DC',

      ],
      hoverBackgroundColor: [
        '#CFD8DC',
        '#CFD8DC',
        '#CFD8DC',
        '#CFD8DC',
        '#CFD8DC',

      ],
      data: [14, 24, 20, 18, 24]
    }
  ]
}

function Analysis() {


  return (
// {/* <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//   <div class="toast-header">
//     <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img"><rect width="100%" height="100%" fill="#007aff"/></svg>

//     <strong class="mr-auto">Bootstrap</strong>
//     <small class="text-muted">11 mins ago</small>
//     <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//   <div class="toast-body">
//     Hello, world! This is a toast message.
//   </div>
// </div> */}
<>
<Card className='shadow p-3 mb-5 bg-white rounded'>
<CardBody>
  <h1>Training Analysis</h1><br/>
<table className="table table-hover table-outline mb-0 d-none d-sm-table">
  <thead className="thead-light">
    <tr>
      <th className="text-center">No</th>
      <th className="text-center">Vehicle Model</th>
      <th className="text-center">Licence Plate</th>
      <th className="text-center">Owner Name</th>
      <th className="text-center">Total Training</th>
      <th className="text-center">Total Hours Trainig</th>
      <th className="text-center">Performance</th>
      <th className="text-center">Analysis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-center">
        <div >1</div>
      </td>
      <td>
        <div>Perodua Myvi, 2010</div>
      </td>
      <td className="text-center">
      WBC 0127
      </td>
      <td>
      <div className="text-center">Ahmad Jalal bin Izzudin</div>
        <div className="text-center small text-muted">
          <span>011-2348372</span>
        </div>
      </td>
      <td className="text-center">
      14
      </td>
      <td className="text-center">
      13 hours 23 Minutes
      </td>
      <td className="text-center" style={{ color: 'Green' }}>
      <strong>93%</strong>
      </td>
      <td className="text-center">
      <Link to='/carDetails/oneCar'>
        <Button outline color="primary">Analysis</Button>{' '}
        </Link>
      </td>
    </tr>
    <tr>
      <td className="text-center">
        <div >2</div>
      </td>
      <td>
        <div>Proton X70, 2010</div>
      </td>
      <td className="text-center">
      WJK 034
      </td>
      <td>
      <div className="text-center">Muhd Muizzuddin Bin Tarmizi</div>
        <div className="text-center small text-muted">
          <span>011-144090009</span>
        </div>
      </td>
      <td className="text-center">
      24
      </td>
      <td className="text-center">
      33 hours 23 Minutes
      </td>
      <td className="text-center" style={{ color: 'Red' }}>
      <strong>45%</strong>
      </td>
      <td className="text-center">
      <Link to='/carDetails'>
        <Button outline color="primary">Analysis</Button>{' '}
        </Link>
      </td>
    </tr>
    <tr>
      <td className="text-center">
        <div >3</div>
      </td>
      <td>
        <div>Perodua Exora, 2010</div>
      </td>
      <td className="text-center">
      WWJ 0887
      </td>
      <td>
      <div className="text-center">Ahmad Fariz Bin Zuhair</div>
        <div className="text-center small text-muted">
          <span>011-2348372</span>
        </div>
      </td>
      <td className="text-center">
      20
      </td>
      <td className="text-center">
      43 hours 23 Minutes
      </td>
      <td className="text-center" style={{ color: 'Green' }}>
      <strong>85%</strong>
      </td>
      <td className="text-center">
      <Link to='/carDetails'>
        <Button outline color="primary">Analysis</Button>{' '}
        </Link>
      </td>
    </tr>
    <tr>
      <td className="text-center">
        <div >4</div>
      </td>
      <td>
        <div>Proton X50, 2010</div>
      </td>
      <td className="text-center">
      WCC 8721
      </td>
      <td>
      <div className="text-center">Zuhayr Faizul Bin Jalal</div>
        <div className="text-center small text-muted">
          <span>011-2348372</span>
        </div>
      </td>
      <td className="text-center">
      18
      </td>
      <td className="text-center">
      43 hours 23 Minutes
      </td>
      <td className="text-center" style={{ color: 'Orange' }}>
      <strong>65%</strong>
      </td>
      <td className="text-center">
      <Link to='/carDetails'>
        <Button outline color="primary">Analysis</Button>{' '}
        </Link>
      </td>
    </tr>
    <tr>
      <td className="text-center">
        <div >5</div>
      </td>
      <td>
        <div>BMW X3, 2010</div>
      </td>
      <td className="text-center">
      WJE 9922
      </td>
      <td>
      <div className="text-center">Kumaran A/L Rajagobal</div>
        <div className="text-center small text-muted">
          <span>011-144090009</span>
        </div>
      </td>
      <td className="text-center">
      24
      </td>
      <td className="text-center">
      63 hours 23 Minutes
      </td>
      <td className="text-center" style={{ color: 'Green' }}>
      <strong>85%</strong>
      </td>
      <td className="text-center">
        <Link to='/carDetails'>
        <Button outline color="primary">Analysis</Button>{' '}
        </Link>

      </td>
    </tr>

  </tbody>
</table>
</CardBody>
</Card>


<Row>
  <Col lg={3}>
  <Card className='shadow p-3 mb-5 bg-white rounded' >
  <CardBody>
  <h3 style={{ color: '#0F123F' }}>KPI Performance</h3>
  <span>Performance data by all tested MyAV</span>
  <Doughnut
          // height='300%'
          width='90%'
          data={KPI}
          options={
            {
            // title:{
            //   display:true,
            //   text:'Average Rainfall per month',
            //   fontSize:20

            // },
            legend:{
              display:true,
              position:'bottom'
            },
            datalabels: {
              display: true,
              color: "black",
            },
            tooltips: {
              backgroundColor: "#5a6e7f"
            },

          }}

        />
  </CardBody>

  </Card>
  </Col>
  <Col lg={3}>
  <Card className='shadow p-3 mb-5 bg-white rounded' >
  <CardBody>
  <h3 style={{ color: '#0F123F' }}>In Region Area</h3>
  <span>MyAV status at respective host area</span>
  <Doughnut
          // height='300%'
          width='90%'
          data={AREA}
          options={
            {
            // title:{
            //   display:true,
            //   text:'Average Rainfall per month',
            //   fontSize:20

            // },
            legend:{
              display:true,
              position:'bottom'
            },
            datalabels: {
              display: true,
              color: "black",
            },
            tooltips: {
              backgroundColor: "#5a6e7f"
            },

          }}

        />
  </CardBody>

  </Card>
  </Col>
  <Col lg={3}>
  <Card className='shadow p-3 mb-5 bg-white rounded' >
  <CardBody>
  <h3 style={{ color: '#0F123F' }}>MyAV Status</h3>
  <span>MyAV online status</span>
  <Doughnut
          // height='300%'
          width='90%'
          data={ACTIVE}
          options={
            {
            // title:{
            //   display:true,
            //   text:'Average Rainfall per month',
            //   fontSize:20

            // },
            legend:{
              display:true,
              position:'bottom'
            },
            datalabels: {
              display: true,
              color: "black",
            },
            tooltips: {
              backgroundColor: "#5a6e7f"
            },

          }}

        />
  </CardBody>

  </Card>
  </Col>
  <Col lg={3}>
  <Card className='shadow p-3 mb-5 bg-white rounded' >
  <CardBody>
  <h3 style={{ color: '#0F123F' }}>Training Overview</h3>
  <span>Training count by all tested MyAV</span>
  <Doughnut
          // height='300%'
          width='90%'
          data={TRAINED}
          options={
            {
            // title:{
            //   display:true,
            //   text:'Average Rainfall per month',
            //   fontSize:20

            // },
            legend:{
              display:true,
              position:'bottom'
            },
            datalabels: {
              display: true,
              color: "black",
            },
            tooltips: {
              backgroundColor: "#5a6e7f"
            },

          }}

        />
  </CardBody>

  </Card>
  </Col>
</Row>



</>
  );
}

export default Analysis;
