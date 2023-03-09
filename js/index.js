







// app
const app = document.getElementById('app');

// nome del passeggero
const nomeCognomeBox = app.querySelector('input[name= "nome"]');

// età del passeggero
const ageBox = app.querySelector('input[name="age"]');

// kilometri da percorrere
const kmBox = app.querySelector('input[name="km"]');

// bottone 'genera'
const generate = app.querySelector('.genera')

// bottone 'clear'
const clear = app.querySelector('.clear')

// ticket
const ticket = app.querySelector('.ticket')

// nominativo
const nominativo = app.querySelector('.nominativo')




// funzione al click del bottone 'genera'
generate.addEventListener('click', function (){
    let nomeCognome = nomeCognomeBox.value;
    let age = ageBox.value;
    let km = kmBox.value;
    let priceForKm = 0.21;
    let discountForMinors = 0.20;
    let discountOver65 = 0.40;
    let price = (km * priceForKm).toFixed(2);
    nominativo.innerHTML += `
    <p>${nomeCognome}</p>
    `;
    // Condizione sconto age < 18
    if (age < 18 ){
        price = (price -(price * discountForMinors)).toFixed(2);
        ticket.innerHTML += 
        `
        <p>${price} euro </p>
        `;

      
   // Condizione sconto superiore ai 65 anni
    } else if (age > 65 ) {
      price = (price - (price * discountOver65)).toFixed(2);
      ticket.innerHTML += 
      `
      <p>${price} euro </p>
      `;
      
  // Condizione prezzo normale senza sconto
  } else {
    ticket.innerHTML += 
    `
    <p>${price} euro </p>
    `;
   
  }

})

// funzione al click del bottone 'cancella'
clear.addEventListener('click', function (){
    nomeCognomeBox.value = '';
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = '';
    nominativo.innerHTML = '';
})





 