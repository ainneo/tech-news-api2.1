import React from 'react';
import './App.css';
import CardsContainer from "./components/CardsContainer.js"
import TopbarContainer from "./components/TopbarContainer.js"
import SidebarContainer from "./components/SidebarContainer.js"
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import './components/components.css';

function App() {
  return (
    <div className="cardWrapper">
      <Header />
      <TopbarContainer />
      <SidebarContainer />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;

//NOTES:
//cardWrapper is parent grid container layout
// //*****run data through app.js to make sure your getting a response****
// import { getNews } from './news.js'
// import { useEffect, useState } from 'react';
// export const App =()=>{
//   const [news, setNews] = useState([]);
//   useEffect(()=>{
//     getNews().then(data => setNews(data));
//   }, []);
//   return(<p>{JSON.stringify(news)}</p>)//stringify to show data or else it will receive an error message
// }


// //*****run data through app.js to make sure your getting a response****
// import { getNews } from './news.js'
// import { useEffect, useState } from 'react';
// export const App =()=>{
//   const [news, setNews] = useState([]);
//   useEffect(()=>{
//     getNews().then(data => setNews(data));
//   }, []);
//   console.log({news})// log news to show the array of data
//   return(<p>hi</p>)
// }
