import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div className="app_footer" style={{display:'flex',
     flexDirection:'column', textAlign:'center', backgroundColor:'yellow',
      color:'white',
}}>
    <Typography variant='h3' component='h3' sx={{color:'white', textAlign: 'center'}}>
     YOUR RecipE <br />
     All rights reserved 
     <br />
     Made by <span className="name">Debasish Das Biswas</span>
     <br />

     <div>
     <Link to='/' >Home</Link>
     <Link to='/about' >About</Link>
     
     
     </div>
   </Typography>

   </div>
  )
}

export default Footer