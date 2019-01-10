// Je stock le résultat de ma variable sur la quelle j'ai appliqué la fonction toUpperCase();
console.log(phrase);
let phraseEnMj = phrase.toUpperCase();
console.log(phraseEnMj);

//Exo 1 Mettre phraseEnMj en minuscule et l'affichée directement dans une console.log()

console.log(phraseEnLj.toLowerCase());

// Exo 2: Créer variables dont l'une vaut "maison" et l'autre "chansonnette"
// Avec l'aide de la fonction former le mots "maisonnette" et affiché la dans la console.
// Stockez le résultat dans une variable du nom de maSubstr

let house = "maison";
let sing = "chansonnette";
console.log(house+sing.substr(7,5));
let maSubstr = house+.substr(7,5);



// Exo 3: 
// Mettez la première lettre en majuscule

console.log(maSubstr.substr(0,1).toUpperCase() + maSubstr.substr(1)); 

// Finally.let phrase = "Je n'ai pas terminé de créer mes fichiers et Nico attend depuis 10 minutes";

