// nomer 2
const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      let month = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      if (!error) {
        resolve(month);
      } else {
        reject("Sorry data not found");
      }
    }, 4000);
  });
};

getMonth()
  .then(function (response) {
    response.map((item) => {
      console.log(`nama bulan: ${item}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
