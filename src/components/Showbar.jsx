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
            
        
        
        </showbar>
    </>
  );
}

export default Showbar;
