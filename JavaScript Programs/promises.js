function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

let response = fetchData();
console.log(response);
console.log(response.then((data) => console.log(data)));

