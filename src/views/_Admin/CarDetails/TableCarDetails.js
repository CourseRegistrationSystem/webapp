import React, { Component } from 'react';
import Geocode from "react-geocode";
import {  DevicedataActions } from '../../../__actions'

//icon
import {Icon} from '@iconify/react';
 import cogIcon from '@iconify/icons-mdi/cog';
 import trashCan from '@iconify/icons-mdi/trash-can';

 //image
 import carimage from '../../../assets/img/bg/myvi.png'
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
    Label,
    Button,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Collapse,
    ListGroupItemText,
  Modal,
   ModalBody,
   ModalHeader,
   ModalFooter,
  
  } from 'reactstrap'

  import { Link } from 'react-router-dom';

  class HistoryRow extends Component {
    constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this);
      this.onUpdateUserClick = this.onUpdateUserClick.bind(this)
      this.onInputChange = this.onInputChange.bind(this)

  
      this.state = {
        updateDevice: false,
        deleteDevice: false,
        removeuser: false,
        edituser: false,
        
        showMessage: false,
        // owner information
        id: '',
        ownerName: '',
        ownerIc: '',
        ownerPhoneNum: '',
        ownerLicenseNum: '',
        ownerBirthDate: '',

        // vehicle information
        name: '',
        category: '',
        vehiclePlateNum: '',
        vehicleChasisNum: '',
        vehicleEngineNumber: '',
      }
    }
 
    toggle(show) {
      console.log('toggle : '+show)
      this.setState({ show });
    }

    showModal = e => {
      console.log('toggle : '+e)
      this.setState({
        show: true
        
      })
      console.log('toggle : '+e)
      ;
    };

    showModal = (modal) => {
      console.log('modal ->', modal)
      this.setState({
        // [modal]: true
        modal: !modal
      });
    };

    // toggle = () => this.setState((currentState) => ({show: !currentState.show}));

    dropdownToggle = (dropdownOpen) => {
      console.log('toggle : '+dropdownOpen)
      this.setState({
        dropdownOpen: !dropdownOpen
      })
    }

    toggle1() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
      });
    }

    toggleDeleteDevice = () => {
      this.setState({
          deleteDevice: !this.state.deleteDevice,
      });
    }

    toggleUpdateDevice = (deviceId) => {
      console.log(deviceId)
      this.setState({
          updateDevice: !this.state.updateDevice,
          id : deviceId
      });
    
    }

    onUpdateUserClick() {
      if (this.state.ownerName === '') {
        this.setState({ showMessage: true, Message: 'Please fill in fullname.' })
      }
      // else if (this.state.contact === '') {
      //   this.setState({ showMessage: true, Message: 'Please fill in contact number.' })
      // }
      // else if (this.state.userRole === '') {
      //   this.setState({ showMessage: true, Message: 'Please select user Role.' })
      // }
  
      if (this.state.showMessage) {
        this.setState({ showMessage: false })
      }
  
      let _param = {
        // id: this.state.id,
        ownerName: this.state.ownerName,
        // category: this.state.category,
        // ownerIc: this.state.ownerIc,
        // ownerPhoneNum: this.state.ownerPhoneNum,
        // ownerLicenseNum: this.state.ownerLicenseNum,
        // ownerBirthDate: this.state.ownerBirthDate,

        // name: this.state.name,
        // vehiclePlateNum: this.state.vehiclePlateNum,
        // vehicleChasisNum: this.state.vehicleChasisNum,
        // vehicleEngineNumber: this.state.vehicleEngineNumber,

      }

      const { dispatch } = this.props

      

      DevicedataActions.updateDevice(this.state.id,_param)
      .then(result => {
        this.setState({ updateDevice: !this.state.updateDevice });
        // this.componentDidMount()
        window.location.reload(false);
        // DevicedataActions.getLatestData(dispatch)
        // console.log(dispatch)
        
      }
      , 
      error => {
        //console.log('=======error=========='+error)
        this.setState({
          showMessage: true,
          Message: + error
        });
      })
  
      // if (this.props.authorization.user.role === CONSTANTS.ROLE.ADMIN) {
      //   if (this.state.userRole === '1') {
      //     _param.userRole = CONSTANTS.ROLE.MANAGER.toLowerCase()
      //     userActions.updateManager(_param).then(result => {
      //       this.setState({ edituser: !this.state.edituser });
      //       userActions.getListUser(this.props.authorization.user.role, this.props.dispatch)
      //     }, error => {
      //       //console.log('=======error=========='+error)
      //       this.setState({
      //         showMessage: true,
      //         Message: error
      //       });
      //     })
      //   } else {
      //     _param.userRole = CONSTANTS.ROLE.INSPECTOR.toLowerCase()
      //     userActions.updateInspector(_param).then(result => {
      //       this.setState({ edituser: !this.state.edituser });
      //       userActions.getListUser(this.props.authorization.user.role, this.props.dispatch)
      //     }, error => {
      //       this.setState({
      //         showMessage: true,
      //         Message: error
      //       });
      //     })
      //   }
      // }
      // else if (this.props.authorization.user.role === CONSTANTS.ROLE.MANAGER) {
      //   _param.userRole = CONSTANTS.ROLE.INSPECTOR.toLowerCase()
      //   userActions.updateInspector(_param).then(result => {
      //     this.setState({ edituser: !this.state.edituser });
      //     userActions.getListUser(this.props.authorization.user.role, this.props.dispatch)
      //   }, error => {
      //     //console.log('=======error=========='+error)
      //     this.setState({
      //       showMessage: true,
      //       Message: error
      //     });
      //   })
      // }
    }

    onInputChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
      // this.setState({value: e.target.value});
    }

    render() {
      const history = this.props.history
      const numbers = this.props.numbers
  
      let number =  numbers + 1
      console.log(number)

          //   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);    

              Geocode.setApiKey('AIzaSyC6oQCEcKbgMQ38_EoiudIgZ413ugM1WmA');
              Geocode.setLanguage("en");
              Geocode.setRegion("my");
              Geocode.setLocationType("ROOFTOP");
              Geocode.enableDebug();

              let fulladdress = ""
              let countryaddress = ""
              let stateaddress = ""
              let cityaddress = "ok"

              Geocode.fromLatLng(history.latitude, history.longitude).then(
                (response) => {
                  const address = response.results[0].formatted_address;
                  console.log(address);
                  let city, state, country;
                  for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                      switch (response.results[0].address_components[i].types[j]) {
                        case "locality":
                          city = response.results[0].address_components[i].long_name;
                          break;
                        case "administrative_area_level_1":
                          state = response.results[0].address_components[i].long_name;
                          break;
                        case "country":
                          country = response.results[0].address_components[i].long_name;
                          break;
                      }
                    }
                  }
                  console.log(city, state, country);
                  console.log(city);
                  console.log(state);
                  console.log(country);
                  console.log(address);
                  // setaddress(address)

                  fulladdress = address
                  cityaddress = city
                  stateaddress = state
                  countryaddress = country

                  console.log(number + fulladdress);
                  
                },
                (error) => {
                  console.error(error);
                }
              );
  
              console.log(cityaddress)
      return (

        <tr>
                    <td className="text-center">
                      <div >{number}</div>
                    </td>
                    <td>
                      <div>{history.Device.name}</div>
                    </td>
                    <td className="text-center">
                    {history.Device.vehiclePlateNum}
                    </td>
                    <td>
                    <div className="text-center">{history.Device.ownerName}</div>
                      <div className="text-center small text-muted">
                        <span>{history.Device.ownerPhoneNum}</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    * need calculation
                    </td>
                    <td className="text-center">
                    {history.Device.device_id}
                    </td>
                    <td className="text-center">
                    {history.createdDate}
                    </td>
                    <td className="text-center">
       <Link 
       to={{
         pathname : '/carDetails/oneCar',
         state : history
       }}
       >
       <Button outline color="primary" style={{width: '150px'}}>Analysis</Button>{' '}
       </Link>


       <Link to='#' onClick={() => this.toggleUpdateDevice(history.Device.id)}>
         <Icon id={history.Device.id} className='grow icon update' icon={cogIcon} height="25" />
       </Link>
       <Modal isOpen={this.state.updateDevice} toggle={this.toggleUpdateDevice}  style={{maxWidth: '80%', width: '100%'}} >
         <ModalHeader toggle={this.toggleUpdateDevice}>Update this vehicle</ModalHeader>
         <ModalBody >
          
             <img src={history.Device.vehiclePicture} className="img-avatar mx-0" style={{ height: "200px", width: "300px" }} alt="admin@bootstrapmaster.com" />
           <div><strong>{history.Device.name}</strong></div>
           <div>{history.Device.ownerName}</div>
           <div className="text-center small text-muted">
                        <span>{history.Device.ownerPhoneNum}</span>
           </div>
           <div className="text-center small text-muted">
                        <span>OBD Serial Number {history.Device.device_id}</span>
           </div>
           <br/>
           {/* <Button className="mx-2" style={{background : 'red',color: 'white', width: '150px'}} onClick={this.toggleUpdateDevice}>Delete</Button>{' '}
           <Button className="mx-2" style={{width: '150px'}} onClick={this.toggleUpdateDevice}>Cancel</Button> */}
         
           <Form>
               
                <CardBody>

<Row>
  <Col md={6}>

  <CardHeader className="text-left h6">
              Owner Information
            </CardHeader>
                  <ListGroupItem >
                  <FormGroup row>
        <Label for="ownerName" style={{color:'black'}} sm={3}>Name</Label>
        <Col sm={9}>
          <Input type="Text" name="ownerName"  placeholder={history.Device.ownerName} 
          value={this.state.ownerName} 
          onChange={this.onInputChange} 
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="ownerIc" style={{color:'black'}} sm={3}>Ic Number</Label>
        <Col sm={9}>
          <Input type="Text" name="ownerIc"  placeholder={history.Device.ownerIc} 
          value={this.state.ownerIc} 
          onChange={this.onInputChange} 
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Phone Number</Label>
        <Col sm={9}>
          <Input type="Text" name="ownerPhoneNum"  placeholder={history.Device.ownerPhoneNum}
          value={this.state.ownerPhoneNum} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>License Number</Label>
        <Col sm={9}>
          <Input type="Text" name="ownerLicenseNum"  placeholder={history.Device.ownerLicenseNum} 
          value={this.state.ownerLicenseNum} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Birth Date</Label>
        <Col sm={9}>
          <Input type="Date" name="ownerBirthDate"  placeholder={history.Device.ownerBirthDate} 
          value={this.state.ownerBirthDate} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>

                </ListGroupItem>
                </Col>
                <Col md={6}>

                <CardHeader className="text-left h6">
              Vehicle Information
            </CardHeader>
                <ListGroupItem>
                <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Model</Label>
        <Col sm={9}>
          <Input type="Text" name="name"  placeholder={history.Device.name} 
          value={this.state.name} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>
      
      {/* not applicable for myav */}
      <FormGroup row>
        <Label for="exampleSelect" sm={3}>Vehicle Category</Label>
        <Col sm={9}>
          <Input type="select" name="select" id="exampleSelect"
          // value={this.state.category} 
          // onChange={this.onInputChange} 
          >
            <option>Car Vehicle</option>
            <option>Civil Vehicle</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>License Plate Number</Label>
        <Col sm={9}>
          <Input type="Text" name="vehiclePlateNum"  placeholder={history.Device.vehiclePlateNum}
          value={this.state.vehiclePlateNum} 
          onChange={this.onInputChange} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Chasis Number</Label>
        <Col sm={9}>
          <Input type="Text" name="vehicleChasisNum"  placeholder={history.Device.vehicleChasisNum} 
          value={this.state.vehicleChasisNum} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Engine Number</Label>
        <Col sm={9}>
          <Input type="Text" name="vehicleEngineNumber"  placeholder={history.Device.vehicleEngineNumber} 
          value={this.state.vehicleEngineNumber} 
          onChange={this.onInputChange}/>
        </Col>
      </FormGroup>
                </ListGroupItem>

                
                </Col>
                </Row>
                </CardBody>



                
                {this.state.showMessage && <div>{this.state.Message}<br /><br /></div>}
                {/* <Button color="primary" block>Confirm Edits</Button> */}
                <Button color="primary" onClick={this.onUpdateUserClick} block
                
                >Confirm Edits
                </Button>
              </Form>

         </ModalBody>
         {/* <ModalFooter>
           <Button className="mx-2" color="primary" onClick={toggle}>Do Something</Button>{' '}
           <Button className="mx-2" color="secondary" onClick={toggle}>Cancel</Button>
         </ModalFooter> */}
       </Modal>

         
       <Link to='#' onClick={this.toggleDeleteDevice}><Icon className='grow icon delete' icon={trashCan} height="25" /></Link>
       <Modal isOpen={this.state.deleteDevice} toggle={this.toggleDeleteDevice}   >
         <ModalHeader toggle={this.toggleDeleteDevice}>Are You Sure want to remove this car ?</ModalHeader>
         <ModalBody >
         <img src={carimage} className="img-avatar mx-0" style={{ height: "200px", width: "300px" }} alt="admin@bootstrapmaster.com" />
           <div><strong>BMW X3, 2010 - WJE 9922</strong></div>
           <div>Owner - Kumaran A/L Rajagobal</div>
           <br/>
           <Button className="mx-2" style={{background : 'red',color: 'white', width: '150px'}} onClick={this.toggleDeleteDevice}>Delete</Button>{' '}
           <Button className="mx-2" style={{width: '150px'}} onClick={this.toggleDeleteDevice}>Cancel</Button>
         </ModalBody>
         {/* <ModalFooter>
           <Button className="mx-2" color="primary" onClick={toggle}>Do Something</Button>{' '}
           <Button className="mx-2" color="secondary" onClick={toggle}>Cancel</Button>
         </ModalFooter> */}
       </Modal>
       </td>
                  </tr>

        // <tr key={number.toString()}>
        //   <th scope="row" className="align-middle text-left">
        //     <div className="text-center">
        //       {number}
        //     </div>
        //   </th>
        //   <td className="align-middle text-center">{reading}</td>
        //   {/* <td className="align-middle text-center">{moment(createdDate).format("DD/MM/YYYY hh:mm:ss")}H
              
        //   </td> */}
        // </tr>
      )
    }
  }



  
class TableCarDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          removeuser: false,
          edituser: false,
          username: '',
          password: '',
          name: '',
          contact: '',
          userRole: '',
          showMessage: false,
          id: '',
          createdDate: '',
          reading: ''
        }
      }
    render() {
        const { data } = this.props
        console.log({data})
        console.log(this.props.data.length)
        console.log(this.props.length)
        return (
            <div>
                

                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">Vehicle Model</th>
                  <th className="text-center">Licence Plate</th>
                  <th className="text-center">Owner Name</th>
                  <th className="text-center">Detector Health</th>
                  <th className="text-center">BOD Serial Number</th>
                  <th className="text-center">Last Track Online</th>
                  <th className="text-center">Information</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      (this.props.data.length === 0)? 
                      <tr>
                        <td align="center"  colspan='3'>
                          No Data
                        </td>
                      </tr>:
                      this.props.data.map((history, index) =>

                      
                      <HistoryRow
                        // key={index}
                        numbers={index}
                        history={history}
                        // dispatch={this.props.dispatch}
                        // authorization={this.props.authorization} 
                        />
                      )
                    }
                </tbody>
                </table>




              {/* <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Vehicle Model</th>
                    <th className="text-center">Licence Plate</th>
                    <th className="text-center">Owner Name</th>
                    <th className="text-center">Current Coordinate</th>
                    <th className="text-center">Today Distance</th>
                    <th className="text-center">Currently In Area ?</th>
                    <th className="text-center">Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div >1</div>
                    </td>
                    <td>
                      <div>Produa Myvi, 2010</div>
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
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    20.1 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
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
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    17.9 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
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
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    26.2 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
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
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    14.9 KM
                    </td>
                    <td className="text-center" style={{ color: 'Red' }}>
                    <strong>Lembah Klang</strong>
                    <div className="text-center small text-muted">
                    <span>no</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
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
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    34.2 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                      <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>

                </tbody>
              </table> */}
            </div>
        );
    }
}

export default TableCarDetails;