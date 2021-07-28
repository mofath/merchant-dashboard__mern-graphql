import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant, className, onClick, children, ...props }) {
  return (
    <button className={`btn-${variant} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
