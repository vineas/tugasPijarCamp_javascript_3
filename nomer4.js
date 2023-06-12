// nomer 4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.map((item) => {
      console.log(`name: ${item.name}`);
    });
  })
  .catch((err) => {
    console.log(err);
});

const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // console.log(response);
    response.data.map((item) => {
      console.log(`name: ${item.name}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
