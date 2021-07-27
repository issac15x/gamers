import React, { useState } from 'react';

function Home(props) {

  return (
    <>
        <post>
          <h3><span>{props.rank}</span>{props.name}</h3>
          <img src={props.imgsrc} alt="" />
        </post>
    </>
  );
}

export default Home;
