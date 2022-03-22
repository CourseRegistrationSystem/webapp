import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import { Line, Pie } from "react-chartjs-2";
import carimage from '../../../assets/img/bg/myvi.png'
import Map from './../../../__components/mapOneCar'
import Loader from './../../../__components/Loader'
import {useMainContext} from './../../../context/context'
import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  CardHeader,
  CardFooter,
  Col,
  CardTitle,
  FormGroup,
  ListGroupItem,
  Row,
  Button,

} from 'reactstrap'

import {
  analysisRecord,
} from "../../../__components/charts";

function OneCarAnalysis() {
  const {setEventData, reRenderMarkers} = useMainContext();
  const [loading, setLoading] = useState(false);
  //Event to Render
  const [renderEvent, setRenderEvent] = useState([]);
  // const { Panel } = Collapse;

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://run.mocky.io/v3/c066e936-4a0d-4697-bebf-f947a95a5f40");
      //Extract the Array contained in the 'events' field.
      const {events} = await res.json();
      //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
      setEventData(events);
      setRenderEvent(events);
      setLoading(false);
      console.log(((events[0])))
    }
    fetchEvents();
  }, [])

  useEffect(() => {
    if(reRenderMarkers !== null){
      setRenderEvent(reRenderMarkers);
    }
  }, [reRenderMarkers])
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <h1> Car History Analysis </h1><br/><hr/>

          <Row>
              <Col md={4} className='p-5 '>
              <div className='p-3' style={{textAlign:'Left'}}><h3>Calendar</h3></div>
              <Calendar
                onChange={onChange}
                value={value}
              />
              </Col>
              <Col md={8} className='p-5 '>
              <div className='p-3' style={{textAlign:'Left'}}><h3>Speed Record Analysis</h3></div>
              <Line
                  data={analysisRecord.data}
                  options={analysisRecord.options}
                  width={400}
                  height={110}
                />
              </Col>
            </Row>


        </CardBody>
      </Card>

      <Row>
        <Col lg={7}>
        <CardHeader className="bg-grey shadow ">
                                <Row>
                                    <Col md="5" className="mt-md-auto text-left h3"><i className=" font-xl icons mr-2 text-primary"></i>Details on (date)</Col>
                                </Row>
                            </CardHeader>
          <Card className='shadow p-3 mb-5 bg-white rounded'>
            <CardBody>


            <table  cellspacing="10" cellpadding="10" width='100%'>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td border='1' ><strong>Total Trial Time</strong></td>
<td >5 Hours 23 Minutes</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Total Distance Travel</strong></td>
<td >35.7 km</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Maximum Speed Achieve</strong></td>
<td >105.3 km/h</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Average Traveling Speed</strong></td>
<td >50.3 ms</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Maximum Acceleration</strong></td>
<td >40.3 ms</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Average Acceleration</strong></td>
<td >30.3 ms</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Maximum Declaration</strong></td>
<td >N/A</td>
</tr>
<tr style={{borderLeft: 'thin solid', borderTop: 'thin solid', borderBottom: 'thin solid', borderRight: 'thin solid'}}>
<td><strong>Average Declaration</strong></td>
<td >N/A</td>
</tr>
</table>
</CardBody >
<hr/>


<div className='p-3' style={{marginLeft : '30px'}}>
  <h4><strong>Achieve Record</strong></h4>
<table cellspacing="10" cellpadding="5" width='50%'>
<tr >
<td ><strong>Highest Speed Achieve</strong></td>
<td >99.1 km/h (23 July 2021)</td>
</tr>
<tr>
<td><strong>Highest Acceleration Achieve</strong></td>
<td >50.3 m/s (23 July 2021)</td>
</tr>
<tr>
<td><strong>Highest Declaration Achieve</strong></td>
<td >??? (25 July 2021)</td>
</tr>

</table>

