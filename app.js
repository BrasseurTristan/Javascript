const displayCounter = document.querySelector('counterDisplay');
const btnUp = document.querySelector('#counterBtn');
const btnDown = document.querySelector('#counterBtn2');
const btnReset = document.querySelector('#counterBtn3');

let i = 0;

function increment(){
    i++;
    displayCounter.innerText=i;  
}

function decrement(){
    i--;
    displayCounter.innerText=i;  
}

function reset(){
    i=0;
    displayCounter.innerText= i;  
}

btnUp.addEventListener('click',event =>{increment()});
btnDown.addEventListener('click',event =>{decrement()});
btnReset.addEventListener('click',event =>{reset()});