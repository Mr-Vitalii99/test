import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.scss';

export const IconButton = ({ children, onClick, ...allyProps }) => {
    
  return (
    <button type="button" className="icon-button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {
    onClick: () => null,
    children: null
}

IconButton.prototype = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    "aria-label": PropTypes.string.isRequired,
}