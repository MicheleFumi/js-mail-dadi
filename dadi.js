// GIOCO DEI DADI

/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a
chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo 
confrontare qualcosa che "cosa" ci serve? */


 //HO AGGIUNTO UN PICCOLO SCRIPT PER "GIOCARCI"

// let dado_user = Number(prompt("inserisci un numero da 1 a 6 compresi")); 

// GENERO UN DADO VIRTUALE RANDOMICO DA 0 A 6 CON ARROTONDAMENTO PER ECCESSO, MA SICCOME LA FORMULA PRENDE DA 0 A 6 AGGIUNGO UN +1 PER RIMUOVERE LO ZERO

let dado_user = Math.floor(Math.random() * 6) + 1 
let dado_cpu = Math.floor(Math.random() * 6) + 1

//CREO LE VARIABILI DI VITTORIA PAREGGIO E PERDITA DI PERSONA E CPU

if (dado_user > dado_cpu){
    alert("il giocatore ha vinto!");
    console.log("il giocatore ha vinto!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
    
} else if(dado_user == dado_cpu){
    alert("stallo alla messicana!!!");
    console.log("stallo alla messicana!!!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
}else {
    alert("il computer ha vinto!");
    console.log("il computer ha vinto!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
}
 