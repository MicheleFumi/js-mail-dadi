/* 

Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato
sull’esito del controllo.

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a
chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo 
confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:

scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon divertimento e confermate lettura come al solito 

*/

// ESERCIZIO MAIL

/* let user_mail= prompt("inserisci la tua Email") //CREO IL PROMPT PER LA VARIABILE

const list= [                                      //CREO LA LISTA
    "marcomazzoli@gmail.com",
    "fabioalisei@gmail.com",
    "letiziapuccioni@gmail.com",
    "padremaronno@gmail.com"
    
]

 
 
    let input_mail= list.includes(user_mail)      //FACCIO CONTROLLARE CHE NELLA LISTA SIA INCLUSO IL PROMPT

    if (input_mail){                              // CREO LA CONDIZIONE PER CUI SE E' PRESENTE MI LOGGA UN TESTO POSITIVO, ALTRIMENTI UNO NEGATIVO
        console.log("Email validata");
    
        
    } else {
        console.log("Email non riconosciuta, riprovare");
        
    }
     */
    

// GIOCO DEI DADI

// GENERO UN DADO VIRTUALE RANDOMICO DA 0 A 6 CON ARROTONDAMENTO PER ECCESSO, MA SICCOME LA FORMULA PRENDE DA 0 A 6 AGGIUNGO UN +1 PER RIMUOVERE LO ZERO
let dado_user = Math.floor(Math.random() * 6) + 1 
let dado_cpu = Math.floor(Math.random() * 6) + 1
//CREO LE VARIABILI DI VITTORIA PAREGGIO E PERDITA DI PERSONA E CPU

if (dado_user > dado_cpu){
    console.log("il giocatore ha vinto!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
    
} else if(dado_user == dado_cpu){
    console.log("stallo alla messicana!!!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
}else {
    console.log("il computer ha vinto!");
    console.log("il dado giocatore " + dado_user);
    console.log("il dado computer " + dado_cpu);
}
