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

// const classroom1 = dw1.length;
// const classroom2 = dw2.length;
// const totalStudent = classroom1 + classroom2
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


// 6. Moyenne de la classe dw1 en js ?
let overrallAveragedw1 = 0;
for(i=0;dw1.length>i;i++) {
  overrallAveragedw1 += ((dw1[i].js.mark*dw1[i].js.rate)+(dw1[i].english.mark*dw1[i].english.rate))/(dw1[i].js.rate+dw1[i].english.rate);
}
let dw1Average = overrallAveragedw1 / i;
console.log(`La moyenne de la première classe est de ${dw1Average.toFixed(2)}/ 20`);

// 7. Moyenne des deux classes en js ?

let overrallAveragedw2 = 0;
for(i=0;dw2.length>i;i++) {
  overrallAveragedw2 += ((dw2[i].js.mark*dw2[i].js.rate)+(dw2[i].english.mark*dw2[i].english.rate))/(dw2[i].js.rate+dw2[i].english.rate);
}
let dw2Average = overrallAveragedw2 / i;
console.log(`La moyenne de la seconde classe est de ${dw1Average.toFixed(2)}/ 20`);
let globalAverage = (dw1Average+dw2Average)/2;
console.log(`La moyenne des deux classes est de ${globalAverage.toFixed(2)} / 20`)


// 8. Meilleure moyenne de la classe en js ?



// 9. Meilleur élève des deux classes



// 10. Meilleure fille des deux classes en anglais



// 11. Meilleur garcon en moyenne générale



// 12. Qui a la note médiane en anglais parmi dw1 ?




// 12.a. Donner sa position dans la classe



// 13. Qui a la moyenne médiane générale dw1 + dw2 ?



// 14. Moyenne générale des filles et moyenne générale des garcons ?



// 15. Qui sont les meilleurs en js, les filles ou les garcons ?



// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales