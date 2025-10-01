//for loops are for executing something for a fixed number of times
//A for loop is used when you know how many times you want to repeat something.
//Example: “Count numbers from 1 to 10.”
//Golden rule: start → condition → increment.
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('i is an even number');
    }
    else {
        console.log('i is an odd number');
    }
}
/*
Explanation:

var i = 1; → Start counting from 1.

i <= 10; → Keep looping until i is 10.

i++ → After each loop, add 1 to i. (1+1=2; 2+1=3)

So the loop will run:
i = 1, 2, 3, …, 10

if (i % 2 == 0) → check if i is divisible by 2.

If true → i is an even number.

Else → i is an odd number.


Execution would look like:
i = 1 → odd
i = 2 → even
i = 3 → odd
i = 4 → even
...
i = 10 → even


*/
/*
Exercise 1: Print all numbers from 1 to 20
*/
for (var i = 1; i <= 20; i++) {
    console.log(i);
}
//Exercise 2: print only even numbers from 1 to 20
//exercise 3: print only odd numbers from 1 to 20
//use '!==' annotation
