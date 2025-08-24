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



function greet(name){
  setTimeout(function () {
      console.log("hello"+ name);
      
    },5000)
    
}
greet("\tmf")