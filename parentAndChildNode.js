const parents = document.getElementById("parent");
const enfant1 = document.getElementById("parent").firstElementChild.textContent;
console.log(parents.childNodes)
parents.childNodes[1].style.color="red";
