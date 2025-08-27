// function outer() {
//   let counter = 4;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

function outer() {
  let name = "karthik";
  function inner() {
    console.log(name);
  }
  
}

inner();