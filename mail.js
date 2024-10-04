/* 

Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato
sull’esito del controllo.

Consigli del giorno:

scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon divertimento e confermate lettura come al solito 

*/

// ESERCIZIO MAIL

let input_mail= prompt("inserisci la tua Email");    //CREO LA VARIABILE DA PROMPTARE

const list= [                                      //CREO LA LISTA
    "marcomazzoli@gmail.com",
    "fabioalisei@gmail.com",
    "letiziapuccioni@gmail.com",
    "padremaronno@gmail.com"
    
]

 
 
    let user_mail= list.includes(input_mail)      //FACCIO CONTROLLARE CHE NELLA LISTA SIA INCLUSO IL PROMPT

    if (user_mail){                              // CREO LA CONDIZIONE PER CUI SE E' PRESENTE MI LOGGA UN TESTO POSITIVO, ALTRIMENTI UNO NEGATIVO
        alert("Email validata");
       
    
        
    } else {
        alert("Email non riconosciuta, riprovare");  //CREO UN ALERT CHE MI AVVISI  CHE NON E' GIUSTA
        
    }
    
    

