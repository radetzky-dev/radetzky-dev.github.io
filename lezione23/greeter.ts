class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

/**
 *
 * @param person
 * @returns
 */
function greeter(person: Person) {
  console.log("dati ricevuti!" + person.firstName + " " + person.lastName);
  const divInfo = document.getElementById("peopleData");
  divInfo?.innerHTML ="<p> <b>"+person.firstName+" "+person.lastName+"</b></p>";
}

//let user = new Student("Jane", "M.", "User");

/**
 * 
 * @param firstName 
 * @param lastName 
 */
function getData(firstName: string, lastName: string) {
  console.log("firstName " + firstName);
  console.log("lastName " + lastName);
  let myPerson: Person = { firstName : "", lastName : ""}; //todo inizializzarlo correttamente
  myPerson.firstName = firstName;
  myPerson.lastName = lastName;
  console.log (myPerson);
  greeter(myPerson);
}
