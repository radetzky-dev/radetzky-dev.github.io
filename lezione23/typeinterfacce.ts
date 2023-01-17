interface PersonInterface {
  firstName: string;
  lastName: string;
  city?: string;
  age?: number;
}

type OtherPersonType = {
  name: string;
  job?: string;
};

/**
 *
 * @param person
 * @returns
 */
function greeter(person: PersonInterface): string {
  let response: string = "Hello, " + person.firstName + " " + person.lastName;

  if (person.city !== undefined) {
    response += " " + person.city;
  }
  if (person.age !== undefined) {
    response += " " + person.age;
  }

  return response;
}

let user = { firstName: "Jane", lastName: "Doe", city: "London" };
let user2 = { firstName: "Robert", lastName: "Miles", age: 21 };

const user4: PersonInterface = { firstName: "Joe", lastName: "Rush", city: "Dublin" };
console.log ("Ciao "+user.firstName);

console.log(greeter(user));
console.log(greeter(user2));
console.log(greeter(user4));

const user3: OtherPersonType = { name: "mario", job: "idraulico" };

console.log("Ciao " + user3.name + " il tuo mestiere è :" + user3.job);
