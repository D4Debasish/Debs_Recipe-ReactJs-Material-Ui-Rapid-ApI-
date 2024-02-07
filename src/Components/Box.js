import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//After error 429 use useLocation for the favourate icon or 

const Box = ({ id, title, date, img, onFavoriteClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [seticon, setSeticon] = useState(true);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);

    onFavoriteClick({ id, title, date, img, isFavorite: !isFavorite });
    setSeticon(false)
  };

  return (
    <Card sx={{ width: 300, '@media (max-width: 600px)': { 
      width:350 , height:'380px' 
    } }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="200" width="100%" image={img} alt=""  sx={{
        '@media (max-width: 600px)': { 
          width: '80%', 
          margin: 'auto', 
          marginTop: '20px',
        },
      }} />
      <CardActions className='cardss'>
      {seticon ? (<IconButton onClick={handleFavoriteClick}>
      <FavoriteIcon   sx={{color:'red'}}/>
      </IconButton>):''}
        
      </CardActions>
    </Card>
  );
};

export default Box