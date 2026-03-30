import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" id="id" placeholder="ID" />
      <input type="password" id="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}