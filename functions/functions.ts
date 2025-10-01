function funFunction (score:number, message:string) : string {
return 'I am a function that returns a string as a return type'
}

//optional parameters with the sign ?
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

function GetBookByTitle02(title:string, author:string){
    let getbookByTitle = GetBookByTitle02('The Lord of the Rings','Leonardo DI Caprio'); 

}

//Rest parameters
function RestParameters(name:string, ...getAgeAndHeight:number[]){
    let books = RestParameters('Jonathan', 2,3,4,5);
    RestParameters("Jonathan", 2, 3, 4, 5,6); //overriding

}