"use strict";
function funFunction(score, message) {
    return 'I am a function that returns a string as a return type';
}
//optional parameters with the sign ?
function CreateCustomer(name, age) {
    CreateCustomer("John"); // no age
    CreateCustomer("John", 25); // with age
}
//default parameters
function GetBookByTitle(title = 'The Typescript functions') {
    let getBookTitle = GetBookByTitle();
    GetBookByTitle(); // uses default value
    GetBookByTitle("Learn JavaScript"); // overrides with "Learn JavaScript"
}
function GetBookByTitle02(title) {
}
//Rest parameters
function RestParameters(name, ...getAgeAndHeight) {
    let books = RestParameters('Jonathan', 2, 3, 4, 5);
    RestParameters("Jonathan", 2, 3, 4, 5);
}
