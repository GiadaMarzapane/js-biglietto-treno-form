const myNameSurname = document.getElementById('name-surname');
const myKm = document.getElementById('my-km');
const myAge = document.getElementById('my-age');
const submitButton = document.getElementById('submit');

const passengerName = document.getElementById('passenger-name');
const offerType = document.getElementById('offer-type');
const ticketPrice = document.getElementById('my-price');
const wagonNumber = document.getElementById('wagon');
const ticketCodeNumber = document.getElementById('ticket-code');

submitButton.addEventListener('click',
    function(){
        console.log('click sul button submit');
        console.log("L'utente si chiama: ", myNameSurname.value);
        passengerName.innerHTML = myNameSurname.value;
        console.log('I km da percorrere sono: ', myKm.value);
        console.log("L'utente è: ", myAge.value);    
        let basePrice = myKm.value * 0.21;
        basePrice = basePrice.toFixed(2);
        let randomWagonNumber = Math.floor((Math.random() * 10) + 1);
        wagonNumber.innerHTML = randomWagonNumber;
        let randomTicketCodeNumber = Math.floor((Math.random() * 10000) + 90000);
        ticketCodeNumber.innerHTML = randomTicketCodeNumber;
        document.querySelector('section.display-none').style.display = 'block';
        document.querySelector('h2.display-none').style.display = 'block';

        if (myAge.value == 'young'){
            let discountPrice20 = (basePrice - (basePrice * 0.20)).toFixed(2);
            console.log('Prezzo scontato per i minorenni: €', discountPrice20);
            offerType.innerHTML = 'Offerta Young -20%';
            ticketPrice.innerHTML = '€ ' + discountPrice20;            
        }

        else if (myAge.value == 'over'){
            let discountPrice40 = (basePrice - (basePrice * 0.40)).toFixed(2);
            console.log('Prezzo scontato per gli over 65: €', discountPrice40);
            offerType.innerHTML = 'Offerta Over 65 -40%';
            ticketPrice.innerHTML = '€ ' + discountPrice40;
        }

        else if (myAge.value == 'adult'){
            console.log('Il prezzo del biglietto sarà: €', basePrice);
            offerType.innerHTML = 'Prezzo Standard';
            ticketPrice.innerHTML = '€ ' + basePrice;
        }
}
);