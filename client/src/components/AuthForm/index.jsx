import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import AuthFormToggler from './Toggler';
import './index.scss';
export default function AuthForm({ login, signup }) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const togglerRef = useRef(null);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className='auth-from-wrapper'>
      {isLoginActive ? <Login submit={login} /> : <Signup submit={signup} />}
      <AuthFormToggler
        current={isLoginActive ? 'Login' : 'Signup'}
        ref={togglerRef}
        onClick={toggleForm}
      />
    </div>
  );
}

AuthForm.propTypes = {
  signup: PropTypes.func,
  login: PropTypes.func,
};