</div>
          </Card>
        </Col>


        <Col lg={5}>
        <CardHeader className="bg-grey shadow ">
                                <Row>
                                    <Col md="5" className="mt-md-auto text-left h3"><i className="font-xl icons mr-2 text-primary"></i>Route Log</Col>
                                </Row>
                            </CardHeader>
          <Card className='shadow p-3 mb-5 bg-white rounded ' style={{height: '600px'}}>

            <CardBody>
            <table className="table table-hover table-outline mb-0 d-none d-sm-table" >

              <tr>
                <td>
                  {!loading ? <Map style={{width: 'auto', height: '600px'}} eventData={renderEvent}/>: <Loader/>}

                </td>

              </tr>


              </table>

            <table className="table table-hover table-outline mb-0 d-none d-sm-table" style={{display: 'block'}}>



  <thead className="thead-light" style={{width: '100%',display: 'table',tableLayout: 'fixed'}}>
    <tr>
      <th className="text-center">No</th>
      <th className="text-center">Time</th>
      <th className="text-center">Coordinate</th>
      <th className="text-center">Issue</th>

    </tr>
  </thead>

  <tbody className='overflow-auto ' style={{height: '150px',overflowY: 'scroll',display: 'block'}}>
  {/* <div className='overflow-auto ' > */}
  <tr style={{width: '100%',display: 'table',tableLayout: 'fixed'}}>
      <td className="text-center">
        <div >1</div>
      </td>
      <td className="text-center">
        <div className="text-center">09:05:15</div>
        <div className="text-center small text-muted">
          <span>29-09-2021</span>
        </div>
      </td>
      <td className="text-center">
      1.55967, 103.6386
      </td>
      <td className="text-center">
      <div>Start</div>
      </td>
  </tr>
  <tr style={{width: '100%',display: 'table',tableLayout: 'fixed'}}>
      <td className="text-center">
        <div >2</div>
      </td>
      <td className="text-center">
        <div className="text-center">09:15:45</div>
        <div className="text-center small text-muted">
          <span>29-09-2021</span>
        </div>
      </td>
      <td className="text-center">
      1.55967, 103.6386
      </td>
      <td className="text-center">
      <div>-</div>
      </td>
  </tr>
  <tr style={{width: '100%',display: 'table',tableLayout: 'fixed'}}>
      <td className="text-center">
        <div >3</div>
      </td>
      <td className="text-center">
        <div className="text-center">09:25:55</div>
        <div className="text-center small text-muted">
          <span>29-09-2021</span>
        </div>
      </td>
      <td className="text-center">
      1.55967, 103.6386
      </td>
      <td className="text-center">
      <div>-</div>
      </td>
  </tr>
  <tr style={{width: '100%',display: 'table',tableLayout: 'fixed'}}>
      <td className="text-center">
        <div >4</div>
      </td>
      <td className="text-center">
        <div className="text-center">09:41:15</div>
        <div className="text-center small text-muted">
          <span>29-09-2021</span>
        </div>
      </td>
      <td className="text-center">
      1.55967, 103.6386
      </td>
      <td className="text-center">
      <div>End</div>
      </td>
  </tr>
  {/* </div> */}
  </tbody>

</table>
<div >* The route log history are filtered by every 5km distances</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
        {/* <Col lg={5}>
        <CardHeader className="bg-grey shadow ">
                                <Row>
                                    <Col md="5" className="mt-md-auto text-left h3"><i className="font-xl icons mr-2 text-primary"></i>Produa Myvi, 2010</Col>
                                </Row>
                            </CardHeader>
          <Card className='shadow p-3 mb-5 bg-white rounded'>

            <CardBody> */}
            {/* <img src={carimage} className="img-avatar centerElement" style={{ height: "200px", width: "300px"}} alt="admin@bootstrapmaster.com" />
            <p className='centerElement p-3'><strong>JBC 2020</strong></p>
            <table cellspacing="10" cellpadding="5" width='100%'>


<tr>
<td width='200px'><strong>GPS measurement</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Speed measurement</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Throttle pedal positions</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Breake pedal switch</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Steering position</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Automation/manual alarm</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>

</table> */}
{/* </CardBody>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
}

export default OneCarAnalysis;
