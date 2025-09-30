console.log('Opdracht 4: Studenten database');
let output = document.querySelector(".output")

fetch('./birthday.json')
    .then((response) => response.json())
    .then((students) => {
        for (let student of students) {
        output.innerHTML += `
    <h2>${student.name}</h2>
    <p>De student heet ${student.name}</p> 

    <h3>${student.age}</h3>
    <p>De student is ${student.age}</p>

    

    <img src="${student.image}" alt="${student.name}" width="150">
    
    
    `;
        
        }
document.querySelector(".onclick").addEventListener("click", () => {
  output.innerHTML = "";
  document.querySelector(".title").textContent = "0 birthdays today";
});
});



