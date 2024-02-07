import React from 'react';
import Box from './Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './favourate.css'

const Favourite = ({ favorites, setFavorites }) => {
  const handleRemoveClick = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <div className="favorites">
      <h2 style={{color:'blueviolet'}}>YOUR FAVOURATE RECIPES ARE</h2>
      {favorites && favorites.length > 0 ? (
        <div className="favorites__list" >
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite__box" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <Box title={favorite.title} img={favorite.img}  />
              <Link to={`/recipe/${favorite.id}`} className="view-recipe-link" style={{textDecoration:'none',marginBottom:'20px' ,color:'red'}}>
                  VIEW RECIPE
                 </Link>
              <button onClick={() => handleRemoveClick(favorite.id)}>
                <DeleteIcon sx={{color:'red', }}/> 
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{alignItems:'center', textAlign:'center', marginTop:'200px' }}>No favorites yet.... <br /> Add some recipes to your favorites!</h2>
      )}
    </div>
  );
};

export default Favourite;
