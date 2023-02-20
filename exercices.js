function exercice(nb){
    console.log(`\n~~~~~~~~~~~~~~~~~EXERCICE ${nb}~~~~~~~~~~~~~~~~~\n`)
}
// Exercice 1 : Écrire une fonction qui prend un nombre et qui affiche tous les nombres de 0 jusqu'à ce nombre. Utilisez une boucle for.
exercice(1);
let number = 5;
function counting(number){
    let i = 0;
    for( ; i<number;i++){
        console.log(i)
    }return i
}

 console.log(`${counting(number)}\n`)

// Exercice 2 : Écrivez une fonction qui prend en entrée un nombre et affiche la table de multiplication de ce nombre de 1 à 10.
exercice(2);
let entry = 2
console.log(`Table de ${entry} :`); 
function multiplication(entry) {
    let result = ""
    for(let i = 1;i<=10;i++){
        result+=`${entry} x ${i} = ${(entry*i)}\n`
    }
    return result
}
console.log(`${multiplication(entry)}\n`)

// Exercice 3 : Écrivez une fonction qui prend en entrée un tableau de nombres et calcule la somme de ses éléments.
exercice(3);
let array = [1,2,3,4,5,6]
let sum=0
function additionArray(array) {
    for (let i = 0;i<array.length;i++){
        sum +=array[i];
    }return sum;
}
console.log(`La somme du tableau est de ${additionArray(array)}.\n`)

// Exercice 4 : Écrivez une fonction qui prend en entrée un nombre et renvoie la factorielle de ce nombre.
exercice(4);
let factorialResult=1;
function factorialNumber (number) {
    for (let i = 1;i<=number;i++) {
        factorialResult *= i;
    }
    return factorialResult
}
console.log(`${number}! = ${factorialNumber(number)}\n`)

// Exercice 5 : Écrivez une fonction qui prend en entrée un tableau de chaînes de caractères et renvoie la chaîne de caractères la plus longue.
exercice(5);
let secondArray = ["autre","alphabet","bonjour","pourquoi","vieux","jeune","algorithme"]
let longestWord=""
function compareArray(secondArray) {
    for (let i = 0;i<secondArray.length;i++){
        if (secondArray[i].length> longestWord.length) {
            longestWord = secondArray[i]
        }
    
    }return longestWord
}
console.log(`Le mot le plus long du tableau est ${compareArray(secondArray)}.\n`)

// Exercice 6 : Écrivez une fonction qui prend en entrée une chaîne de caractères et renvoie cette chaîne en inversant l'ordre de ses caractères.
exercice(6);
let word="Panthéon"
function invertword(word){
    let i =0;
    let invertWord="";
    while (word.length != i){
        invertWord=word.charAt(i)+invertWord;
        i++;
    }return invertWord
}
console.log(` L'inverse de ${word} est ${invertword(word)}.\n`)

// Exercice 7 : Écrivez une fonction qui prend en entrée un tableau de nombres et renvoie le plus grand nombre présent dans le tableau.
exercice(7);
let thirdArray = [1,2,4,6,5,3,9,8,7];
let highestNumber = 0;
function compareNumber(thirdArray) {
    for (i=0;i<=thirdArray.length;i++) {
        if (thirdArray[i]>highestNumber) {
            highestNumber=thirdArray[i];
        }
    }return highestNumber
}
console.log(`Le plus grand nombre du tableau est ${compareNumber(thirdArray)}.\n`)

// Exercice 8 : Écrire une fonction récursive qui prend un nombre et qui affiche tous les nombres de 0 jusqu'à ce nombre.



// Exercice 9 : Écrire une fonction récursive qui prend un tableau de chaînes de caractères et qui retourne la chaîne de caractères la plus longue du tableau.



// Exercice 10 : Écrire une fonction récursive qui prend un tableau de nombres et qui retourne la somme de tous les nombres du tableau.


