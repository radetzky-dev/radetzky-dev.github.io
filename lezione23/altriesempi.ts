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
