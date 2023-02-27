const square = document.querySelector('.square');
const zombie = document.querySelector('.zombie');
document.addEventListener('mousemove',(event) => {
    console.log(u+"A")
     xAxe = event.pageX 
     yAxe = event.pageY 
     xClient=event.screenX
     square.style.left = xAxe;
     square.style.top = yAxe;
    
     let test = event.pageX;
     if (test<xClient){
        zombie.classList.add("right");
     }
     console.log(event.pageX+"B")
    })

function walkingZombie(){
    zombie.style.left = xAxe-700;
    zombie.style.top = yAxe-220;   
}

setInterval(walkingZombie,50);