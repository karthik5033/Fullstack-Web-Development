// const { CHAR_LEFT_CURLY_BRACE } = require("picomatch/lib/constants");

// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   start: function () {
//     return `${this.make} car got started in ${this.year}`;
//   },
// };
// // console.log(car.start());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let john = new Person("John", 20);
// // console.log(john.name);

// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.speak = function () {
//   return `${this.type} makes a sound`;
// };
// Array.prototype.karthik = function () {
//   return `Custom method ${this}`;
// };
// let myArray = [1, 2, 3];
// console.log(myArray.karthik());
// let myNewArray = [1, 2, 3, 4, 5, 6];
// // console.log(myNewArray.karthik());

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     return `${this.model} is a car from ${this.make}`;
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     return `${this.make} : This is an inheritance`;
//   }
// }
// let myCar = new Car("Toyota", "Corolla");
// // console.log(myCar.start());
// // console.log(myCar.drive());

// let vehOne = new Vehicle("Toyota", "Corolla");
// // console.log(vehOne.make);

// Encapsulation
// class BankAccount {
//   #balance = 0;
//   deposit(amount) {
//     this.#balance += amount;
//     return this.balance;
//   }
// getBalance(){
//   return `${this.#balance}`
// }

// }
// let account=new BankAccount()
// console.log(account.getBalance());

//Abstraction

class CoffeeMachine {
  start() {
    // Call DB
    // filter value
    return `Starting the machine ...`;
  }

  brewCoffee() {
    // complex calculations
    return `Brewing Coffee`;
  }

  pressStartButton() {
    //   this.start();
    //   this.brewCoffee;
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne}+ ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton);

// Polymorphism

// class Bird{
//   fly(){
//     return `Flying mf.....`
//   }
// }

// class Penguin extends Bird {
//   fly(){
//     return `Penguin mf... cant fly`
//   }
// }

// let bird = new Bird()
// let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

// class Calculator{
//   static add(a,b){
//     return a+b
//   }
// }

// let miniCalc=new Calculator()
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));

// Getters and setters

class Employee {
  constructor(name, salery) {
    this.name = name;
    this._salery = salery;
  }

  get salery() {
    return `You are not allowed to see salery`
    return
  }
  set salery(value){
    if(value<0){
      console.error("Invalid Salery");
      
      
    }
  }
}
let emp = new Employee("Alice,50000");
console.log(emp._salery);
