// // palindroma
// // chiedere una parola all'utente
// var parola = prompt("inserire una parola");
// console.log(parola);
//
// // invocazione del risultato della funzione
// var invertiParola = invertiLettere(parola);
// console.log(invertiParola);
//
// // funzione per invertire la parola
// function invertiLettere (word) {
//
//   var reverse = word.split("").reverse().join("");
//
//   return reverse;
//
// }
// // cosa succede se una parola è palindroma
// if (parola == invertiParola) {
//   console.log("questa è una parola palindroma");
// }


// pari e dispari
// valori da scegliere
var numMin = 1
var numMax = 5
// far scegliere all'utente pari o dispari
var pariDispari = (prompt("scegli tra pari e dispari"));
while ( (pariDispari != "pari") && (pariDispari != "dispari") ) {
  alert("Attenzione! Scrivere bene pari o dispari");
  pariDispari = (prompt("scegli tra pari e dispari"));
}
var numUser = parseInt(prompt("scegli un numero da 1 a 5"));
while ((numUser < numMin) || (numUser > numMax)) {
  numUser = parseInt(prompt("scegli un numero da 1 a 5"));
}
console.log(numUser);
// far generare un numero random da 1 a 5 al computer
var numPc = getRandomIntInclusive(1,5);
console.log(numPc);


function getRandomIntInclusive(numMin, numMax) {
  var numRand = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  return numRand;
}

// funzione per pariDispari
function pariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

// risultato somma numero user e numero generato dal pc con vincitore
var somma = 0
somma = numUser + numPc;
if (somma == "pari") {
  console.log("vince il pari");
} else {
  console.log("vince il dispari");
}
