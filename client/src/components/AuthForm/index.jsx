import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Signup from './Signup';
import AuthFormToggler from './Toggler';
import './index.scss';

export default function AuthForm({ handleLogin, handleSignup }) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const togglerRef = useRef(null);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  useEffect(() => {}, []);

  return (
    <div className="auth-from">
      {isLoginActive ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Signup handleSignup={handleSignup} />
      )}
      <AuthFormToggler
        current={isLoginActive ? 'Login' : 'Signup'}
        ref={togglerRef}
        onClick={toggleForm}
      />
    </div>
  );
}

AuthForm.propTypes = {
  handleLogin: PropTypes.func,
  handleSignup: PropTypes.func,
};
