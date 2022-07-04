import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Dates from "../../__ifunc/dates";

import {
  AppNavbarBrand,
  AppSidebarToggler
} from '@coreui/react';
import myav_sm from '../../assets/img/brand/LOGO UTM (S).png'
import myav_lg from '../../assets/img/brand/LOGO UTM.png'
import imgprofile from '../../assets/img/brand/arron_aziz.jpg'
import { Auth } from '../../api'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor() {
    super();
    this.state = {
      curTime : null
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  tick() {
    this.setState({
      timer: Dates.format(new Date(), Dates.FORMAT.DATE_TIME7),
    });
    // console.log(this.state.timer)
  }

  render() {
    // console.log('========DefaultHeader: render()==============')

    // eslint-disable-next-line
    // const { children, ...attributes } = this.props;
    const user = Auth.getAuthUser()
    // console.log(user)

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: myav_lg, width: 153, height: 45, alt: 'PVEMS Logo' }}
          minimized={{ src: myav_sm, width: 40, height: 20, alt: 'PVEMS Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-2 bg-white radius-30 mr-2" navbar>
        <div><strong>HI, {user && user.name}</strong></div>
          </Nav>

        <Nav className="ml-auto bg-white radius-30 mr-2" navbar>
        <Nav className="ml-auto bg-white radius-30 mr-2" navbar>
        <div >
             <strong>{this.state.timer}</strong>
             </div>
          </Nav>


        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
