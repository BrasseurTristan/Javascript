const square = document.querySelector('.square');
document.onmousemove = (event) => {
     x = event.clientX * 100 / window.innerWidth + "%";
     y = event.clientY * 100 / window.innerHeight + "%";
     square.style.left = x;
     square.style.top = y;
}

