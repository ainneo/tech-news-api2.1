import React from "react";
import './components.css';

function Sidebar ({props}){
	return !props.image? []:(
		<div className="sidebar-cards">
			<a href={props.url}><img className='sidebar-img'src={props.image} alt="MIA" /></a>
			<div>
			<p>{props.publishedAt}</p>
	    <h3>{props.title}</h3>
      <p><a className="aColor" href={props.url}>{props.description}</a></p>
			</div>
	  </div>
	)
}

export default Sidebar
