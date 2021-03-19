// import axios from 'axios';
// broken test key - do not use
// const API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1b823477c9864b7ebb4eb4e9d4148238';
// const API_URL2= 'https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=1b823477c9864b7ebb4eb4e9d4148238';
// const API_URL3= 'https://newsapi.org/v2/everything?q=artificial+intelligence&from=2020-25-02s&sortBy=popularity&apiKey=1b823477c9864b7ebb4eb4e9d4148238'

// const API_URL = `https://gnews.io/api/v3/search?q=technology&token=${process.env.REACT_APP_API_KEY}`;
// const API_URL2= `https://gnews.io/api/v3/search?q=tech&token=${process.env.REACT_APP_API_KEY}`;
// const API_URL3= `https://gnews.io/api/v3/search?q=science&token=${process.env.REACT_APP_API_KEY}`

// const API_URL = "https://gnews.io/api/v3/search?q=technology&token=e75d97437a447619e7baf217e5c2165d";
// const API_URL2= "https://gnews.io/api/v3/search?q=science&token=e75d97437a447619e7baf217e5c2165d";
// const API_URL3= "https://gnews.io/api/v3/search?q=tech&token=e75d97437a447619e7baf217e5c2165d"



// export const getNews = async () => {
//   const result = await axios.get(API_URL)
//   .then(response => {
//   console.log(response.data)
//   return response.data.articles;
//   });
//   return(result);
// }

// export const getNews2 = async () => {
//   const result = await axios.get(API_URL2)
//   .then(response => {
//   console.log(response.data)
//   return response.data.articles;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
//   return(result);
// }


// export const getNews3 = async () => {
//   const result = await axios.get(API_URL3)
//   .then(response => {
//   console.log(response.data)
//   return response.data.articles;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
//   return(result);
// }
