import React, { useState } from 'react';
import Navbar from './Navbar';

function Login() {
  
  return (
    <>
      <Navbar />
      <div className='form_login_signup_container'>
          
        <form >
            <h1>Login</h1>
            <input type="email" required placeholder='Email'/>
            <input type="password"  required placeholder='Password'/>
            <button>Submit</button>
        </form>
      </div>
      
    </>
    

  );
}

export default Login;
