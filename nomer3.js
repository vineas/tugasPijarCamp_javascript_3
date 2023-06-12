// nomer 3
// nama random api
const axios = require("axios");
axios
  .get("https://random-data-api.com/api/v2/users?size=2&is_xml=true/users")
  .then(function (response) {
    response.data.map((item) => {
      // console.log(item);
      console.log(`first name: ${item.first_name}`);
      console.log(`last name: ${item.last_name}`);
      console.log("=========================================");
    });
  })
  .catch(function (error) {
    console.log(error);
  });

// gunung berapi
// const axios = require("axios");
// axios
//   .get("https://indonesia-public-static-api.vercel.app/api/volcanoes")
// .then(function (response) {
//     response.data.map((item) => {
//     console.log(`nama gunung: ${item.nama}`);
//     console.log(`tinggi: ${item.tinggi_meter}`);
//     console.log(`Letusan Terakhir: ${item.estimasi_letusan_terakhir}`);
//     console.log('==================================');
//   });
// })
//   .catch(function (error) {
//     console.log(error);
//   });