'use strict'

//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di 
//cognomi, Gatsby vuole generare una falsa 
//lista di 3 invitati.

//fake  first name array

const firstNames = ['pippo', 'paperino', 'pluto'];

//fake last name array

const lastNames = ['rossi', 'verdi', 'brambilla', 'brazof'];

const fakeNames = [];

for (let i = 0; i < 3; i++) {
    fakeNames[i] = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

console.log (fakeNames);
