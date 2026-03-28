// Coding practise 


/*One interesting problem -- Implicit Returns*/
function greet(name) {
  console.log("Hello " + name);
}

let result = greet("Manmit"); // hello manmit undefine 
console.log(result);// result is undefine since we hasn't used return keyword in function so ans is "hello manmit undefine "




/*Coding task */

// step one 
const checkEvenOdd = (num)=>{
    
    // step 3
    if (num%2==0){
        console.log("Even")// step 4
    }else{
        console.log("Odd")
    }
}
// step two 
checkEvenOdd(4)

/* Coding task -- pro version */
const checkEvenOdd1 = (num) => {
    return num % 2 === 0 ? "Even" : "Odd"; // Using a ternary for extra flair!
}
console.log(checkEvenOdd1(4));





/* Type of ?*/
const add = (a, b) => a + b;
console.log(typeof add);// function 




/*forEach -- gift from JS -- Array method !! */

const CodingLangs = ["HTML", "CSS", "JS"];

CodingLangs.forEach((lang, index) => {// callback func
    console.log(`At ${index} ${lang} is present`)
})
// forEach is higher order function !!



/*Map filter-- HOF*/

const num =[1,2,3,4,5,6,7]

// 2. Map: Double every number (it give a new array)
const maped = num.map((num)=>num*2)
console.log(maped)

// 1. Filter: Get only the numbers greater than 3
const filtered = num.filter((num)=> num > 3)
console.log(filtered)



/*reduce*/

const prices = [10, 20, 30];

// acc = accumulator (the running total)
// curr = current value (the item we are on)
const total = prices.reduce((acc, curr) => {
    return acc + curr;
}, 0); // <--- This 0 is the starting value

console.log(total); // 60



