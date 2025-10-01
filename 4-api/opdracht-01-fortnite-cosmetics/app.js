let output = document.querySelector('.output');

fetch("https://fortnite-api.com/v2/cosmetics/new")
.then((response) => response.json())
.then((data) => {
for(let cosmetics of data.data.items.br) {
console.log(cosmetics);

    output.innerHTML += `
    <div class="item">
    <h2>${cosmetics.name}</h2>
    <img src="${cosmetics.images.icon}" alt="${cosmetics.name}" width="150">
    <p>De skin heet ${cosmetics.name}</p>    
    </div>
    `
}
});



