import React, { useState } from 'react';
import Navbar from './Navbar';

function Signup() {
  
  return (
    <>
      <Navbar />
      <div className='form_login_signup_container'>
          
        <form >
            <h1>Sign up</h1>
            <input type="text" required placeholder='Firs Name'/>
            <input type="text" required placeholder='Last Name'/>
            <input type="email" required placeholder='Email'/>
            <input type="password"  required placeholder='Password'/>
            <input type="password"  required placeholder='Confirm Password'/>
            <button>Submit</button>
        </form>
      </div>
      
    </>
    

  );
}

export default Signup;