import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required
        />
        <br / >
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required
        />
        <br / >
        <button type="submit">Register</button>
      </form>
    </div>
  );
}