
import React, {useState} from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  FormText,
  Button,
  ListGroupItem,
  Row,
  Alert,
} from 'reactstrap'

import { Link } from 'react-router-dom';




function Profile() {

	const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(true);

	function handleSubmission(){
		if (value.length > 3 || value.length < 3){
      setIsValid(false)
    }else{
      setIsValid(true)
    }
	}

  return (
    <>

<CardHeader className="bg-grey shadow ">
                                <Row>
                                    <Col md="5" className="mt-md-auto text-left h3"><i className="icon-people font-xl icons mr-2 text-primary"></i>Add New MyAV</Col>
                                </Row>
                            </CardHeader>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
          <p className='p-3 text-primary'>All data are required for security purpose</p>
            <CardBody>

              <Row>
                <Col md={6}>

                <CardHeader className="text-left h6">
              Owner Information
            </CardHeader>
                  <ListGroupItem >
                  <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Name</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="Owner Full Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Ic Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="IC Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Phone Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="Phone Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>License Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="License Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Birth Date</Label>
        <Col sm={9}>
          <Input type="Date" name="text"  placeholder="Birth Date" />
        </Col>
      </FormGroup>

                </ListGroupItem>
                <CardHeader className="text-left h6">
              OBD Information
            </CardHeader>
                <ListGroupItem>
                <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>OBD Serial Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="License Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>OBD Type</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="OBD Type" />
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
          <Input type="Text" name="text"  placeholder="Model" />
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
          <Input type="Text" name="text"  placeholder="License Plate Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Chasis Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="Chasis Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Engine Number</Label>
        <Col sm={9}>
          <Input type="Text" name="text"  placeholder="Engine Number" onChange={(e) => setValue(e.target.value)} value={value}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>vehicle Image</Label>
        <Col sm={9}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          Format support : JPEG, PNG ( not exclude 50mb )
          </FormText>
        </Col>
      </FormGroup>

                </ListGroupItem>
                <CardBody>
                <Link to='/carDetails' onClick={shoot}>
<Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#47B064'}} onClick=''>Add New Car</Button>
</Link>
                </CardBody>
                </Col>

      </Row>
            </CardBody>
          </Card>
    </>
  )
}

function shoot() {
  alert("Successfully Registered");
}

export default Profile;
