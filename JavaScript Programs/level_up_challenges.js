// /*1. Write a 'for' loop that loops through the array
// '["green tea","black tea","chai","oolong tea" and stops the
// loop when it finds "chai"]' .
// store all teas before "chai" in a new array named
// 'selectedTeas'*/
// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// let x;
// for (let i = 0; i < teas.length; i++) {
//   const x = teas[i];

//   if (x === "chai") {
//     break;
//   }
//   selectedTeas.push(x);
// }
// console.log(selectedTeas);

// /*2.Write a 'for' loop that loops through the array
// '["London","New York","Paris","Berlin"]' and skips "paris"
//   Store the other cities in a new array named 'visitedCities'*/
// visitedCities = [];
// cities = ["London", "New York", "Paris", "Berlin"];
// for (let i = 0; i < cities.length; i++) {
//   const x = cities[i];
//   if (x == "Paris") {
//     continue;
//   }
//   visitedCities.push(x)
// }
// console.log(visitedCities);

// /*3.Use a 'for-of' loop to iterate through the array
// "[1,2,3,4,5]' and stop when the number '4' is found.
// Store the numbers before '4' in an array named 'smallNumbers' "  */
// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];
// for (const num of numbers) {
//   if (num == 4) {
//     break;
//   }
//   smallNumbers.push(num);
// }
// console.log(smallNumbers);

// /*4. Use a 'for-of' loop to iterate through the array
// '["chai","green tea","herbal tea","black tea"]'and skip "herbal tea"
//   Store the other teas in an array named "preferredTeas" */
// teas = ["chai", "green tea", "herbal tea", "black tea"];
// preferredTeas = [];
// for (const tea of teas) {
//   if (tea === "herbal tea") {
//     continue;
//   }
//   preferredTeas.push(tea);
// }
// console.log(preferredTeas);

/*5. Use a 'for-of' loop to loop through an object 
containing city population . 
 Stop the loop when the population of "berlin" is found and store 
 all previous cities population in a new object named 'cityPopulations'. 
 
 let citiesPopulation={
 "London"=8900000,
 "New York"=8400000,
 "Paris"=2200000,
 "Berlin"=3500000};
 
 */
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let citiesNewPopulations = {};
console.log(Object.keys(citiesPopulation));
for (const city in citiesPopulation) {
  // key=value
  citiesNewPopulations[city] = citiesPopulation[city];
  // console.log(citiesPopulation[city]);
}
console.log(citiesNewPopulations);

/* 6. Use a 'for-in' loop to loop through an object containing 
city populations.
  Skip any city with a population below 3 million and store
  the rest in a new object named 'largeCities'*/
/* */
/* */
/* */
/* */
