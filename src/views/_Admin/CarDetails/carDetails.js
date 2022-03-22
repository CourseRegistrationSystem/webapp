
// import React from 'react';
// import {Icon} from '@iconify/react';
// // import '../coreui-4.0.0/dist/css/coreui.min.css'
// // import '../coreui-4.0.0/dist/js/coreui.bundle.min.js'
// import navigationVariant from '@iconify/icons-mdi/navigation-variant';
// import cogIcon from '@iconify/icons-mdi/cog';
// import trashCan from '@iconify/icons-mdi/trash-can';
// import carimage from '../../../assets/img/bg/myvi.png'
// import {
//   Card,
//   CardBody,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   ModalFooter,
//   CardHeader,
//   CardFooter,
//   Col,
//   CardTitle,
//   FormGroup,
//   ListGroupItem,
//   Row,
//   Button,

// } from 'reactstrap'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// function CarDetails() {


//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   return (
// // {/* <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
// //   <div class="toast-header">
// //     <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img"><rect width="100%" height="100%" fill="#007aff"/></svg>

// //     <strong class="mr-auto">Bootstrap</strong>
// //     <small class="text-muted">11 mins ago</small>
// //     <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
// //       <span aria-hidden="true">&times;</span>
// //     </button>
// //   </div>
// //   <div class="toast-body">
// //     Hello, world! This is a toast message.
// //   </div>
// // </div> */}
// <>
// <Card className='shadow p-3 mb-5 bg-white rounded'>
// <CardBody>
//   <h1>Car Information</h1><br/>
// <table className="table table-hover table-outline mb-0 d-none d-sm-table">
//   <thead className="thead-light">
//     <tr>
//       <th className="text-center">No</th>
//       <th className="text-center">Vehicle Model</th>
//       <th className="text-center">Licence Plate</th>
//       <th className="text-center">Owner Name</th>
//       <th className="text-center">Detector Health</th>
//       <th className="text-center">BOD Serial Number</th>
//       <th className="text-center">Last Track Online</th>
//       <th className="text-center">Information</th>

//     </tr>
//   </thead>
//   <tbody>
//   <tr>
//       <td className="text-center">
//         <div >1</div>
//       </td>
//       <td>
//         <div>Produa Myvi, 2010</div>
//       </td>
//       <td className="text-center">
//       WBC 0127
//       </td>
//       <td>
//       <div className="text-center">Ahmad Jalal bin Izzudin</div>
//         <div className="text-center small text-muted">
//           <span>011-2348372</span>
//         </div>
//       </td>
//       <td className="text-center">
//       7/7
//       </td>
//       <td className="text-center">
//       B123-A78910
//       </td>
//       <td className="text-center">
//       29/8/2021 02:40 am
//       </td>
//       <td className="text-center">
//       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
//       <Icon className='grow icon update' icon={cogIcon} height="25" />
//       <Link onClick={''}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
//       </td>
//     </tr>
//     <tr>
//       <td className="text-center">
//         <div >2</div>
//       </td>
//       <td>
//         <div>Proton X70, 2010</div>
//       </td>
//       <td className="text-center">
//       WJK 034
//       </td>
//       <td>
//       <div className="text-center">Muhd Muizzuddin Bin Tarmizi</div>
//         <div className="text-center small text-muted">
//           <span>011-2348372</span>
//         </div>
//       </td>
//       <td className="text-center">
//       7/7
//       </td>
//       <td className="text-center">
//       B123-A78910
//       </td>
//       <td className="text-center">
//       29/8/2021 02:40 am
//       </td>
//       <td className="text-center">
//       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
//       <Icon className='grow icon update' icon={cogIcon} height="25" />
//       <Link onClick={''}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
//       </td>
//     </tr>
//     <tr>
//       <td className="text-center">
//         <div >3</div>
//       </td>
//       <td>
//         <div>Produa Myvi, 2010</div>
//       </td>
//       <td className="text-center">
//       WWJ 0887
//       </td>
//       <td>
//       <div className="text-center">Ahmad Fariz Bin Zuhair</div>
//         <div className="text-center small text-muted">
//           <span>011-2348372</span>
//         </div>
//       </td>
//       <td className="text-center">
//       7/7
//       </td>
//       <td className="text-center">
//       B123-A78910
//       </td>
//       <td className="text-center">
//       29/8/2021 02:40 am
//       </td>
//       <td className="text-center">
//       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
//       <Icon className='grow icon update' icon={cogIcon} height="25" />
//       <Link onClick={''}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
//       </td>
//     </tr>
//     <tr>
//       <td className="text-center">
//         <div >4</div>
//       </td>
//       <td>
//         <div>Proton X50, 2010</div>
//       </td>
//       <td className="text-center">
//       WCC 8721
//       </td>
//       <td>
//       <div className="text-center">Zuhayr Faizul Bin Jalal</div>
//         <div className="text-center small text-muted">
//           <span>011-2348372</span>
//         </div>
//       </td>
//       <td className="text-center">
//       7/7
//       </td>
//       <td className="text-center">
//       B123-A78910
//       </td>
//       <td className="text-center">
//       29/8/2021 02:40 am
//       </td>
//       <td className="text-center">
//       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
//       <Icon className='grow icon update' icon={cogIcon} height="25" />
//       <Link onClick={''}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
//       </td>
//     </tr>
//     <tr>
//       <td className="text-center">
//         <div >5</div>
//       </td>
//       <td>
//         <div>WJE 9922, 2010</div>
//       </td>
//       <td className="text-center">
//       BMW X3
//       </td>
//       <td>
//       <div className="text-center">Kumaran A/L Rajagobal</div>
//         <div className="text-center small text-muted">
//           <span>011-2348372</span>
//         </div>
//       </td>
//       <td className="text-center">
//       7/7
//       </td>
//       <td className="text-center">
//       B123-A78910
//       </td>
//       <td className="text-center">
//       29/8/2021 02:40 am
//       </td>
//       <td className="text-center">
//       <Link to='/carDetails/oneCar'>
//       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
//       </Link>
//         <Icon className='grow icon update' icon={cogIcon} height="25" />
//       <Link to='#' onClick={toggle}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
//       <Modal isOpen={modal} toggle={toggle}   >
//         <ModalHeader toggle={toggle}>Are You Sure want to remove this car ?</ModalHeader>
//         <ModalBody >
//         <img src={carimage} className="img-avatar mx-0" style={{ height: "200px", width: "300px" }} alt="admin@bootstrapmaster.com" />
//           <div><strong>BMW X3, 2010 - WJE 9922</strong></div>
//           <div>Owner - Kumaran A/L Rajagobal</div>
//           <br/>
//           <Button className="mx-2" style={{background : 'red',color: 'white', width: '150px'}} onClick={toggle}>Delete</Button>{' '}
//           <Button className="mx-2" style={{width: '150px'}} onClick={toggle}>Cancel</Button>
//         </ModalBody>
//         {/* <ModalFooter>
//           <Button className="mx-2" color="primary" onClick={toggle}>Do Something</Button>{' '}
//           <Button className="mx-2" color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter> */}
//       </Modal>
//       </td>
//     </tr>

