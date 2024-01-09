//Descrizione:
//Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//- Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
// - - va applicato uno sconto del 40% per gli over 65.


//MILESTONE 1:
//Iniziamo implementando il programma senza
//alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
//MILESTONE 2:
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//definire le constanti

let kmPercorso = document.getElementById('km');
let etaPasseggero = document.getElementById('age');
let sendButton = document.getElementById('send-btn');
let cancelButton = document.getElementById ('cancel-btn');
let nomePass = document.getElementById ('nomePass')
let costoTicket = document.getElementById('costoTicket')

// let prezzoBiglietto = document.getElementById('price');

//inizializzo boxBiglietto in una variabile

let boxBiglietto = document.getElementById("boxBiglietto")

//creo una funzione che gestisce il display

function displayShow (){
    
    let nomePasseggero = document.querySelector('#name').value;
    let kmPercorso = document.querySelector('#km').value;
    let etaPasseggero = document.querySelector('#age').value;
    let prezzo = 0.21 * kmPercorso;
    let prezzoTotale = 0

    if ( etaPasseggero <18 ) {
        prezzoTotale = prezzo - prezzo * 0.20;
        costoTicket.innerHTML = `${prezzoTotale.toFixed(2)}`
    } else if ( etaPasseggero >=65 ) {
        prezzoTotale = prezzo - prezzo * 0.40;
        costoTicket.innerHTML = `${prezzoTotale.toFixed(2)}`
    }   else {
         
            prezzoTotale = prezzo 
        
            costoTicket.innerHTML = `${prezzoTotale.toFixed(2)}`
    }

    
    nomePass.innerHTML = `${nomePasseggero}`
    // boxBiglietto.preventDefault();
    boxBiglietto.classList.remove("box-none")
    // boxBiglietto.classList.add("d-block")
    
    

}


function displayNone(){

    boxBiglietto.classList.add("box-none")
}

//attribuisco la funzione ad un elemento per attivarla
