function checkFreeRoom() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("**** INIZIO PRENOTAZIONE STANZA ****");
const promiseReservation = new Promise((resolve, reject) => {
  let result = checkFreeRoom();
  console.log("Result: " + result);
  if (result > 4) {
    console.log("Stanza libera OK!");
    resolve("OK");
  } else {
    console.log("Nessuna stanza KO!");
    reject("KO");
  }
});

console.log("elaboro la tua prenotazione...");

promiseReservation
  .then((successMessage) => {
    console.log(`Bene: ${successMessage}`);
  })
  .catch((errorMessage) => {
    console.error(`Peccato: ${errorMessage}`);
  });

promiseReservation.finally(() => {
  console.log("**** FINITO PRENOTAZIONE STANZA ****");
});
