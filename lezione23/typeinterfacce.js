/**
 *
 * @param person
 * @returns
 */
function greeter(person) {
    var response = "Hello, " + person.firstName + " " + person.lastName;
    if (person.city !== undefined) {
        response += " " + person.city;
    }
    if (person.age !== undefined) {
        response += " " + person.age;
    }
    return response;
}
var user = { firstName: "Jane", lastName: "Doe", city: "London" };
var user2 = { firstName: "Robert", lastName: "Miles", age: 21 };
var user4 = { firstName: "Joe", lastName: "Rush", city: "Dublin" };
console.log("Ciao " + user.firstName);
console.log(greeter(user));
console.log(greeter(user2));
console.log(greeter(user4));
var user3 = { name: "mario", job: "idraulico" };
console.log("Ciao " + user3.name + " il tuo mestiere è :" + user3.job);
