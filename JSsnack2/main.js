'use strict'

//Inserisci un numero, se è pari stampa il numero, 
//se è dispari stampa il numero successivo

const userNumber = parseInt(prompt('inserisci un numero'));

if (userNumber %2===0 ){
    console.log (`${userNumber}`);
    }   else {
        const userNumber1 = userNumber+1;
        console.log (`${userNumber1}`);
}
