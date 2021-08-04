import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../patterns/InputField';
import Button from '../../../patterns/Button';

const INITIAL_VALUES = {
  username: '',
  password: '',
};

const Signup = ({ submit }) => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = values;
    submit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <div className='auth-form__group'>
        <InputField
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleInputChange}
          className='auth-form__input'
        />
      </div>
      <div className='auth-form__group'>
        <InputField
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleInputChange}
          className='auth-form__input'
        />
      </div>
      <div className='auth-form__group__submit'>
        <Button type='submit' className='auth-form__submit-btn'>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

Signup.propTypes = {
  submit: PropTypes.func,
};

export default Signup;
