const square = document.querySelector('.square');
const square2 = document.querySelector('.square2');
let mouse = false;
x = 100 / window.innerWidth ;
function mouseOver() {
 if (mouse === true){
    x++;
    square2.style.right = x +"px";
    square.style.left = x +"px";
    requestAnimationFrame(mouseOver); 
 }
}
square.addEventListener('mouseenter',()=> {mouse=true;mouseOver()});
square.addEventListener('mouseleave',()=> {mouse=false});