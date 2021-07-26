import React, { useState } from 'react';

function Home() {
  
  return (
    <>
      
      <div className='nav_two'> 
      
        <img src="https://image.flaticon.com/icons/png/128/3142/3142027.png"  id ='logoimg' alt="" />
        <menu_items>
          <button>Browse</button>
          <search_form>
            <form >
              <button>Search </button>
              <input type="text" name="search" id="search_input"  />
            </form>
          </search_form>
        </menu_items>
        <profile_container>
        
        
          <profile_pcture_container>
            <h2 id='Profile_Name'>ishak</h2>
            <button>
              <img src="https://image.flaticon.com/icons/png/128/1177/1177568.png" alt="" id='Profile_Picture' />
            </button>
          </profile_pcture_container>
          <button id='Logout_B'>Log out</button>
        </profile_container>

      </div>
      <sidebar>
        <div className='titles'>Trending</div>

        <div className='games'>
          
          <img src="https://www.freepnglogos.com/uploads/fortnite-png/fortnite-logo-fortnite-the-battle-building-2.png" alt="" />
          
        </div>
        <div className='games'>
          
          <img src="https://www.freepnglogos.com/uploads/pubg-png/pubg-logos-brands-and-logotypes-33.png" alt="" />
        </div>
        <div className='games'>
          
          <img src="https://www.freepnglogos.com/uploads/minecraft-logo-6.png" alt="" />
        </div>
      </sidebar>
    </>
    

  );
}

export default Home;
