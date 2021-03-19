import React, { useEffect, useState } from "react";
// import { getNews3 } from '../news.js';
import Topbar from "./Topbar.js";
import "./components.css";
import Search from "./Search.js";

function TopbarContainer() {
  const [searchValue, setSearchValue] = useState(""); //states
  const [news, setNews] = useState([]); //states
  //get news from API then resolve data into setNews state
  // useEffect(() => {
  //   getNews3().then(data => setNews(data.slice(0,8)))
  // }, []);

  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=technology&token=e75d97437a447619e7baf217e5c2165d"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  //handler is in Search instance below & passed in as prop to Search component
  const searchHandler = (value) => {
    setSearchValue(value);
  };

  // filter method:
  // created variable that is asigned to filter news articles & return titles to lowercase and
  // if articles match with includes(searchValue) then it will return true, if false it will return nothing
  // includes is case sentive
  let updateNews = news.filter((article) => {
    return article.title.toLowerCase().includes(searchValue.toLowerCase()); //search values in both upper&lowercase
  });

  return (
    <div className="topbar">
      <h2>AI News</h2>
      <Search searchHandler={searchHandler} />
      <div className="topbar-flex">
        {updateNews.map((lemons, index) => (
          <Topbar key={index} props={lemons} />
        ))}
      </div>
    </div>
  );
}

export default TopbarContainer;

//Notes:
//Search and Topbar are both child components of TopbarContainer
//Add hooks for search
//write 2 methods for searching - 1. search handler method, 2. conditions/reqs
//In the return use the condition to map through the data so that it only searches through the data that is being mapped

//Orignal Container before implementing the live search
// function TopbarContainer() {
//   const [news, setNews] = useState([]);//state(news) is set to [] - handle the data array that is from the server
//   useEffect(() => {
//     getNews3().then(data => setNews(data));//getting api data, resolving, and setting the news to data
//   }, []);
//
//   return(
//     <div className="topbar">
//       <h2>AI News</h2>
//       <Search />
//       <div className="topbar-flex">
//       {news.map((lemons, index) => <Topbar key={index} props={lemons} />)}
//       </div>
//     </div>
//   )
// }

//Notes:
//Map news data with cards in this containter
//lemons param can be named anything it is a default param
//Good to use ids for the key, but if no ids exsit, use index(use index as a last resort)
//in the map we create a props & key to be passed into card component, which is needed for long list of data arrays
