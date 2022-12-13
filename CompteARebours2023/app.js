let bodyEl = document.getElementsByTagName("body")[0];
let titelEl = document.getElementById("title") ;
let minuteurEl = document.getElementById ("minuteur");
let joursEl = document.getElementById ("j");
let heuresEl = document.getElementById ("h");
let minutesEl = document.getElementById ("m");
let secondesEl = document.getElementById ("s");


let now = new Date();
const dateOffSetInMinutes =now.getTimezoneOffset();

const unJourEnMs = 1000 *60 *60 *24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

//const newYear = Date.now() -(dateOffSetInMinutes * uneMinuteEnMs)  + 3000;
const newYear = new Date("2023");

const getCountdown = () =>{
    let nowDate = Date.now();

    
    let tempsrestantEnMs = newYear -  nowDate + dateOffSetInMinutes +uneMinuteEnMs;

        //jours
    let nbJours  = Math.floor(tempsrestantEnMs / unJourEnMs);
    console.log(nbJours);

    //HEURES
    let resteTempsSansJoursMs = tempsrestantEnMs - (nbJours * unJourEnMs);
    let nbHeures = Math.floor(resteTempsSansJoursMs /uneHeureEnMs);

    //minutes
    let resteTempsSansHeuresMs =  resteTempsSansJoursMs - (nbHeures * uneHeureEnMs);
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs)

    //secondes
 
    let resteTempsSansMinutesMS = resteTempsSansHeuresMs - (nbMinutes * uneMinuteEnMs);
    let nbSecondes = Math.floor(resteTempsSansMinutesMS / 1000)

  

    console.log(nbJours);
    console.log(nbHeures);
    console.log(nbMinutes);
    console.log(nbSecondes)

    joursEl.textContent  = nbJours;
    heuresEl.textContent = nbHeures;
    minutesEl.textContent = nbMinutes;
    secondesEl.textContent = nbSecondes;

    if(tempsrestantEnMs <= 0){
        clearInterval(countDownInterval)
        bodyEl.requestFullscreen.backgroundImage = 'url("./newyear.jpg")'
        joursEl.textContent  = 0;
    heuresEl.textContent = 0;
    minutesEl.textContent = 0;
    secondesEl.textContent = 0;
    titelEl.innerHTML = "Bonne année !!! &#127881;&#127881;";

    }
    
}

let countDownInterval = setInterval(getCountdown, 1000)
//initialisation
getCountdown()

