
//functional parameters
function funFunction (score:number, message:string) : string {
return 'I am a function that returns a string as a return type'
}
funFunction(10,'Hello');
funFunction(11, '')

function GetBookByTitle02(title:string, author:string){
    let getbookByTitle = GetBookByTitle02('The Lord of the Rings','Leonardo DiCaprio'); 
   console.log(getbookByTitle);
   GetBookByTitle02('The 1 minute rule',('Steve'));
   let getBookTitle = GetBookByTitle02('',''); 
   console.log(getbookByTitle);
}

//optional parameters with the sign ?
//TypeScript has an optional parameter functionality. 
// The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
function CreateCustomer(name:string, age?:number){
CreateCustomer("John");         // no age
CreateCustomer("John", 25);     // with age

}
//default parameters
function GetBookByTitle(title:string = 'The Typescript functions' ){
let getBookTitle = GetBookByTitle()
GetBookByTitle();                     // uses default value
GetBookByTitle("Learn JavaScript");   // overrides with "Learn JavaScript"
}
//if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}
/*
Output:
Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"
*/


//Rest parameters
//When the number of parameters that a function will receive is not known or can vary, we can use rest parameters.
function RestParameters(name:string, ...getAgeAndHeight:number[]){
    let books = RestParameters('Jonathan', 2,3,4,5,7,8,9,10);
    RestParameters("Jonathan", 2, 3, 4, 5,6); //overriding

}