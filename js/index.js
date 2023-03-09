









const app = document.getElementById('app');

const nomeCognomeBox = app.querySelector('input[name="nome-cognome]');

const ageBox = app.querySelector('input[name="age"]');

const kmBox = app.querySelector('input[name="km"]');

const generate = app.querySelector('.genera')

const clear = app.querySelector('.clear')

const ticket = app.querySelector('.ticket')

const nominativo = app.querySelector('.nominativo')








generate.addEventListener('click', function (){
    let nomeCognome = nomeCognomeBox;
    let age = ageBox.value;
    let km = kmBox.value;
    let priceForKm = 0.21;
    let price = (km * priceForKm).toFixed(2);
    ticket.innerHTML += `
    <h4>${price} euro</h4>
    `;
    nominativo.innerHTML += `
    <h4>${nomeCognome}</h4>
    `;
})


clear.addEventListener('click', function (){
    nomeCognomeBox.textContent = '';
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = '';
    nominativo.innerHTML = '';
})





 