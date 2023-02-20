// Ecrire la fonction "isPalindrome(word)" qui test si un mot est un palindrome. Si word m'est pas un palindrome alors retourner -1
// - avec un for
// - avec un while

const word = "kayak"

// function isPalindrom(word) {   
    // let invertWord="";
    // for (let i = word.length-1; i>=0;i--){
    //     invertWord += word.charAt(i);
    //     }if( word === invertWord){
    //         console.log(invertWord);
    //             return true;
    //         }else {
    //             console.log(invertWord);
    //             return -1;
    //         } 
    // let i =0;
    // while (word.length != i){
    //     invertWord=word.charAt(i)+invertWord;
    //     i++;
    // } if (word === invertWord) {
    //     console.log(invertWord);
    //     return true;
    // }else {
    //     console.log(invertWord);
    //     return -1;
    // }

    //Correction 
    // if (typeof word !== "string" || word.length < 2)return false
    // for (i=0; i <word.length/2;i++) {
    //     if (word[i] != word[word.length - 1 -i]) {
    //         return false;
    //     }
    // } 
    // return true;

    
    
// }
function isPalindromRecursive(word,i=0) {
    if (typeof word !== "string" || word.length < 2) return false;
    else if (word[i] !== word[word.length - 1 -i]) return false;
    else if (i >= word.length/2) return true;
    return isPalindromRecursive(word,++i);
    
}
console.log(isPalindromRecursive(word))
// const isPalindrome = isPalindrom(word);
// console.log(isPalindrome);