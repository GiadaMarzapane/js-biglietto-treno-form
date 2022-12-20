const myNameSurname = document.getElementById('name-surname');
const myKm = document.getElementById('my-km');
const myAge = document.getElementById('my-age');
const submitButton = document.getElementById('submit');


submitButton.addEventListener('click',
    function(){
        console.log('click sul button submit');
        console.log("L'utente si chiama: ", myNameSurname.value);
        console.log('I km da percorrere sono: ', myKm.value);
        console.log("L'utente ha: ", myAge.value, ' anni');
        let basePrice = myKm.value * 0.21;
        basePrice = basePrice.toFixed(2);
        if (myAge.value < 18){
            let discountPrice20 = (basePrice - (basePrice * 0.20)).toFixed(2);
            console.log('Prezzo scontato per i minorenni: €', discountPrice20);
        }
        else if (myAge.value > 65){
            let discountPrice40 = (basePrice - (basePrice * 0.40)).toFixed(2);
            console.log('Prezzo scontato per gli over 65: €', discountPrice40);
        }
        else{
            console.log('Il prezzo del biglietto sarà: €', basePrice);
        }
}
);