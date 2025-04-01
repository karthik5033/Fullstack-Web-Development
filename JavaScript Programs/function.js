// /*1. Write a function named 'makeTea' taht takes one
// parameter,'typeOfTea',and returns a string like
// "making green tea"' when called with "green tea".
// Store the result in a variable named 'teaOrder'.
//  */
// teaOrder = [];
// function makeTea(typeOfTea) {
//   console.log(`Making ${typeOfTea} `);
//   teaOrder.push(typeOfTea);
// }
// makeTea("green tea");
// console.log(teaOrder);

// /*2. Create a function named 'orderTea' that takes one
// parameter,'teaType'.Inside this function,create another
// function named 'confirmOrder' taht returns a message like
// "Order confirmed for chai".
// Call 'confirmOrder' from within 'orderTea' and return the
// result */
// function orderTea(teaType) {
//   function confirmOrder(confirm) {
//     console.log(`Order confirmed for chai`);
//   }
//   return confirmOrder();
// }
// let orderConfirmation = orderTea();

// /*3. Write an arrow function named 'calculateTotal' that
// takes two parameters: 'price' and 'quantity'. the function
//  should  return the total cost by multiplying the 'price'
//  and 'quantity'.
//  Store the result in a variable named 'totalCost'*/

// const calculateTotal = (price, quantity) => {
//   return price * quantity;

//   //   implicit return
// };
// let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

// /*4. Write a function named 'processTeaOrder'that  takes
// another function,'makeTea', as a parameter and calls it with
// the argument "earl grey"
// return the argument of calling 'makeTea' */
// function makeTea(typeOfTea) {
//   return `maketea:${typeOfTea}`;
// }
// function processTeaOrder(teaFunction) {
//   return teaFunction("earl grey");
// }
// let order = processTeaOrder(makeTea);
// console.log(order);

/*5.Write a function named "createTeaMaker "that returns another
function . the returned function should take one parameter, 'teatype',
and return a message like "making green tea".
Store the returned function in a variable named 'teaMaker' and 
call it with "green tea".*/
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);

