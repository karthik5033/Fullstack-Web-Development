// class classname {
//   constructor(arg1, arg2) {
//     this.arg1 = arg1;
//     this.arg2 = arg2;
//   }

//   second_constructor() {
//     return `the first argument is ${this.arg1} and the second argument is ${this.arg2}`;
//   }
// }
// let object1 = new classname(7, 8);
// console.log(object1.second_constructor());
// console.log(object1.arg1);

// class Area{
//   square(a){
//     let area=a*a;
//     console.log(area);

//   }
//   rectangle(l,b){
//     let area=l*b;
//     console.log(area);

//   }
//   triangle(b,h){
//     let area= (b*h)/2;
//     console.log(area);

//   }
// }
// let a1=new Area();
// a1.square(4);
// let b1=new Area();
// b1.rectangle(4,5);
// let c1=new Area();
// c1.triangle(4,8);

// class animals{
//   constructor(){

//   }
//   dog(){
//     console.log("dog barks");
//   }
//   cat(){
//     console.log("mmeow");
//     }

//     rat(){
//       console.log("squeaks");

//     }

//   }
//   class birds extends animals
//  {
// parrot(){
//   console.log("chirps");
// }

// inheritance(){
//   this.rat()
// }
//  }

//  let x= new birds();
//  x.cat();

// function greet(name){
//   setTimeout(function () {
//       console.log("hello"+ name);

//     },5000)

// }
// greet("\tmf")

// class Animal{
//   constructor(name,sound){
//     this.name=name;
//     this.sound=sound;

//   }
//   speak(){
//     console.log(`${this.name} talks with ${this.sound} sound`);

//   }
// }
// let dog=new Animal("bruno","bark");
// dog.speak();

// class Cars {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
//   display() {
//     console.log(`brand : ${this.name}  model ; ${this.model}`);
//   }
// }
// let cars =[
//   new Cars("a", "b"),
//   new Cars("c", "d"),
//   new Cars("e", "f"),
//   new Cars("g", "h"),
// ];


// cars.forEach(cars=>console.log(`${cars.name} and ${cars.model}`));

let arr=[1,3,2,4,5];
// arr.forEach((value,index)=>{
//   console.log(`value:${value},index:${index}`);
  
// })
// arr.forEach((value,index,array)=>{
//   array[index]=3*value;
// });
// console.log(arr);
let double=arr.map((value)=>(value*=2))
console.log(double);

