//A while loop keeps going as long as the condition is true.
//Use for loop when you know exactly how many times to loop.
//Use while when you don’t know how many times but have a condition to keep checking.

let i: number = 10; 

while(i<=10){ //10<=10
i++;

}

/*
Explanation: 

Initialization:

let i: number = 10; → we start with i = 10.

Condition:

while (i <= 10) means: “Keep looping as long as i is less than or equal to 10.”

Inside the loop:

i++ → increases i by 1 each time.

----------------------------------------------------------------------------------

What happens when it runs:

First check: i = 10 → condition 10 <= 10 is true → go inside loop.

Inside loop → i++ makes i = 11.

Loop checks again → i = 11 → condition 11 <= 10 is false → stop looping
*/


//Prints numbers 1 to 10
let k: number = 1;

while (k <= 10) {
    console.log(k); //1, 2, 3, 4... 10<=10 (true) 10+1=11, 11<=10 (false)
    k++; //increase by one
}

//print even numbers
let j: number = 2; //2+2=4, 6, 8

while (j <= 20) {
    console.log(j);
    j += 2; // jump by 2 
    //j++; 
}

//print odd numbers
let h: number = 1;

while (h < 20) { //22<20 (false)
    console.log(h);
    h += 2; // jump by 2
}

//Countdown from 10 to 1
let g: number = 10; //10-1=9, 8, 7 

while (g > 0) {
    console.log(g);
    g--;
}


//keep looping until the condition is met

let m: number = 0; //1!==5; (true), 2!==5(true), 

while (m !== 5) {
    console.log("m is not 5 yet, m = " + m);
    m++;
}
console.log("Now m is 5!");
