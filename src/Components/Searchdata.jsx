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
          width: '160px', 
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
        sx={{ marginRight:'22px', height: '40px', color: 'white','@media (min-width: 600px)': {
          width: '40px', marginLeft:'8px'
        }}}
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
