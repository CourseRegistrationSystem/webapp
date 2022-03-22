
import React from 'react';
import ReactDOM from "react-dom";
import imgprofile from '../../../assets/img/brand/arron_aziz.jpg'

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
import uploadedImage from '../../../assets/img/brand/arron_aziz.jpg'


function Profile() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>


      <Card className='shadow p-3 mb-5 bg-white rounded'>
      {/* <CardHeader className="bg-grey">
                                <Row>
                                    <Col md="5" className="mt-md-auto text-left h3"><i className="icon-people font-xl icons mr-2 text-primary"></i>Profile</Col>
                                </Row>
                            </CardHeader> */}
            <CardBody>
              <h1>Profile</h1><br/>
              <Row>
                <Col md={6}>

                <CardHeader className="text-left h6">
              Personal Information
            </CardHeader>
                  <ListGroupItem>
                    <FormGroup row className='centerElement p-4'>
                    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        className='img-avatar'
        style={{
          height: "150px",
          width: "150px",
          border: "4px solid black",

        }}

        onClick={() => imageUploader.current.click()}
      >
        <img
        className='img-avatar'
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
          }}
        />
      </div>
      Click to upload Image
    </div>
                    {/* <img src={imgprofile} className="img-avatar centerElement p-3" style={{ height: "180px", width: "180px" }} alt="admin@bootstrapmaster.com"/> */}
                    </FormGroup>

                  <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Name</Label>
        <Col sm={9}>
          <Input style={{background: '#F0F0F0', textTransform: 'uppercase'}} className='form-control' type="Text" name="text" value='Amirul Faiz Bin Ahmad Puad' readonly/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Admin ID</Label>
        <Col sm={9}>
        <Input style={{background: '#F0F0F0', textTransform: 'uppercase'}} className='form-control' type="Text" name="text" value='1728' readonly/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Position</Label>
        <Col sm={9}>
        <Input style={{background: '#F0F0F0', textTransform: 'uppercase'}} className='form-control' type="Text" name="text" value='Admin' readonly/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Email</Label>
        <Col sm={9}>
        <Input style={{background: '#F0F0F0', textTransform: 'uppercase'}} className='form-control' type="Text" name="text" value='amirulfaiz98@gmail.com' readonly/>
        </Col>
      </FormGroup>

                </ListGroupItem>
                </Col>
                <Col md={6}>
                <CardHeader className="text-left h6">
              Change Password
            </CardHeader>
                <ListGroupItem>
                <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Old Password</Label>
        <Col sm={9}>
          <Input type="Password" name="text"  placeholder="Old Password" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>New Password</Label>
        <Col sm={9}>
          <Input type="Password" name="text"  placeholder="New Password" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" style={{color:'black'}} sm={3}>Re-type New Password</Label>
        <Col sm={9}>
          <Input type="Password" name="text"  placeholder="New Password" />
        </Col>
      </FormGroup>



                </ListGroupItem>
                <CardBody>
                <Link to='/profile' onClick={shoot}>
<Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#47B064'}} onClick=''>Change Password</Button>
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
  alert("Your password has been changed");
}

export default Profile;
