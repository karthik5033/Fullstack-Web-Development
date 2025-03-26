// number
let balance = 120;
let anotherBalance = new Number(120);

// console.log(typeof balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

let mystring = "hello";
let username = "karthik";
let oldGreet = mystring + "karthik";
console.log(oldGreet);
let greetMessage = `Hello ${username}`;
console.log(greetMessage);

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);
// output=false


let sm3 = Symbol("abc");
let sm4 = Symbol("abc");
console.log(sm3 == sm4);
// output=true
