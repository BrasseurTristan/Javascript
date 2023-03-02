const student = {
  firstName: "Jordan",
  gender: "male",
  js: {
    mark: 12,
    rate: 3
  },
  english: {
    mark: 4,
    rate: 2
  }
};

const dw1 = [
  {
    firstName: "Jean",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  },
  {
    firstName: "Marc",
    gender: "male",
    js: {
      mark: 9,
      rate: 3
    },
    english: {
      mark: 19,
      rate: 2
    }
  },
  {
    firstName: "Amar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 2,
      rate: 2
    }
  },
  {
    firstName: "Oscar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 12,
      rate: 2
    }
  },
  {
    firstName: "Juliette",
    gender: "female",
    js: {
      mark: 10,
      rate: 3
    },
    english: {
      mark: 11,
      rate: 2
    }
  }
];
const dw2 = [
  {
    firstName: "Jordan",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 4,
      rate: 2
    }
  },
  {
    firstName: "Baptiste",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 9,
      rate: 2
    }
  },
  {
    firstName: "Hélène",
    gender: "female",
    js: {
      mark: 13,
      rate: 3
    },
    english: {
      mark: 20,
      rate: 2
    }
  },
  {
    firstName: "Paola",
    gender: "female",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  }
];

// Cette deuxieme partie concerne les tableaux, attention ces tableaux contiennent des objets. 
// Vous pourrez utiliser les boucles for afin de traiter chaque element des tableaux
// Une autre solution que la boucle for sont les fonctions "map" et "forEach" utilisable sur un tableau (voir doc mdn) 

// 1. Combien y a t il d'élève dans la classe dw1 puis dw2 et dans toutes les classes ?

const classroom1 = dw1.length;
const classroom2 = dw2.length;
const totalStudent = classroom1 + classroom2
// console.log(`Il y a ${classroom1} élèves dans la première classe.`)
// console.log(`Il y a ${classroom2} élèves dans la première classe.`)
// console.log(`Il y a ${totalStudent} élèves au total. `)

// 2. Lister l'ensemble des élèves des deux classes dans l'ordre alphabétique

const newArray = dw1.concat(dw2);
newArray.sort((a,b) => {
  const firstname = a.firstName.toUpperCase();
  const secondname = b.firstName.toUpperCase();
  if (firstname < secondname){
    return -1;
  }
  if (firstname > secondname){
    return 1;
  }
  return 0;
});
console.log(newArray);
console.log("------------------");
// 3. Prendre les 3 premiers élèves de la classe dw1

// dw1Slice= dw1.slice(0,3);
// console.log(dw1Slice);

// 4. Prendre le dernier élève de la classe dw1

// dw1Pop=dw1.pop();
// console.log(dw1Pop);

// 5. Moyenne générale de chaque élève

// for (i=0;newArray.length>i;i++) {
//   console.log(` ${newArray[i].firstName} à eu ${((newArray[i].js.mark*newArray[i].js.rate)+(newArray[i].english.mark*newArray[i].english.rate))/(newArray[i].js.rate+newArray[i].english.rate)}/20 de moyenne générale.` );
// }
console.log("Moyenne : ");
const average = dw1.map((test)=>{
   return((test.js.mark*test.js.rate)+(test.english.mark*test.english.rate))/(test.js.rate+test.english.rate)
});
console.log(average);
console.log("------------------");
// 6. Moyenne de la classe dw1 en js ?
let overrallAveragedw1 = 0;
for(i=0;dw1.length>i;i++) {
  overrallAveragedw1 += ((dw1[i].js.mark*dw1[i].js.rate)+(dw1[i].english.mark*dw1[i].english.rate))/(dw1[i].js.rate+dw1[i].english.rate);
}
let dw1Average = overrallAveragedw1 / i;

// const moyenneJsOfDw1 = dw1.reduce((student, aggregate)=> {
//   return aggregate = student.js.mark;
// },0)/dw1.length
// ;
// console.log(`La moyenne de la première classe est de ${dw1Average.toFixed(2)}/ 20`);

// 7. Moyenne des deux classes en js ?

let overrallAveragedw2 = 0;
for(i=0;dw2.length>i;i++) {
  overrallAveragedw2 += ((dw2[i].js.mark*dw2[i].js.rate)+(dw2[i].english.mark*dw2[i].english.rate))/(dw2[i].js.rate+dw2[i].english.rate);
}
let dw2Average = overrallAveragedw2 / i;
// console.log(`La moyenne de la seconde classe est de ${dw1Average.toFixed(2)}/ 20`);
let globalAverage = (dw1Average+dw2Average)/2;
// console.log(`La moyenne des deux classes est de ${globalAverage.toFixed(2)} / 20`);


// 8. Meilleure moyenne de la classe en js ?

const bestMoyenneJsOfDw1 = dw1.sort((a,b) => {
  return a.js.mark>b.js.mark ? 1 : -1
});                        //vrai   faux

// 9. Meilleur élève des deux classes en Js

const allClass = dw1.concat(dw2).sort((a,b) => {
  return a.js.mark>b.js.mark ? 1 : -1
});
console.log("-------------------------");
// 10. Meilleure fille des deux classes en anglais

console.log(dw1.concat(dw2).filter(student => student.gender === "female").sort((a,b) =>
 a.js.mark>b.js.mark ? 1 : -1
)[0]);

