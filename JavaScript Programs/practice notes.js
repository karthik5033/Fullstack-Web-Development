// function Person() {
//   this.name = this.name;
//   this.sayHello = function () {
//     console.log("hi, im" + this.name);
//   };
//   const p1 =new Person("abc");
//   abc.sayHello();
// }

// // closures
// function outer() {
//   let name = "abc";
//   function inner() {
//     console.log("hello " + name);
//   }
//   return inner;
// }
// let greet = outer();
// greet();

// function outer(){

// }

let mc = function(name, age) {
 
  return ` the name is ${name} and age is ${age}`;
};

let a = mc("de", 4);
console.log(a);
console.log();
