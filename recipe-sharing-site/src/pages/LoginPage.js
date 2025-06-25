import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const tabStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderBottom: 'none',
    marginRight: '5px',
    backgroundColor: '#f1f1f1'
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: 'white',
    borderBottom: '1px solid white'
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setIsLoginView(true)} style={isLoginView ? activeTabStyle : tabStyle}>Login</button>
          <button onClick={() => setIsLoginView(false)} style={!isLoginView ? activeTabStyle : tabStyle}>Register</button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '2rem' }}>
        {isLoginView ? (
          <LoginForm />
        ) : (
          <RegisterForm onRegisterSuccess={() => setIsLoginView(true)} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;