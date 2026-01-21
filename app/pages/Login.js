import { useState } from 'react';
import Link from 'next/link';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // TO DO: implement login logic here
  }

  return (
    <div className='login-container'>{
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>{
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <br/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <br/>
        <button type='submit'>Login</button>
      </form>
    </div>
  );}
export default Login;