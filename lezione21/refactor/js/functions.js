class Person {
  constructor(name, age, city = "", email = "") {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
  }
}

const populatePersonsList = function (persons) {
  function toListItem({ name, age, city, email }) {
    return `<li class="list-group-item d-flex">
                 <div>${name} ${city ? `(${city})` : ""} ${
      email ? `mail: ${email}` : ""
    }</div>
                 <div class="ms-auto">${age} anni</div>
              </li>`;
  }

  if (persons instanceof Array) {
    const ul = document.getElementById("persons-list");
    ul.innerHTML = persons
      .filter((p) => p instanceof Person)
      .sort((a, b) => a.age - b.age)
      .map(toListItem)
      .join("");
  }
};

const populateOptions = function (persons) {
  if (persons instanceof Array) {
    const form = document.forms.item(1);
    const select = form.elements[0];
    //Ordino alfabetico
    const newOptions = persons
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
      })
      .map((p, index) => new Option(p.name, index.toString()));
    const firstChild = [select.children[0]];
    const t = firstChild.concat(newOptions);
    select.innerHTML = ""; // svuota semplice
    t.forEach((i) => {
      select.append(i);
    });
  }
};

const persons = {
    list: [
      new Person("Zlaus", 82),
      new Person("Dario", 81, "Madrid"),
      new Person("Calter", 45, "Hamburg"),
      new Person("Busi", 39, "Hamburg", "susi@lego.it"),
      new Person("Antonio", 21, "Milano"),
      new Person("Euido", 37, "Torino"),
    ],
    addItemToList: function (item) {
      this.list.push(item);
      document.dispatchEvent(
        new Event("listUpdated", {
          bubbles: true,
        })
      );
    },
    getList: function () {
      return [...this.list];
    },
    somethingElse: "string",
  };

export default populatePersonsList;
export { Person, populateOptions,persons };
