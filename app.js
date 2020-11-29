var min = 1;
var max = 100;

var lunghezza = 40 + "px";

var numRighe = 10;
var numColonne = 10;
var numCell = 100;

var numberMaxCircle = 16;
var positionCircle = [];


function startFunction() {

    // create cell of playground
    for (var i = 0; i < numCell; i++) {

        var rowNumber = -1;

        if(i % 10 == 0){

            rowNumber++;

            var divPlayground = document.getElementById("playground");
            var newDiv = document.createElement("div");
            newDiv.classList.add("row");
            newDiv.setAttribute("id", "row" + rowNumber);
            divPlayground.appendChild(newDiv);
            console.log("--> " + "row" + rowNumber);

        }

        // create cell of playground
        var divPlayground = document.getElementById("row" + rowNumber );
        console.log("--> " + divPlayground);
        var newDiv = document.createElement("div");
        newDiv.classList.add("green");
        newDiv.classList.add("light");
        newDiv.style.width =lunghezza;
        newDiv.style.height=lunghezza;
        newDiv.style.display="inline-block";
        newDiv.innerHTML = " ";
        newDiv.setAttribute("id", i);

        //add element to html
        divPlayground.appendChild(newDiv);


    }
}

function game() {

    // Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
    for (var i = 0; i < numberMaxCircle; i++) {
        var number = getRndInteger(min, max);
        positionCircle.push(number);
    }
}

    // Dopodiché, il programma deve chiedere all'utente un numero alla volta

    // il numero indicato dall'utente è una mina oppure no.

    // se l'utente becca una mina, il gioco finisce, mentre

    // se il numero non corrisponde ad una mina, il gioco prosegue e il
    // programma chiede all'utente un nuovo numero.



function createFiledCell(){

}

// inizializza funzione caricamento
startFunction();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
