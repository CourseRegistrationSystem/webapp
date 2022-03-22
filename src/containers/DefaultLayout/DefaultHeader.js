import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import {
  AppNavbarBrand,
  AppSidebarToggler
} from '@coreui/react';
import myav_sm from '../../assets/img/brand/myavlogo_sm.png'
import myav_lg from '../../assets/img/brand/myavlogo_lg.png'
import imgprofile from '../../assets/img/brand/arron_aziz.jpg'
import { Auth } from '../../api'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  render() {
    // console.log('========DefaultHeader: render()==============')

    // eslint-disable-next-line
    // const { children, ...attributes } = this.props;
    const user = Auth.getAuthUser()

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: myav_lg, width: 153, height: 45, alt: 'PVEMS Logo' }}
          minimized={{ src: myav_sm, width: 40, height: 20, alt: 'PVEMS Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto bg-white radius-30 mr-2" navbar>
          {/* <NavItem className="d-md-down-none bg-secondary font-weight-bold pl-2 pr-1 radius-l-30" style={{ height:'40px' }}>
            <div className="px-2 pt-2 text-p">{this.props.authorization.user && this.props.authorization.user.name}</div>
          </NavItem> */}
          <NavItem className="d-sm-down-none mr-2 ml-4 ml-lg-2">
            {/* <NavLink to="/profile" className="nav-link"><i className="icon-user mr-2"></i>Profile</NavLink> */}
          </NavItem>
          <Link className="d-sm-down-none mx-2"  onClick={e => this.props.onLogout(e)}>
            {/* <NavLink to="#" className="nav-link"><i className="icon-logout mr-2"></i>Logout</NavLink> */}
            <div className='centerElement'>
              <div><strong>Amirul Faiz Bin Ahmad Puad</strong></div>
                      <div>
                      {user && user.name}
                      </div>
                      </div>
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
