/*
JavaScript is a functional programming language.
Functions ensure that the program is maintainable and reusable, and organized into readable blocks.

In TypeScript, functions can be of two types: named and anonymous.
*/

//1. Named function
//A named function is one where you declare and call a function by its given name.
//example: 
function display(){
        console.log("Hello TypeScript!");
}
display(); 

//Functions can also include parameter types and return type.
function Sum(x:number, y:number): number{
    return x+12;
}
/*
function Sum01(x:string, y:number): number{
    return "str"+12;
}
    */
   
//2. anonymous function
//An anonymous function is one which is defined as an expression. 
// This expression is stored in a variable. So, the function itself does not have a name. 
// These functions are invoked using the variable name that the function is stored in.

let greeting = function(){
    console.log("Hello TypeScript!");
}

//An anonymous function can also include parameter types and return type.

let Sum02 = function(x: number, y: number) : number{
    return x + y;
}
Sum02(2,3); // returns 5