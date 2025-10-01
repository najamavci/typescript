/*
In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. 
These may occur for values from code that has been written without TypeScript or a 3rd party library. 
In these cases, we might want to opt-out of type checking. 
To do so, we label these values with the any type

*/

let looselyTyped: any = 4;

// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
//strictlyTyped.toFixed();

let year: any = 2025;
year= "2025"
year = ['hej',23]
year = { value: 2025 }; //assign a value
//ex: let year: { value: number } = { value: 2025 };

