import React from 'react';
import './App.css';
import ezio from './ezio.jpg';
import amvanime from "./amvanime.mp4"

function App() {
  return (
    <>
  <div style={{border:"solid" ,maxWidth:'100vw'}}>

  <h1 className="titleRed">This Is Me VlaD</h1>

 <img className="ezio" src= {ezio} alt="pic" />

 <img  src="./Assassin.png" alt="assassin" /> 

</div>

{/* <video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" > </source>

</video> */}
<video style={{width:"320", height:"240"}} src={amvanime} controls  />


</>

  );
}

export default App;
