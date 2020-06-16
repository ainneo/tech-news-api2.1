import React from "react";
import './components.css';
// import Search from "./Search.js"


function Header ( {props} ){

	let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  let todaysDate = mm + '/' + dd + '/' + yyyy;

	return(
		<div className="header box">
		<h1>Tech News</h1>
		<p>All the cyber news without fake news</p>
		<div className = "date-flex">
		<p>{ todaysDate.toString() }</p>
		
		</div>
    </div>
	)
}

export default Header
