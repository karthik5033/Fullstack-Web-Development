/*1. Write a 'for' loop that loops through the array
'["green tea","black tea","chai","oolong tea" and stops the 
loop when it finds "chai"]' .
store all teas before "chai" in a new array named
'selectedTeas'*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
let x;
for (let i = 0; i < teas.length; i++) {
  
  const x = teas[i];
  selectedTeas.push(x);
  if (x == "chai") {
    break;
  }
}
console.log(selectedTeas);

/*2.Write a 'for' loop that loops through the array 
'["London","New York","Paris","Berlin"]' and skips "paris"
  Store the other cities in a new array named 'visitedCities'*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
