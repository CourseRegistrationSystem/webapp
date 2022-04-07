import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const year = new Date().getFullYear()

    return (
      <React.Fragment>
        <span><a href="https://engineering.utm.my/computing/psm/">FINAL YEAR PROJECT</a> &copy; {year}</span>
        <span className="ml-auto">Developed by <a href="https://eportfolio.utm.my/user/amirul-faiz-bin-ahmad-puad">afaiz47</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
