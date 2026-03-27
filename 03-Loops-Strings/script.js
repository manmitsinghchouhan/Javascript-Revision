/* The Counter */

for(let i=1 ; i<=10 ; i++){
    console.log(i)
};


/* Reverse String*/

const s = "manmit";
let rev="";
for(let i=s.length-1; i>= 0; i--){ 
    // alway put let i in for loop so i doesn't belong in global variable 
    console.log(s[i]) 
    rev += s[i]
};

console.log(rev)   


/*String Clean-up*/
const input = "   javascript is fun   "
let newInput = input.trim().toUpperCase()

console.log(newInput)


/*While Loop*/
let n = 5;
while(n>=0){
    console.log(n)
    n--;
}
console.log("Blast off!")// run only when loop ended


/*Loop Controls*/

for(let i = 1; i<=5 ; i++){
    if(i===3){
        continue;// skip the 3 
    }
    console.log(i)
}

