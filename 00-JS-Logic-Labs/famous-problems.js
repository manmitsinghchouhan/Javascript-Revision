/*FizzBuzz Question*/

function fizzBuzz(limit){
    for(i=1;i<=limit;i++)
    {
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if (i%3==0){
        console.log("Fizz")

    }else if (i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
}
fizzBuzz(15);
// fizzBuzz(15);




/*Palindrome*/

const isPalindrome = (str)=>{
    let rev = "";
    for(i = str.length - 1 ; i>=0 ; i--){
           rev = rev + str[i]   
    }
    // console.log(rev)

    if (rev === str){
        console.log(`${str} is a Pelindrome` )
    }else{
        console.log(`${str} is not a Pelindrome` )
        
    }
    
    
}
isPalindrome("madam")
isPalindrome("hello")



/*Array sum*/

let marks = [80, 90, 70, 60, 100];

let total = marks.reduce((acc,cur)=>{
    return acc+cur
},0)

let avg = total / marks.length

console.log(`Total: ${total}, Average: ${avg}`)



/*Vowels Counter*/

function countVowels(str){
    let count = 0;
    let vowels = "aeiou"
    for(i= 0;i < str.length;i++){
        if(vowels.includes(str[i])){
            count += 1
        }
    }
    return count

}

let vowelCount = countVowels("hello")
console.log(vowelCount)


/*Find Max*/
let num = [10,5,25,8,88];

function findMax(arr){
    let max = arr[0];
    for(i=0; i < arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    }
    return max
}

let maxnum =findMax(num)

console.log(maxnum)


