const person={
name : "Karthik",
greet(){
    console.log(`Hi ,my name is ${this.name}`);
} 
    
};
person.greet();
let greetFunction=person.greet
greetFunction()
const boundGreet=person.greet.bind({name:"john"})
boundGreet()
