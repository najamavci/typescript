/*
An enum is a way of giving more friendly names to sets of numeric values.
*/

enum Coloring {
  Red, // 0
  Green, // 1
  Blue, // 2
}
var c: Coloring = Coloring.Green;

console.log(c); // 1


enum Colors {
  Red = 1,
  Green = 2,
  Blue = 4,
}
var c2: Colors = Colors.Blue
console.log(c2); // 2
//c2=2

/*
A handy feature of enums is that you can also go from a numeric value 
to the name of that value in the enum.
*/
enum Color03 {
  Red = 0,
  Green, // 1
  Blue,  // 2
}

// Option 1: allow undefined
let colorName: string | undefined = Color03[2]; // "|" means OR
console.log(colorName); // 'Blue'

// Option 2: non-null assertion if you're sure
let colorName2: string = Color03[2]!;
console.log(colorName2); // 'Blue'
