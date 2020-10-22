// palindroma
// chiedere una parola all'utente
var parola = prompt("inserire una parola");
console.log(parola);

// invocazione del risultato della funzione
var invertiParola = invertiLettere(parola);
console.log(invertiParola);

// funzione per invertire la parola
function invertiLettere (word) {

  var reverse = word.split("").reverse().join("");

  return reverse;

}

if (parola == invertiParola) {
  console.log("questa è una parola palindroma");
}
