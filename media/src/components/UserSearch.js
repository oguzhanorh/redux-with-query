import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

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
        <label className="label">Search</label>
        <input
          className="input"
          value={userSearchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default UserSearch;