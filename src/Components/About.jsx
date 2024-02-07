import React from 'react'
import Navbar from './Navbar';
import './About.css'
import animg from '../utils/ABOUT.png'
import { Typography } from '@mui/material';

const About = () => {
  return (
   <div className="about__main" >
      <Navbar />
      
        <img src={animg} alt="" style={{marginBottom:150,width:'100%' }} />    
      <div className="acknowledgement">
      
      
      </div>
   </div>
  )
}

export default About