console.log(dw2.concat(dw1)
.sort((a,b) => a.js.mark>b.js.mark ? 1 : -1)
.find(student => student.gender === "female")
);

console.log("-----------------------------");
// 11. Meilleur garcon en moyenne générale

const maleAverage = dw1.concat(dw2).filter(student => student.gender === "male").sort((a,b) => ((a.js.mark*a.js.rate)+(a.english.mark*a.english.rate))/(a.js.rate+a.english.rate)> ((b.js.mark*b.js.rate)+(b.english.mark*b.english.rate))/(b.js.rate+b.english.rate)? -1 : 1)[0];
console.log("Moyenne générale garçon : ");
console.log(maleAverage);
console.log("----------------------------");
// 12. Qui a la note médiane en anglais parmi dw1 ?
const arrayEnglishAverage = dw1.sort((a,b) => (a.english.mark*a.english.rate) > (b.english.mark*b.english.rate) ? -1 : 1);

const medianEnglish = Math.floor(arrayEnglishAverage.length/2);
console.log('Note médiane anglais dw1 : ');
console.log(arrayEnglishAverage[medianEnglish]);
console.log('----------------------------');



// 12.a. Donner la position de Jean dans la classe

console.log('Position de Jean dans la classe : ');
console.log(arrayEnglishAverage.findIndex(student => student.firstName ==="Jean")+1);
console.log('----------------------------');

// 13. Qui a la moyenne médiane générale dw1 + dw2 ?
const arrayDw1Average = dw1.map(student =>{
  const studentDw1JsMark = student.js.mark;
  const studentDw1JsRate = student.js.rate;
  const studentDw1EnglishMark = student.english.mark;
  const studentDw1EnglishRate = student.english.rate;
  const personnalAverage = ((studentDw1JsMark * studentDw1JsRate)+(studentDw1EnglishMark * studentDw1EnglishRate))/(studentDw1JsRate + studentDw1EnglishRate);

  return {...student, personnalAverage};
});
const arrayDw2Average = dw2.map(student =>{
  const studentDw2JsMark = student.js.mark;
  const studentDw2JsRate = student.js.rate;
  const studentDw2EnglishMark = student.english.mark;
  const studentDw2EnglishRate = student.english.rate;
  const personnalAverage = ((studentDw2JsMark * studentDw2JsRate)+(studentDw2EnglishMark * studentDw2EnglishRate))/(studentDw2JsRate + studentDw2EnglishRate);

  return {...student, personnalAverage};
});

const arrayGlobalAverage = arrayDw1Average.concat(arrayDw2Average).sort((a,b) => a.personnalAverage > b.personnalAverage ? -1 : 1);

const medianClassroom = Math.floor(arrayGlobalAverage.length/2);

console.log('Moyenne médiane générale : ')
console.log(arrayGlobalAverage[medianClassroom])
console.log("-----------------------------");
// 14. Moyenne générale des filles et moyenne générale des garcons ?
const femaleGlobalArray= arrayGlobalAverage.filter(student => student.gender === "female").reduce((average,student) => {
  return average+student.personnalAverage
},0);
console.log('Moyenne générale fille :');
console.log(Math.floor(femaleGlobalArray/arrayGlobalAverage.filter(student => student.gender === "female").length));
console.log("-----------------------------");
const maleGlobalArray = arrayGlobalAverage.filter(student => student.gender === "male").reduce((average,student) => {
  return average+student.personnalAverage
},0);
console.log('Moyenne générale garcons :');
console.log(Math.floor(maleGlobalArray/arrayGlobalAverage.filter(student => student.gender === "male").length));

console.log("-----------------------------");
// 15. Qui sont les meilleurs en js, les filles ou les garcons ?
const maleJsArray =arrayGlobalAverage.filter(student => student.gender === "male").reduce((average,student) =>{
  return average + (student.js.mark * student.js.rate
  )},0);
const maleRateJs =arrayGlobalAverage.filter(student => student.gender === "male").reduce((average,student) =>{ 
  return average + student.js.rate
  },0);
console.log('Moyenne des garcons : ')
console.log(Math.floor(maleJsArray/maleRateJs));
const femaleJsArray =arrayGlobalAverage.filter(student => student.gender === "female").reduce((average,student) =>{ 
  return average + (student.js.mark * student.js.rate
  )},0);
const femaleRateJs =arrayGlobalAverage.filter(student => student.gender === "female").reduce((average,student) =>{
  return average + student.js.rate
  },0);
console.log('Moyenne des filles : ')
console.log(Math.floor(femaleJsArray/femaleRateJs));

console.log("-----------------------------");
// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales
console.log('Classement filles moyennes générales :')
console.log(arrayGlobalAverage.filter(student => student.gender === "female").sort((a,b) =>
 a.personnalAverage>b.personnalAverage ? 1 : -1
));



// Exo supplementaire
const values = [2,3,3,4,5,6,1,7,8,4,5,5,6,2,3,1,8,3,3,3,8,3,4,5,5,5,6,9,9,1,2,3,2,4,7,7,2,1,8,8,1];

//À partir de ce tableau : 
//  - Garder seulement des valeurs uniques
//  - Trier les valeurs dans l'ordre croissant
function uniqueVal(value, index, self){
  return self.indexOf(value)===index;
}
const test = values.filter(uniqueVal);  // ES5
console.log(test.sort());

const uniqueValues = [...new Set(values)];  //ES6
console.log(uniqueValues.sort());