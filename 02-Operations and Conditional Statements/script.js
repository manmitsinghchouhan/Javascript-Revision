// Coding Revision  

/*strict vs loose Comparision */
console.log("5" == 5);// true -- loose comparision
console.log("5" === 5); // false -- strict comparision
// because in loose comparision JS compare "5" as number 5 and in strict it stay the string 



/*The remainder Operator*/
n=24;
if(n%2==0){
    console.log("even")
};
// prints even 



/*Logic combo*/
let hasLicense = true;
let isSober = false;
let canDrive;
// If they have a license AND are NOT (isSober is false)
if (hasLicense && !isSober) {
    canDrive = true
    if(canDrive){
        console.log("Can Drive")
    }
}

/* Ternary Operator */
let temperature 
temperature = 31;
temperature>30 ? console.log("Hot") : console.log("cold");
// output  Hot


/* Falsy and thruthy value */
/*

Falsy values: false, 0, "" (empty string), null, undefined, and NaN.

Truthy values: Everything else (including "0", "false", and [] empty arrays!).

*/

if ("") {
    console.log("Hello!");
} else {
    console.log("Goodbye!");
}
// we get "Goodbye!"  cuz "" empty string is falsely value 



/* Switch Statement*/
let day = 2;
switch(day){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("not a valid day ")
}


/*Short-Circuiting puzzle*/

console.log(5 > 2 && "Manmit" || 0);// Manmit
// here the first part is true , then we have manmit or 0 , hence manmit is true it just return it 