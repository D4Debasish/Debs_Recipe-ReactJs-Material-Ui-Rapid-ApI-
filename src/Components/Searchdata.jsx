import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onsearch, inputval, setInputval }) => {
  return (
    <div>
      <TextField
        sx={{
          borderRadius: '10px',
          backgroundColor: 'white',
          width: '200px', 
          border: 'none',
          marginBottom: '10px', 
          '@media (min-width: 600px)': {
            width: '500px', 
          },
        }}
        size="small"
        placeholder="Search"
        value={inputval}
        onChange={(e) => setInputval(e.target.value)}
      />
      <IconButton
        sx={{ height: '40px', color: 'white' }}
        color="primary"
        aria-label="search"
        component="span"
        onClick={onsearch}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchInput;
