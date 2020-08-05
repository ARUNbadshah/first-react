import React from 'react';
import Common from './Common';
import yak from "../src/images/google.png"
function About() {
  return (
    <>
       <Common name="Welcome to About Page..." 
    img={yak} 
    visit="/contact"

    
    btname="Contact Now"/>
    </>
  );
}

export default About;
