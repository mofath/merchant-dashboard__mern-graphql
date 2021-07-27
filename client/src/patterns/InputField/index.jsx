import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputField = ({ value, name, placeholder, type, onChange, className }) => (
  <div className='form-group'>
    <input
      type={type}
      value={value}
      name={name}
      className={`input-field ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

InputField.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default InputField;
