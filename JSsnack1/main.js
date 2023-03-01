'use strict'

//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;

//for (let i = 0; i < 5; i++) {
    //let number  = Number(prompt('inserisci un numero'));
    //sum = sum + number;
//}

//console.log(sum);

let i =1

while (i<=5){
    let number  = Number(prompt(`inserisci un numero(${i})`));
    if(!isNaN(number)) {
        sum = sum + number;
        i++;
    }   
}

console.log(sum);