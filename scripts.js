
function mostraRisultato() {
    // Ottenere i valori dagli input
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let colore = document.getElementById("colore").value;

    // Concatenare i valori e aggiungere "130"
    
    let risultato = nome + cognome + colore + "130";

    // Mostrare il risultato sulla pagina
    document.getElementById("result").textContent = risultato;
}