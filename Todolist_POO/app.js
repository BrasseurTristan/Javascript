"use strict";

const KC_NAME_ENTER = "Enter";
const KC_NAME_ECHAP = "Escape";
const todoInputEl = document.querySelector("input.input");
const carInputMarque = document.querySelector("input.inputMarque");
const carInputModele = document.querySelector("input.inputModele");
const carInputCouleur = document.querySelector("input.inputCouleur");
const listEl = document.querySelector(".list");
const listCarEl = document.querySelector(".list.car");
const todoService = new TodoService("Todo", Todo, listEl);
const carService = new CarService("Car", Voiture, listCarEl);

document.addEventListener("keyup", e => {
  if (e.key === KC_NAME_ENTER && todoInputEl.value) {
    todoService.addItem([todoInputEl.value]);
    todoInputEl.value = "";
  }
});

document.addEventListener("keyup", e => {
  if (e.key === KC_NAME_ECHAP && carInputMarque.value && carInputModele.value && carInputCouleur.value) {
    carService.addItem([carInputMarque.value,carInputModele.value,carInputCouleur.value]);
    carInputMarque.value = "";
    carInputModele.value = "";
    carInputCouleur.value = "";
  }
});