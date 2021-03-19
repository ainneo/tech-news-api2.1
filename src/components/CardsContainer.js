import React, { useEffect, useState } from "react";
import Cards from "./Cards.js";
import "./components.css";

function CardsContainer() {
  const [news1, setNews1] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/token")
      .then((response) => response.json())
      .then((data) => {
        setNews1(data.data.articles);
      });
  }, []);

  return (
    <div className="right-side">
      <h2>Featured</h2>
      {news1.map((lemons, index) => (
        <Cards key={index} props={lemons} />
      ))}
    </div>
  );
}

export default CardsContainer;

// Notes:
//sidebar is CSS-GRID and sidebar-cards is Flexbox
// Map news data with cards in this containter
// lemons param can be named anything it is a default param
// Good to use ids for the key, but if no ids exsit, use index(use index as a last resort)
// in the map we create a props & key to be passed into card component, which is needed for long list of data arrays
//.slice method used to only call the first 3 news stories
