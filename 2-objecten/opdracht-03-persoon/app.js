// Stap 1
console.log('opdracht 2.3: persoon object');


let person = {
    name: "Omar",
    age: "19",
    birthDate: "may 26th 2006",
    gender: "male",
    alive: true,
    hobbys: ["fitness", "IT", "gaming"],
    


veranderName: function(newName){
    this.name = newName;
},
veranderAlive: function(newAlive){
    this.alive = newAlive;
},
toevoegHobby: function(newAlive){
    this.hobbys.push(newAlive);
}
};

person.veranderName("Ali");
person.veranderAlive("false");
person.toevoegHobby("Boxing");


document.querySelector('.output').innerHTML = `
<h2>${person.name}</h2>
<p>Age: ${person.age}</p>
<p>Birth Date: ${person.birthDate}</p>
<p>Gender: ${person.gender}</p>
<p>Alive: ${person.alive}</p>
<p>Hobbys: ${person.hobbys}</p>
`
;




// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

// Het object moet ook de volgende methods bevatten:

//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.

// Gebruik geen arrow function in een object!