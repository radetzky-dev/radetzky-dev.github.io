function checkFreeRoom() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("**** INIZIO PRENOTAZIONE STANZA ****");

/*
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

*/

const promiseReservation = new Promise((resolve, reject) => {
  let result = checkFreeRoom();
  console.log("Result " + result);
 
    console.log("ok");
    resolve("OK");

});

promiseReservation.then((successMessage) => {
  console.log(`Bene: ${successMessage}`);
});
/*
promiseReservation.catch((errorMessage) => {
  console.error(`Peccato: ${errorMessage}`);
});

promiseReservation.finally((info) => console.log("Finito tutto"));*/
console.log("**** FINITO PRENOTAZIONE STANZA ****");


/*
new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Ho ottenuto: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("Finito tutto"));
*/