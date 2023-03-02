// Créez une classe Animal qui a un constructeur prenant deux paramètres: name et sound.

// Le constructeur devrait initialiser les propriétés this.name et this.sound avec les valeurs des paramètres.

// Ajoutez une méthode makeSound() à la classe Animal qui affiche sur la console le nom de l'animal et le son qu'il fait.

// Créez une classe Dog qui étend la classe Animal.La classe Dog devrait avoir un constructeur prenant trois paramètres: name, sound et breed.

// Le constructeur devrait appeler le constructeur de la classe Animal en passant les paramètres name et sound et initialiser la propriété this.breed avec la valeur du paramètre.

// Ajoutez une méthode bark() à la classe Dog qui affiche sur la console le nom du chien et le son qu'il fait, en ajoutant le mot "Woof!" à la fin.

// Créez une instance de la classe Animal avec les paramètres "Chat" et "Miaou", puis appelez sa méthode makeSound().

// Créez une instance de la classe Dog avec les paramètres "Rex", "Wouf" et "Berger allemand", puis appelez sa méthode makeSound() et sa méthode bark().

// Utilisez la méthode console.log() pour afficher le nombre de propriétés de chaque instance(l'instance de Animal et l'instance de Dog).

class animal {

    #name;
    #sound;

    constructor(name, sound){
        this.setName(name);
        this.setSound(sound);
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }

    setSound(sound){
        this.#sound = sound;
    }

    getSound(){
        return this.#sound;
    }

    makeSound(name,sound){
        console.log(name,sound);
    }
}

class dog extends animal {

    #breed;

    constructor(name, sound, breed){
       super(name, sound, breed);
    }

    setBreed(breed){
        this.#breed(breed);
    }
    
    getBreed(){
        return this.#breed;
    }

}

console.log(makeSound(car,waf));