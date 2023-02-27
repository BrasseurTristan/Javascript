const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];
// 1) Trier le tableau dans l'ordre Alphabetique

// console.log(firstNames.sort());

// 2) Associer un attribut "type":"humain" a chaque élève

// firstNames.forEach(firstNames => console.log({name:firstNames,type:"Humain"}));
let typedArray = firstNames.map(firstNames => {return{name: firstNames, type:" Humain"}});
// console.log(typedArray)

// 3) Associer à chaque élève un note aléatoire
const notedArray = typedArray.map(element => ({...element, note:Math.floor(Math.random()*21)}));
// console.log(notedArray)

// 4) Classer les élèves par note croissante

notedArray.sort((a,b)=>{
    if (a.note < b.note){
        return -1;
    }
    if (a.note > b.note) {
        return 1;
    }
    return 0;
})
console.log(notedArray)
// 5) Calculer la moyenne des élèves
let sum = 0;
let cpt = 0;
notedArray.forEach((element) => {
    sum = sum+ parseInt(element.note);
    cpt++
});
console.log(math.floor(sum/cpt));