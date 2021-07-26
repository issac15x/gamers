import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';

function Navbar() {
  
  const history = useHistory();

  const handleRoute = (e) =>{
    
    e.preventDefault();
    const id = e.currentTarget.id ;
    history.push('/'+id);
    
    
  }
  return (
    <>
      <div className='nav_one'>
        <img src="https://image.flaticon.com/icons/png/128/3142/3142027.png" title="Flaticon" alt="" />
        <div className="menu">
          <h1 id ='login' onClick={handleRoute}>Login</h1>
          <h1 id ='signup' onClick={handleRoute}>Sign up</h1>
        </div>
      </div>
      
      
    </>
    

  );
}

export default Navbar;
