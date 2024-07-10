// dati

const space = ' '
const boolean = ' 130'

// Chiedere all'utente i suoi dati

let nome = prompt("Inserisci il tuo nome:");
let cognome = prompt("Inserisci il tuo cognome:");
let colore = prompt("Inserisci il tuo colore preferito:");

 // SOMMA i valori e aggiungere "130"

 let risultato = nome + space + cognome + space + colore + space + boolean;

// Mostrare il risultato nell'html

document.getElementById("risultato").textContent = risultato;