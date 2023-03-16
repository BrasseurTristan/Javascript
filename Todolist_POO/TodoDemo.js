"use strict";

// une Todo, information du contenu, barré ou supp
class Todo {
  isChecked;
  constructor(text){
    this.text = text;
    this.isChecked=false;
  }
  toggleCheck(){
    this.isChecked= ! this.isChecked;
  }
}

// une liste de qqch, reutilisable pour nimporte quel qqch, stockage des taches dans list
class List {
  #collection = [];
  #Class;

  constructor(name, Class) { // On donne la TOdo à la CLass
    this.#Class = Class;
    this.name = name;
  }

  getItems() { 
    return this.#collection;
  }

  addItem(args) {
    const todo = new this.#Class(...args);
    this.#collection.push(todo);
  }

  deleteItem(item) {
    const indexToDelete = this.#collection.findIndex((listItem => listItem))
    this.#collection.splice(indexToDelete,1)
  }
    // Permet de sauvegarder des éléments avant le reset // LocalStorage
  save() {
  
  }
    // Apelle le save si refresh de la page de la todo list
  init() {

  }
}

  // le service en charge de la gestion de ma Liste de Todos , Apelle les méthodes de la class List // Event que dans cette class TodoService  (2 méthodes)
class TodoService {

  constructor(name,Class,listEl){
  this.list=new List(name,Class);
  this.listEl=listEl;
  }

  addItem(str) {
   this.list.addItem(str);
   this.display();
    // Met à jour la liste => List.addItems
    // Met à jour l'élément
    
  }

  display(){
    console.log(this.list.getItems());
    this.listEl.innerHTML="";
    this.list.getItems().forEach(todo => {
    const todoEl=document.createElement("div");
    todoEl.classList.add('todo');
    if(todo.isChecked)todoEl.classList.add("checked");
    todoEl.innerText = todo.text;
    todoEl.addEventListener('click', () => {
      todo.toggleCheck();
      this.display();
    })
    todoEl.addEventListener('dblclick', () => {
      this.list.deleteItem(todo);
    })
    this.listEl.append(todoEl);
    })
  }
  

}

class Voiture{

  constructor(marque,modele,couleur){
    this.marque=marque;
    this.modele=modele;
    this.couleur=couleur;
  }

  start(){
    console.log(`${this.modele} ${this.marque} ${this.couleur} démarre! Vrrrooooommmmmm`);
  }
}

class CarService {

  constructor(name,Class,listCarEl){
  this.list=new List(name,Class);
  this.listCarEl=listCarEl;
  }

  addItem(str) {
   this.list.addItem(str);
   this.display();
    // Met à jour la liste => List.addItems
    // Met à jour l'élément
  }

  display(){
    console.log(this.list.getItems());
    this.listCarEl.innerHTML="";
    this.list.getItems().forEach(carElem => {
    const todoCarEl=document.createElement("div");
    todoCarEl.classList.add('todo');
    todoCarEl.innerText = carElem.marque+" "+carElem.modele+" "+carElem.couleur;
    todoCarEl.addEventListener('click', () => {
      carElem.start();
      this.display();
    })
    todoCarEl.addEventListener('dblclick', () => {
      this.list.deleteItem(carElem);
    })
    this.listCarEl.append(todoCarEl);
    })
  }
}