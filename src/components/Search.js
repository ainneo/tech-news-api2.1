import React from "react";



const Search = ( {searchHandler} ) =>{
  //input enterd triggers handleSearch,
  //returns searchHandler with the input as a param (e.target.value)
  //the param is then set to setSearchValue, which then becomes the searchValue.
  const handleSearchInputChange =(e) => {
    searchHandler(e.target.value);
  }
  //prevents enter key from submitting the form
  const submitHandler = (e)=>{
    e.preventDefault();
  }


  return (
      <form className="search" onSubmit={submitHandler}>
        <input
          onChange={handleSearchInputChange}
          type="text"
          placeholder="Search News..."
        />
        <i className="fas fa-search"  type="submit" value="SEARCH"></i>
      </form>
    );
}
export default Search;
