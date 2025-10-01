"use strict";
/*
An enum is a way of giving more friendly names to sets of numeric values.
*/
var Coloring;
(function (Coloring) {
    Coloring[Coloring["Red"] = 0] = "Red";
    Coloring[Coloring["Green"] = 1] = "Green";
    Coloring[Coloring["Blue"] = 2] = "Blue";
})(Coloring || (Coloring = {}));
var c = Coloring.Green;
console.log(c); // 1
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 4] = "Blue";
})(Colors || (Colors = {}));
var c2 = Colors.Blue;
console.log(c2); // 2
//c2=2
/*
A handy feature of enums is that you can also go from a numeric value
to the name of that value in the enum.
*/
var Color03;
(function (Color03) {
    Color03[Color03["Red"] = 0] = "Red";
    Color03[Color03["Green"] = 1] = "Green";
    Color03[Color03["Blue"] = 2] = "Blue";
})(Color03 || (Color03 = {}));
// Option 1: allow undefined
let colorName = Color03[2]; // "|" means OR
console.log(colorName); // 'Blue'
// Option 2: non-null assertion if you're sure
let colorName2 = Color03[2];
console.log(colorName2); // 'Blue'
