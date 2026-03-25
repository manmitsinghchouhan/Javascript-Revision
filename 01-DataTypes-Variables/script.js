/* Declaration */

const birthyear = 2005
let age = 20

/* Reassignment */

// birthyear = 2004   -- not allow throw typeError
age = 21 // allow 

 
/* Type Checking*/

a="100"
console.log(typeof a )// string 
a=100
console.log(typeof a )// number 

/* null bug aka the null mystery*/

const n  = null ;
console.log(typeof n)// object not null ??
// because when js was created developer put null in object type and they never change it 


/* template literal */

console.log(`I was born in ${birthyear} and I am ${age} years old.`)

/* speacial type of varaible -- Nan */

let score = 10 / "apple";
console.log(typeof score) // number 
// Nah--  In JS logic, "Not a Number" is technically a numeric type that represents an undefined or unrepresentable mathematical result.

/* Type Coercion */
console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (Numeric conversion)
console.log("5" * "2"); // 10 (Both converted to numbers)

/*
Why? The minus sign (-) only exists for math.
It has no meaning for strings. 
So, JavaScript "coerces" (forces) the string "5" to become the number 5 so it can finish the math.

Rule of Thumb: > * + prefers Strings (Concatenation).

-, *, / prefer Numbers (Math).
*/ 



