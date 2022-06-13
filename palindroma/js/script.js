// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// // START

// chiedo una parola all'utente 
let yourWord = prompt('dimmi una parola');
console.log(yourWord)

let result = imcheckWord(yourWord);
console.log (result)

if(result === true){
    alert('la tua parola è PALINDROMA')
}else{
    alert('la tua parola non è PALINDROMA')
}


// creo funzione per capire se parola è palindroma
function imcheckWord (checkWord) {
    let word = false
    // creo una variabile per la parola al contrario
    let backSpelled = '';
    // leggo la parola dell'utente al contrario
    for(let i = checkWord.length - 1; i >= 0; i--) {
    // la parola al contrario 
        backSpelled += checkWord[i]
    }
    // controllo se le due parole sono uguali 
    if( checkWord == backSpelled) {   
        word = true;
    }

    console.log(backSpelled)

    return(word)
}
