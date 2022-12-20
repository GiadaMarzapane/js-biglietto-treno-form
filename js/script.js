const myNameSurname = document.getElementById('name-surname');
const myKm = document.getElementById('my-km');
const myAge = document.getElementById('my-age');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click',
    function(){
        console.log('click sul button submit');
        console.log("L'utente si chiama: ", myNameSurname.value);
        console.log('I km da percorrere sono: ', myKm.value);
        console.log("L'utente ha: ", myAge.value);
}
);