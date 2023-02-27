let inputTodo = document.querySelector('#input').value;
const liste = document.querySelector('#list');
const validation = document.querySelector('#validation');
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      validation.click();
      document.querySelector('#input').value = "";
    }
  });

  
  function createDelete () {
    inputTodo = document.querySelector('#input').value;
    if (inputTodo !=="" ){
      liste.insertAdjacentHTML('afterbegin',`<li class="test"> ${inputTodo}</li>`);
      const listed = liste.querySelector('.test')
      listed.addEventListener('dblclick',()=>listed.remove());
      listed.addEventListener('click',()=>{listed.classList.toggle('barre');});
      
    }else{
    alert("OUH PINAISE! tu veux pas travailler?")
  }
}

validation.addEventListener('click',()=>{createDelete()})

// --------------------EYES-ANIMATION----------------------


let eyes = document.querySelectorAll('.eyes');
document.addEventListener('mousemove',function(event){
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  eyes.forEach((eyes)=> {
    eyes.style.left = x;
    eyes.style.top = y;
  })
})
