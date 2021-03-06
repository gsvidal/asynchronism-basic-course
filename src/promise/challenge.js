const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

//We want to retrieve how many characters there are in the rick and morty API, the first character's name and his/her dimension name
fetchData(API)
  .then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then(data => {
    console.log(data.dimension);
  })
  .catch(err => console.error(err));