import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputField from '../../../patterns/InputField';
import Button from '../../../patterns/Button';

const INITIAL_VALUES = {
  username: '',
  password: '',
};

const Login = ({ submit }) => {
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
          placeholder='password'
          onChange={handleInputChange}
          className='auth-form__input'
        />
        <Link to='/' className='auth-form__forget-password-link'>
          Forget Password?
        </Link>
      </div>
      <div className='auth-form__group__submit'>
        <Button type='submit' className='auth-form__submit-btn'>
          Login
        </Button>
      </div>
    </form>
  );
};

Login.propTypes = {
  submit: PropTypes.func,
};

export default Login;
