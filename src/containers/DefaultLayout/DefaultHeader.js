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
      timer: Dates.format(new Date(), Dates.FORMAT.DATE_TIME4),
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
          {/* <NavItem className="d-md-down-none bg-secondary font-weight-bold pl-2 pr-1 radius-l-30" style={{ height:'40px' }}>
            <div className="px-2 pt-2 text-p">{this.props.authorization.user && this.props.authorization.user.name}</div>
          </NavItem> */}
          <Nav className="ml-auto bg-white radius-30 mr-1" navbar>
            <NavItem>
             <div  className="date">
             <p>{this.state.timer}</p>
             </div>
            </NavItem>
            </Nav>
          <NavItem className="d-sm-down-none mr-2 ml-4 ml-lg-2">
            {/* <NavLink to="/profile" className="nav-link"><i className="icon-user mr-2"></i>Profile</NavLink> */}
          </NavItem>
          <Link className="d-sm-down-none mx-2"  onClick={e => this.props.onLogout(e)}>
            {/* <NavLink to="#" className="nav-link"><i className="icon-logout mr-2"></i>Logout</NavLink> */}

          </Link>
          <NavItem style={{ minWidth: "40px", width: "45px" }}>
            <NavLink to="/profile" className="nav-link hover-shadow"><img src={imgprofile} className="img-avatar mx-0" style={{ height: "40px", width: "40px" }} alt="admin@bootstrapmaster.com" /></NavLink>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
