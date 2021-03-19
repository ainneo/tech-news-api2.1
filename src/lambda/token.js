// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311
// see docs for building functions: https://docs.netlify.com/functions/build-with-javascript/

import axios from "axios";
//lambda function
export async function handler(event, context) {
  //inside is our own logic

  try {
    const response = await axios.get(
      "https://gnews.io/api/v4/search?q=technology&token=e75d97437a447619e7baf217e5c2165d"
    ); //get data
    const data = response.data; // store response to a variable
    return {
      statusCode: 200,
      body: JSON.stringify({ data }), //return response as a json obj to the screen
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}

//use netlify lambda function
//write own logic inside export wrapper
//get data
//store response
//return response
// this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }
