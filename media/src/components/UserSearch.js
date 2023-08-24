import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

function UserSearch({ userSearchTerm,onSearchChange }) {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch(changeSearchTerm(searchValue));
    onSearchChange(searchValue);
  };

  return (
    <div className="list-header">
      <div className="search field is-horizontal">
        
       
        <FormControl sx={{ m: 1, width: '25ch', }} variant="filled">
          <InputLabel htmlFor="filled-adornment-search">Search</InputLabel>
          <FilledInput
            id="filled-adornment-search"
            onChange={handleSearch}
            value={userSearchTerm}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  edge="end"
                >
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}

export default UserSearch;
