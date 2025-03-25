function uppg6() {
  // Skapa en array med namn som du döper till names
  // Loopa igenom arrayen och skriv ut alla namn i konsolen

  let names = ["Karl", "Jonas", "Fredrick", "Martin", "Gustav"];

  for (name of names) {
    console.log(name);
  }
}

module.exports = { uppg6 };
