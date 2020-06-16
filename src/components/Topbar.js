import React from "react";
import './components.css';

function Topbar ({props}){
 return !props.image? []:(
	 <div className="topbar-cards">
		 <a href={props.url}><img className='topbar-img'src={props.image} alt="MIA" /></a>
		 <div>
		 <h5><a href={props.url}>{props.title}</a></h5>
		 </div>
	 </div>
 )
}

export default Topbar
