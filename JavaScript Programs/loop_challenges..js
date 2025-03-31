// /*1.Write a 'while' loop that circulates the sum of all
// numbers from 1 to 5 and store the result in a variable
// named 'sum '. */
// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i += 1;
// }
// console.log(sum);

// /* 2. Write a 'while'loop that counts down from
//  5 to 1 and stores the numbers in an array named
//   'countdown'.*/
//   let countdown=[]
//   let i=5
//   while (i>=1) {
//     countdown.push(i)
//     i--
//   }
//   console.log(countdown);

// /* 3. Write a 'do while' loop that prompts a user to enter
// their favourite tea type until they enter "stop".
// Store each tea type in an array named 'teaCollection'*/
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt("enter your favourite tea(type 'stop' to finish)");
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== stop);

// /*4. Write a 'do while' loop that adds numbers form 1 to 3
// and stores the result in a variable named 'total' */
// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
// console.log(total);

// /* 5. Write a 'for' loop that multiplies each element
// in the array '[2,4,6]' by 2 and the result in a new
// array named 'multipliedNumbers'  */

// let multipliedNumbers=[]
// let numbers=[2,4,6]
// let x
// for (i=0;i<3;i++) {
//   let x=numbers[i]*2
//   multipliedNumbers.push(x)
// }
// console.log(multipliedNumbers);

/*6.Write a 'for' loop that lists all the cities in
the array '["paris","New York","Tokyo","London"] and stores
each city in a new array named 'cityList'*/
let cityList = [];
let cities = ["paris", "New York", "Tokyo", "London"];
for (let i = 0; i < cities.length; i++) {
  x = cities[i];
  cityList.push(x);
}
console.log(cityList);
