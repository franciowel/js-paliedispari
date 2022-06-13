// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// // START

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt('scegli pari o dispari');
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

//usiamo una funzione per generare un numero random da 1 a 5 per il computer.
function randomNumbers(num) {
    let randomNum = Math.floor((Math.random() * 5) + 1);
    return randomNum;
}
let randomNum = randomNumbers(1);

// procediamo con la somma
let sum = 0;
sum = randomNum + userNumber;
console.log(sum)

// usiamo una funzione per stabilire se la somma è pari o dipsari
function NumEvenOrOdd(number) {
    let evenOrOdd;
    if(number % 2 === 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }
    return evenOrOdd;
}
let winner = NumEvenOrOdd(sum);

// mostro il vincitore
if (userChoice === 'pari') {
    if (winner === 'even') {
        alert('hai vinto');
    } else {
        alert('Ritenta.. hai perso');
    }
} else if (userChoice === 'dispari') {
    if (winner === 'odd') {
        alert('Hai vinto');
    } else {
        alert('Ritenta.. hai perso');
    }
} else {
    alert('SCRIVI "pari" O "dispari"');
}