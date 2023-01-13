import populatePersonsList, {
  populateOptions,
  Person,
  persons,
} from "./js/functions.js";

populatePersonsList(persons.list);
populateOptions(persons.list);

const personCreateForm = document.forms.item(0);
personCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const form = e.target;
  const name = form.elements[0].value;
  const age = form.elements[1].value;
  const city = form.elements[2].value;
  const person = new Person(name, age, city);
  persons.addItemToList(person);
  form.reset();
});

const birthdayForm = document.forms[1];
birthdayForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const selectedPersonName = e.target.elements[0].value;
  const selectedPerson = persons.list
    .filter((p) => p instanceof Person)
    .sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })[selectedPersonName];
 
  if (selectedPerson instanceof Person) {
    selectedPerson.age++;
    document.dispatchEvent(
      new Event("listUpdated", {
        bubbles: true,
      })
    );
  }
});

document.addEventListener("listUpdated", () => {
  populatePersonsList(persons.list);
  populateOptions(persons.list);
});
