let output = document.querySelector('.output');

fetch("https://restcountries.com/v3.1/all?fields=name,flags")

.then((response) => response.json())
.then((data) => {
for(let countries of data) {
console.log(countries);
    output.innerHTML += `
    <div class="item">
    <h2>${countries.name.common}</h2>
    <img src="${countries.flags.png}" alt="${countries.name.common}" width="150">
    <p>De vlag van ${countries.name.common}</p>    
    </div>
    `;
}
});