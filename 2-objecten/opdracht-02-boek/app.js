// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.
console.log('opdracht 2.2: objecten');

let book = {
    title: "The Green Road",
    author: "Anne Enright",
    publisher: "W. W. Norton & Company",
    year: 2015,
    sold: 500000,
    price: "15,99"
};

document.querySelector('.output').innerHTML = `
<h2>${book.title}</h2>
<p>Autheur: ${book.author}</p>
<p>publisher: ${book.publisher}</p>
<p>year: ${book.year}</p>
<p>Verkocht: ${book.sold}</p>
<p>Price: ${book.price}</p>
`
;



// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit moet doen.

// Let op: in de code conventions staat dat je de code in het Engels moet schrijven!