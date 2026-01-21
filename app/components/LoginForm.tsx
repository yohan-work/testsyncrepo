import React from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  return (
    <div>
      <input type="text" placeholder="Username"/>
      <br />
      <input type="password" placeholder="Password"/>
      <br />
      <button onClick={() => onLogin(document.querySelector('input[type="text"]').value, document.querySelector('input[type="password"]').value)}>Login</button>
    </div>
  );
};