## Steps to hiding keys: (this example is using a fake key)

1. create .env file in root directory
2. add: REACT_APP_API_KEY=XXX in .env file
3. add .env file name to gitignore file
4. .env will be ignored on file upload

### Step 1: hiding keys
.env example in a env file:
```
REACT_APP_API_KEY=dx792355b86bax22c24eb7c9f2079dXX8942xxx
```

### Step 2: using keys
in news-api.js file:
```
const API_URL = `https://gnews.io/api/v3/search?q=bitcoin&token=${process.env.REACT_APP_API_KEY}`

//async function grabbing bitCoin data
export const getNews = async () => {
const result = await axios.get(API_URL)
.then(response => {
console.log(response.data);
return response.data.articles;
});
return(result);
}
```
### Step 3: Add keys to enviroment variables in Netlify

### Step 4: Hide keys in Network Tabs by using a lambda function


### When testing: Local development (See Netlify lambda repo for more info)
#### done every time you start up this project
```
ntl dev ##  shortcut for `netlify dev`, starts up create-react-app AND a local Node.js server
```
