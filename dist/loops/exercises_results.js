"use strict";
//Exercise 2: print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//or to make it faster you can increase the number by two instead of one 
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//Exercise 3: print only odd numbers from 1 to 20
//use '!==' annotation
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
