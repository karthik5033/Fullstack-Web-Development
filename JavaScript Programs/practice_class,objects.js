class classname {
  constructor(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }

  second_constructor() {
    return `the first argument is ${this.arg1} and the second argument is ${this.arg2}`;
  }
}
let object1 = new classname(7, 8);
console.log(object1.second_constructor());
