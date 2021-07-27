import React, { useState } from 'react';

import Showbar from './Showbar';

function Home() {
  
  const Trendposts = [
    {id:1,name:'Nice Moves in Gta V',rank:'#1',imgsrc:'https://i.ytimg.com/vi/9QW3H8sNp1s/maxresdefault.jpg'},
    {id:2,name:'Best Gun',rank:'#2',imgsrc:'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/mw-wz/WZ-Trick-or-Treat-018.jpg'},
    {id:3,name:'Griffin Trap',rank:'#3',imgsrc:'https://i.redd.it/etzybcucy9y51.jpg'},
    {id:4,name:'Diamond Glitch',rank:'#4',imgsrc:'http://www.carnagethecreator.com/wp-content/uploads/2015/12/minecraft-xbox-one-new-duplicati1.jpg'},
    {id:5,name:'New Places in The Map',rank:'#5',imgsrc:'http://www.gamosaurus.com/wp-content/uploads/Fortnite/saison-11/d%C3%A9fis/carte-fortnite-defi-trick-shot-danser-a-differentes-structures-monsieur-semaine-7-saison-11-chapitre-2-saison-1-gamosaurus.jpg'}
  ]
  const Newposts = [
    {id:1,name:'The Fire Sword',imgsrc:'https://i.pinimg.com/originals/6c/e3/61/6ce3613a0ea0952b692d5b712f085223.jpg'},
    {id:2,name:'Pupg Mobile Best Aim Settings',imgsrc:'https://i.ytimg.com/vi/Zb6nhS6m7XI/maxresdefault.jpg'},
    {id:3,name:'How To Make a Shield in Muck',imgsrc:'https://www.caffeinatedgamer.com/wp-content/uploads/2021/06/muck-how-to-make-a-shield.jpeg'},
    {id:4,name:'Rank Up Fast',imgsrc:'https://i.ytimg.com/vi/PbpZj1_SnvI/maxresdefault.jpg'},
    
  ]

  return (
    <>
      
      <div className='nav_two'> 
      
        <img src="logo.png"  id ='logoimg' alt="" />
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
      <Showbar posts={Trendposts} type='Trending' />
      <Showbar posts={Newposts} type='Newest' />
      
      
    </>
    

  );
}

export default Home;
