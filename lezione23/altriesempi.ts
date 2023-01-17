let user: any = { userName: "Mario", userBirthYear: 1980 }; //recuperato da una chiamata

/**
 * Greet the user and show years
 * @param name
 * @param age
 */
function greet(name: string, age: number): void {
  console.log("Hello, " + name.toUpperCase() + " hai " + age + " anni.");
}

/**
 * Get the age
 * @param birthYear
 * @returns
 */
function getAge(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

greet(user["userName"], getAge(user["userBirthYear"]));

const names: string[] = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s);
});

/**
 * Print coordinates
 * @param pt
 */
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

/**
 * printName and lastName (if provided : last is not mandatory)
 * @param person 
 */
function printName(person: { first: string; last?: string }): void {
  console.log("Name: " + person.first);
  if (typeof person.last !== "undefined") {
    console.log("Surname: " + person.last);
  }
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
