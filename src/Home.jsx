import React from 'react';
import web from "../src/images/google.png";
import Common from "./Common"
function Home() {
  return (
    <>
    <Common name="Grow your Buiseness with" 
    img={web} 
    visit="/service"
    btname="Get Started" />
     </>
  );
}

export default Home;
