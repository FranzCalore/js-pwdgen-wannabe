let variabileNome = prompt("inserisci il tuo nome");
let variabileCognome = prompt ("inserisci il tuo cognome");
let variabileColore = prompt ("inserisci il tuo colore preferito");
let variabileNumero1 = prompt ("inserisci un numero");
let variabileNumero2 = prompt ("inserisci un altro numero");

variabileNumero1 = parseInt(variabileNumero1);
variabileNumero2 = parseInt(variabileNumero2);

let variabileQuoziente = variabileNumero1/variabileNumero2;
variabileQuoziente = variabileQuoziente.toFixed(1)

let passwordSicurissima = variabileNome + variabileCognome + variabileColore +variabileQuoziente;

console.info (passwordSicurissima)

document.getElementById("passwordSicura").innerHTML="La tua Password Sicurissima è <br> <b>" + passwordSicurissima +"</b>";