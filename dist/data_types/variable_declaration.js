"use strict";
/*

var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment.

*/
function e() {
    var n = "Jonathan";
    console.log(n);
    var n = "Something else";
    //var n = 5;
    var n = "";
}
e();
//////////////
if (true) {
    let age = 30;
    console.log(age);
    //let age = 50; 
}
//console.log(age) //will complain that age is not declared
///////////////////////////////7
const country = "USA";
//country=Sweden 
console.log(country);
