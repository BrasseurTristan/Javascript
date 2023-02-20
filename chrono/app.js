const displayCount = document.querySelector('#displayCounter');
const displayStart = document.querySelector('#start');
const displayStop = document.querySelector('#stop');
const displayPause = document.querySelector('#pause');
let query='';
let toastContainer;
let increment;
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
    increment=null;
}

function toastGeneration({
    message,
    background = '#00214d',
    color = '#fffffe',
    length = '3000ms', 
}) {
    toastContainer.insertAdjacentHTML('beforeend', `<p class="toast" style="background-color: ${background}; color: ${color}; animation-duration: ${length}"> ${message}</p>`)
    const ending = toastContainer.lastElementChild;
    ending.addEventListener('animationend',()=>ending.remove())
}

(function insertDiv() {
    document.body.insertAdjacentHTML('afterbegin',`<div id="toaster"></div>`);
    toastContainer = document.querySelector('#toaster');
})()

displayStart.addEventListener('click', () => {if (!increment){increment=setInterval('decrements()',1000,)}});
displayStart.addEventListener('click',() => {toastGeneration({message:'GO! GO! GO!',background:"#75FF80",color:"#0E0E0E",length:"5000ms"})});
displayPause.addEventListener('click',() => {clearInterval(increment),increment=null});
displayPause.addEventListener('click',() => {toastGeneration({message:'Pause',background:"#F0E2A3",color:"#0E0E0E",length:"5000ms"})});
displayStop.addEventListener('click',() => stopTimer());
displayStop.addEventListener('click',() => {toastGeneration({message:'STOP !',background:"#FD2121",color:"#0E0E0E",length:"5000ms"})});
