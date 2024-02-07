import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import { excersiseOptions, fetchData } from '../utils/fetchData';
import { excersiseOptionnew, newfetch } from '../utils/newfetch';


const Detail = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await newfetch(`https://keto-diet.p.rapidapi.com/details/${id}`, excersiseOptionnew);
    
        if (details.status === 404) {
          throw new Error('Recipe not found');
        }
    
        const data = await details.json();
        console.log('API Response:', data);
        setRecipeDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);
  
  if (loading) {
    return <p>Loading PLEASE WAIT......</p>;
  }

  if (!recipeDetails) {
    return <h2 style={{textAlign:'center', marginTop:'300px'}}>  <ErrorIcon sx={{color:'red'}}/>   Error in API fetching(probably error 404).... <br /> THERE MIGHT ME SOME PROBLEM IN THE SERVER</h2>;
  }


  return (
    <div>
      {recipeDetails.image}
      
    </div>
  );
};

export default Detail;
