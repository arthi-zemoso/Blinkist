import React from 'react';
import VectorSearch from '../../atoms/Icons/Vectorsearch.svg';
import { InputAdornment, TextField } from '@mui/material';

const SearchBar=()=>{
return(
    <TextField
    sx={{
     
      width:"598px",
      height:"28px"
    }}
    id="input-with-icon-textfield"
    placeholder='Search by title or author'
    InputProps={{
      startAdornment: (
        <InputAdornment position="start"
        >
            <img  alt="search"src={VectorSearch}/>
        </InputAdornment>
      ),
    }}
    variant="standard"
    size='medium'
  />
)
}
export default SearchBar;