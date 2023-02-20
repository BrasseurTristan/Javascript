const displayStart = document.querySelector('#start');
const displayStop = document.querySelector('#stop');
const displayCount = document.querySelector('#displayCounter');
const displayPause = document.querySelector('#pause');



let query=''
function decrements() {
    if(query !== parseInt(query)){

     query = prompt("Quelle est la durée du compte à rebours ? ");
    }
    if(query > 0){
        displayCount.innerText = parseInt(query);
        query--;
       if (query<10){
            displayCount.innerText ="0"+parseInt(query);
    }}
    else {
        clearInterval(increment);
        query = displayCount.innerText = 'FIN';
    }

}

function stopTimer() {

    clearInterval(increment);
    query= displayCount.innerText = 'FIN';
}

let increment;
displayStart.addEventListener('click', () => {increment=setInterval('decrements()',1000,)});
displayPause.addEventListener('click',() => {clearInterval(increment)});
displayStop.addEventListener('click',() => stopTimer());
