function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

fetchData()
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error));




