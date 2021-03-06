// array campo minato
var arrayMine = [];
var arrayNumeriEstratti = [];

// genera numeri casuali con min e max complessi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// ripetizioni eventuali numeri
function checkRipetizioni(numero){

    var ripetizione = false;

    for (let i = 0; i < arrayMine.length && !ripetizione; i++) {
        
        if(numero == arrayMine[i]){
            ripetizione = true;
        } else {
            ripetizione = false;
        }
        
    }

    // console.log(" * Ripetizione numero " + numero + " : " + ripetizione);
    return ripetizione;
}

//  restituisce numero celle gioco
function numberMax( difficolta){

    var numberMax = 0;

    switch (difficolta){

        case 0:
            numeroMax = 100;
            break;
        case 1:
            numeroMax = 80;
            break;
        case 2:
            numeroMax = 50;
            break;
    }

    console.log("Numero max :" + numeroMax);

    return numeroMax;

}

// genera numeri in cui ci sono le mine
function getAddMine( livello){

    console.log(" scelta numero mine in base alla difficlta");

    var numeroMine =16;
    var numeroMin = 1;
    var numeroMax = numberMax(livello);

    for (let i = 0; i < numeroMine; i++) {
        
        numeroEstratto = getRndInteger(numeroMin,numeroMax);
        
        if(checkRipetizioni(numeroEstratto)){
            i--;
        } else {    
            arrayMine.push(numeroEstratto);
            console.log( i + " - Numero casella mina: " + numeroEstratto);        
        }
    }

    console.log("-----------");
}

// richiedi numero utente
function inputNumero(min, max){

    var checkInput = false;
    var numero = 0;

    console.log("----------------------");

    do{

        numero = parseInt(prompt("Inserisci un numero tra 1 e "+ max +" complessi"));
        // numero = getRndInteger(1,100);

        if( numero == false ){

            /* input non valido */
            console.log("Input non valido");
            checkInput = false;

        } else{

            /* input valido*/
            console.log("Input valido");
            
            /* Valore tra min e max complessi*/
            if(numero >= min && numero <= max ){

                console.log("Numero complesso tra " + min + " e " + max + " complesso: " + numero);
                checkInput = true;

            } else{

                console.log("Numero non complesso tra 1 e 100 complesso: " + numero);
            }

        }

        console.log("-------------");

    } while( !checkInput)

    return numero;

}

// aggiungi numeri estratti
function addNumber(numero){

    if(!checkRipetizioni(numero)){

        arrayNumeriEstratti.push(numero);
        console.log("aggiunto numeri estratti: " + numero);
        console.log("--------");

    }
    
}

// check per numero mina
function isMina(numero){
    
    var isMina = false;
    var indice = 0;

    do{

        // Controlla se è una mina
        if( numero == arrayMine[indice]){

            console.log(numero + " è  una mina in posizione " + indice);
            isMina = true;
        
        // non è una mina
        } else {

            console.log(numero + " non è  una mina in posizione " + indice);
            isMina = false;
            
        } 

        // controlla l'elemento successivo
        indice++;

    } while(!isMina && indice < arrayMine.length);

    console.log("------------");

    return isMina;

}

// check per disponiblità mosse
function mossaDisponibile( numberMax){


    var mossaDisponibile = numberMax - arrayMine.length - arrayNumeriEstratti.length;

    if( mossaDisponibile == 0 ){
        console.log("Mossa non disponibili");
        mossaDisponibile = false;
    } else {
        console.log("Mosse disponibili: "+ mossaDisponibile);
        mossaDisponibile = true;
    }

    console.log("------------");
    return mossaDisponibile;

}

// Fine partita
function CheckEndGame(numero, numeroMax){

    var endGame = false;

    if( mossaDisponibile(numeroMax) && isMina(numero)){

        endGame = false;

    } else {
        endGame = true;
    }

    console.log("---------");
    return endGame;
}

// richiedi numero utente
function inputNumeroDifficolta(min, max){

    var checkInput = false;
    var livello = 0;

    console.log("----------------------");

    do{

        livello = parseInt(prompt("Inserisci un numero tra " +min +" e " + max+" per scegliere difficolta"));
   
        if( livello == false ){

            /* input non valido */
            console.log("Input non valido");
            checkInput = false;

        } else{

            /* input valido*/
            console.log("Input valido");
            
            /* Valore tra min e max complessi*/
            if(livello >= min && livello <= max ){

                console.log("Numero complesso tra " + min + " e " + max + " complesso: " + livello);
                checkInput = true;

            } else{

                console.log("Numero non complesso tra 1 e 3 difficolta: " + livello);
            }

        }

        console.log("-------------");

    } while( !checkInput)

    return livello - 1;

}

// scelta difficolta
function sceltaDifficolta(){

    var difficolta = inputNumeroDifficolta(1,3);
    return difficolta;
    
}

// programma
function programma(){

    var playGame = true;
    
    console.log("Scegli una difficolta");
    var livello = sceltaDifficolta(0,3);

    var numeroMax = numberMax(livello);

    console.log("Genera numeri mine");
    getAddMine(livello);

    do{

        console.log("Richiesta numero utente");
        var numero = inputNumero(1, numeroMax);

        console.log("inserisci ai numeri estratti");
        addNumber(numero);

        console.log("Controlla se finita partita");
        var endGameVar = CheckEndGame(numero, numeroMax);

        if(!endGameVar){
            console.log("terminata la partita");
            playGame = false;
        } else {
            console.log("continua la partita");
            playGame = true;
        }

    } while (playGame);

    // punteggio finale
    if(isMina(numero) && arrayNumeriEstratti-length == 0){
        console.log("Il tuo punteggio finale: " + (arrayNumeriEstratti.length));
    } else if(isMina(numero)){
        console.log("Il tuo punteggio finale: " + arrayNumeriEstratti.length);
    } else{
         console.log("Punteggio senza ripetizioni numeri");
    }

}

programma();

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.


// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.

// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.

// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.

// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50