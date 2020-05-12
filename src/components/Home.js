import React, {useState, useEffect} from "react";
import '../sass/Home.sass'

function Home(){
  return (
    <div className="home">
      <h1>Start shopping!</h1>
      <img src="https://images.unsplash.com/photo-1535972976071-2dccec4adc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
      <img src="https://images.unsplash.com/photo-1554141220-83411835a60b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80"/>
      <img src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"/>
    </div>
  
  );
}

export default Home;