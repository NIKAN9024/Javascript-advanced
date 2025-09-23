// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 
console.log('opdracht 2.1: arrow function en for/of loop');


let marvels = ["Ironman 1, Ironman 2, Ironman 3, Ironman 4"];
const addMarvel = (newMarvel) => {
    marvels.push(newMarvel);    
}

addMarvel("Ironman5")
 for  (const marvel of marvels) {                  
    console.log(marvel);
 }


// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.

// Maak een arrow function genaamd 'addMarvel'
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
// Roep de functie op (het klopt dat je nog niets ziet)
// Loop met een for/of loop door de array en toon alle items in de array in je console
   
