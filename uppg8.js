function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  const persons = [
    { name: "Karl", age: 25 },
    { name: "Gustav", age: 30 },
    { name: "Jonas", age: 35 },
    { name: "Fredrick", age: 20 },
    { name: "Martin", age: 40 },
  ];

  function personAge(persons) {
    for (person of persons) {
      if (person.age >= 30) {
        console.log(person.name);
      }
    }
  }

  personAge(persons);
}

module.exports = { uppg8 };
