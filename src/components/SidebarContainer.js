import React, { useEffect, useState } from 'react';
import { getNews } from '../news.js';
import Sidebar from './Sidebar.js';
import './components.css';

function SidebarContainer() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then(data => setNews(data.slice(0,9)));
  }, []);

  return(
    <div className="sidebar">
      <h2>The Latest</h2>
      {news.map((lemons, index) => <Sidebar key={index} props={lemons} />)}
    </div>
  )
}

export default SidebarContainer
//Notes:
//Map news data with cards in this containter
//lemons param can be named anything it is a default param
//Good to use ids for the key, but if no ids exsit, use index(use index as a last resort)
//in the map we create a props & key to be passed into card component, which is needed for long list of data arrays

//https://www.andreasreiterer.at/react-useeffect-hook-loop/
//In our example case we only want to execute useEffect once when it is rendered the first time. We already know,
//if we don’t pass an array of dependencies, the Hook will be executed in a loop. But what if our hook does not
// depend on any other object?
// So we pass an empty array.
// That’s it:
// useEffect(() => {
//   // this is only executed once
// }, [])
// If we pass an empty array to useEffect, it’s only executed after the first render.
