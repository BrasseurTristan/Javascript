// Utilisez les fonctions native de tableau pour ces exercices

const countries = ["France", "Italie", "Espagne"];
// Afficher se tableau classé par ordre alphabetique
countries.sort();
console.log('Exercice 1')
console.log(countries);

const americanCountries = ["Canada", "États-Unis", "Mexique"];
// Afficher le contenu de "countries" et "americanCountries" dans un meme tableau (dans une const "worldCountries")
const worldCountries = countries.concat(americanCountries);
console.log('Exercice 2');
console.log(worldCountries);
//Enlever le premier element de ce tableau
console.log(worldCountries.slice(1));
//Enlever le dernier element de ce tableau
worldCountries.pop();
console.log(worldCountries)

// stocker dans une nouvelle variable les 2 derniers elements de ce tableau
const newArray = [worldCountries[worldCountries.length-1]].concat(worldCountries[worldCountries.length-2]);
console.log(newArray);