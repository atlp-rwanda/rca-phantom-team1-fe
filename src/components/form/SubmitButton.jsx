import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ label, onClick, className, disabled, type, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` py-3 bg-white rounded w-2/3 md:w-1/2 textcolor-blue font-bold hover:scale-x-105 transition-all ${className}`}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node,
};

ActionButton.defaultProps = {
  type: 'button',
};

export default ActionButton;
