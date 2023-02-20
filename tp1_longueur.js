// Ecrire la fonction "length(word)" qui calcule la taille d'un mot. Si word n'est pas un mot alors retourner -1
// - avec un for
// - avec un while

const word = "tradition"

function getLength(word) {

    let sizeOfWord;
    let i = 0;
    let count = 0;
    // while (word[i] !== undefined) {
    //      i++
    // }
    for (;word[i]!==undefined;i++){
        count++;
    }
    sizeOfWord = count ;


    return sizeOfWord
}

const sizeOfWord = getLength(word);
console.log(sizeOfWord);

