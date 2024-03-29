import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputField = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  className,
  ...props
}) => (
  <div className="form-group">
    <input
      type={type}
      value={value}
      name={name}
      className={`input-field ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </div>
);

InputField.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default InputField;