//   </tbody>
// </table>
// </CardBody>

// </Card>
// <Link to='/carDetails/newCar'>
// <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#47B064'}} onClick=''>Add New Car</Button>
// </Link>

// </>
//   );
// }

// function shoot() {
//   alert("Successfully Registered");
// }

// export default CarDetails;


import React, {useState, useEffect, Component } from 'react';
import {Icon} from '@iconify/react';
// import '../coreui-4.0.0/dist/css/coreui.min.css'
// import '../coreui-4.0.0/dist/js/coreui.bundle.min.js'
import TableCarDetails from './TableCarDetails';
import {  DevicedataActions } from '../../../__actions'

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
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

  class CarDetails extends Component {

    constructor(props) {
      super(props);
  
      console.log(props)
      
      this.state = {
  
  
        // dropdownOpen: false,
        // radioSelected: Tick.Day,
  
        // monthName: Dates.getMonthName(new Date()),
        // month: new Date().getMonth() + 1,
        // year: Dates.getYear(new Date()),
  
        // showPrev: true,
        // showNext: true,
  
        // dates: Dates.getToday('yyyy-mm-dd'),
  
      };
  
    }

    async componentDidMount() {
      // this.getData();
      DevicedataActions.getLatestData(this.props.dispatch)
      // this.intervalID = setInterval(() => this.tick(), 1000);
      // this.intervalID = setInterval(() => this.props.dispatch, 5000);
      // setInterval(this.getData, 5000); // runs every 5 seconds.
      // const {selectedEvent} = useMainContext();
      // console.log(selectedEvent)
      
    }
  
    
    componentWillUnmount() {
      window.location.reload()
    }


    render()
{  
  
  const types = this.props.dashboard.errorSystem.types
  console.log({ types })

  const { data } = this.props.dashboard
  console.log({data})

  return (
    <>
<Card className='shadow p-3 mb-5 bg-white rounded'>
 <CardBody>
   <h1>Car Information</h1><br/>
  <TableCarDetails
  data={data}
  dispatch={this.props.dispatch}
  >
    
  
  </TableCarDetails>
  </CardBody>
  </Card>

<Link to='/carDetails/newCar'>
<Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#47B064'}} onClick=''>Add New Car</Button>
</Link>

</>
  );
}
  }
  
function shoot() {
  alert("Successfully Registered");
}

export default connect(state => { return state })(CarDetails) ;
