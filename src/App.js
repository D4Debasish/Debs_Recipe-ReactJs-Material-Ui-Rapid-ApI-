
import './App.css';


import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Favourate from './Components/Favourate';

import Details from './Components/Details';
import { useState } from 'react';


const App = () => {
 
      const[favorites, setFavorites] = useState([]);
      const [addingToFavorites, setAddingToFavorites] = useState(false);
    
  return (
    <div className="App">
    
     
     <Routes>
        <Route path="/" element={<HomePage favorites={favorites} setFavorites={setFavorites} addingToFavorites={addingToFavorites} setAddingToFavorites={setAddingToFavorites} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourates" element={<Favourate favorites={favorites || []} setFavorites={setFavorites} setAddingToFavorites={setAddingToFavorites} />} />
       
        <Route path="/recipe/:id" element={<Details />} />
      </Routes>
     
     
    
    </div>
  );
}

export default App;
