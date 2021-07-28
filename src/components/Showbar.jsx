import React, { useState } from 'react';
import Posts from './Posts';

function Showbar(props) {

  return (
    <>
    <showbarHead>
        <h2 id={props.type}>{props.type}</h2>
        </showbarHead>
        <showbar>
            {
            props.posts.map(post=>(
            <Posts key={post.id} name={post.name} rank={post.rank} imgsrc={post.imgsrc} />
            ))
            }
            <post>
            <h3>griffin trap <span>#1</span></h3>
            <img src="https://i.redd.it/etzybcucy9y51.jpg" alt="" />
            </post>
            <post>
            <h3>minecraft glitch <span>#2</span></h3>
            <img src="https://i.ytimg.com/vi/tNFd9sRyrDw/maxresdefault.jpg" alt="" />
            </post>
        
        
        </showbar>
    </>
  );
}

export default Showbar;
