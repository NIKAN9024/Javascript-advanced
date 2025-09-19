// Opdracht 4.1: Simpele Opslag
console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // TODO: Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;/* jouw code hier */
    
    // TODO: Check of naam niet leeg is
    if (!naam === '') {
        alert('Voer eerst een naam in!');
        return;
    }
    
    // TODO: Sla naam op in localStorage
    localStorage.setItem('namen', naam);
    
    // TODO: Toon welkomstbericht
    toonWelkom('welkom-bericht');
    
    // Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // TODO: Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem('namen') /* jouw code hier */
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // TODO: Toon juiste bericht
    if (opgeslagenNaam) {
        welkomElement.textContent = 'hallooo ' + opgeslagenNaam; /* jouw code hier */
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // TODO: Verwijder naam uit localStorage
    localStorage.removeItem('namen');
    toonWelkom();
}

// TODO: Roep toonWelkom() aan bij pagina laden
/* jouw code hier */;
addEventListener('load', toonWelkom);