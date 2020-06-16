import React from "react";
import './components.css';

function Cards ({ props }){
	return !props.image? []:(
		<div className='cards'>
		  <a href={props.url}><img className='card-img'src={props.image} alt="MIA" /></a>
	    <h5><a href={props.url}>{props.title}</a></h5>
	 </div>
	)
}

export default Cards

//Notes:
//Cards is filling up the empty grid space
//return !props.urlToImage? []:  do not return props that do not have a url urlToImage
//[] = when the component mounts, do this
