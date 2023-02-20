const openBurgerMenu = document.querySelector("#sandwich");
const burgerMenu = document.querySelector('.sidebar');
const closeBurgerMenu = document.querySelector('#closeBtn');
openBurgerMenu.addEventListener('click', () => {burgerMenu.classList.add("open")});
closeBurgerMenu.addEventListener('click', () => {burgerMenu.classList.remove("open")});
