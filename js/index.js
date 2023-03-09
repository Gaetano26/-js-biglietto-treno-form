









const app = document.getElementById('app');

const nomeCognomeBox = app.querySelector('input[name="nome-cognome"]');

const ageBox = app.querySelector('input[name="age"]');

const kmBox = app.querySelector('input[name="km"]');

const generate = app.querySelector('.genera')

const clear = app.querySelector('.clear')

const ticket = app.querySelector('.ticket')

const nominativo = app.querySelector('.nominativo')








generate.addEventListener('click', function (){
    let nomeCognome = nomeCognomeBox.value;
    let age = ageBox.value;
    let km = kmBox.value;
    let priceForKm = 0.21;
    let discountForMinors = 0.20;
    let discountOver65 = 0.40;
    let price = (km * priceForKm).toFixed(2);
    ticket.innerHTML += `
    <h4>${price} euro</h4>
    `;
    nominativo.innerHTML += `
    <h4>${nomeCognome}</h4>
    `;
    if (age < 18 ){
        price = (price -(price * discountForMinors)).toFixed(2);
        ticket.innerHTML += 
        `
        <h4>${price} euro </h4>
        `;

      
   // Condizione sconto superiore ai 65 anni
      } else if (age > 65 ) {
      price = (price - (price * discountOver65)).toFixed(2);
      ticket.innerHTML += 
      `
      <h4>${price} euro </h4>
      `;
      
  // Condizione prezzo normale senza sconto
  } else {
    ticket.innerHTML += 
    `
    <h4>${price} euro </h4>
    `;
   
  }

})


clear.addEventListener('click', function (){
    nomeCognomeBox.value = '';
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = '';
    nominativo.innerHTML = '';
})





 