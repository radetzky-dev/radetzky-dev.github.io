let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.

function greet(name: string, age: number) {
    console.log("Hello, " + name.toUpperCase() + " hai "+age+" anni.");
  }

console.log(obj);

greet("Mario",19);