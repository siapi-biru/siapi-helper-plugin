/**
 *
 * SiapiProvider
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import SiapiContext from '../../contexts/SiapiContext';

const SiapiProvider = ({ children, siapi }) => {
  return <SiapiContext.Provider value={{ siapi }}>{children}</SiapiContext.Provider>;
};

SiapiProvider.defaultProps = {};
SiapiProvider.propTypes = {
  children: PropTypes.node.isRequired,
  siapi: PropTypes.object.isRequired,
};

export default SiapiProvider;
