import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Box from './Box';
import { Button } from '@mui/material';
import './Home.css';
import { excersiseOptions, fetchData } from '../utils/fetchData';

const HomePage = ({ favorites, setFavorites }) => {
  const [datastore, setDatastore] = useState([]);
  const [numInitialCards, setNumInitialCards] = useState(6);
  const [numAdditionalCards, setNumAdditionalCards] = useState(3);
  const [inputval, setInputval] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [addingToFavorites, setAddingToFavorites] = useState(false); 

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);

      try {
        const fetchedData = await fetchData('https://keto-diet.p.rapidapi.com/', excersiseOptions);

        const recipesArray = Array.isArray(fetchedData) ? fetchedData : [fetchedData];

        setDatastore(recipesArray);
      } catch (error) {
        console.error('Error fetching data:', error);
        setDatastore([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const loadmore = () => {
    setNumInitialCards((prev) => prev + numAdditionalCards);
  };

  const handlechange = async () => {
    setInputval('');

    if (inputval) {
      try {
        const fetchedrec = await fetchData(
          'https://keto-diet.p.rapidapi.com/',
          excersiseOptions
        );

        const searchedrecipe = fetchedrec.filter((recipe) =>
          recipe.recipe.toLowerCase().includes(inputval.toLowerCase())
        );

        setSearch(true);
        setDatastore(searchedrecipe);
      } catch (error) {
        console.error('Error fetching data:', error);
        setDatastore([]);
      }
    }
  };

  const handleFavoriteClick = (recipe) => {
    const existingFavorite = favorites.find((fav) => fav.id === recipe.id);

    if (existingFavorite) {
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setAddingToFavorites(true);
      setFavorites((prevFavorites) => [...prevFavorites, recipe]);
     
      
        setAddingToFavorites(false); 
       
    }
  };

  return (
    <div className="mainHome">
      <Navbar
        onsearch={handlechange}
        inputval={inputval}
        setInputval={setInputval}
        favorites={favorites || []}
      />
      <div className="home__boxes">
        <div className="home__main">
          {search ? (
            datastore.map((one, index) => (
              <div  className="home__box">
                <Box
                  title={one.recipe}
                  img={one.image}
                  onFavoriteClick={() => handleFavoriteClick({ id: one.id, title: one.recipe, img: one.image })}
                />
                {!addingToFavorites && (
                  <Link to={`/recipe/${one.id}`} className="view-recipe-link" style={{textDecoration:'none', marginTop:200, color:'red'}}>
                   VIEW RECIPE
                  </Link>
                )}
              </div>
            ))
          ) : loading ? (
            <p> LOADING MF WAIT UP.......... </p>
          ) : (
            datastore &&
            datastore.slice(0, numInitialCards).map((card, index) => (
              <div key={index} className="home__box">
                <Box
                  title={card.recipe}
                  img={card.image}
                  onFavoriteClick={() => handleFavoriteClick({ id: card.id, title: card.recipe, img: card.image })}
                />
               
                {!addingToFavorites && (
                  <Link to={`/recipe/${card.id}`} className="view-recipe-link" style={{textDecoration:'none', marginTop:200, color:'red'}}>
                  VIEW RECIPE
                 </Link>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="btnn">
        <Button className="btnn" variant="outlined" onClick={loadmore}>
          LOAD MORE
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
