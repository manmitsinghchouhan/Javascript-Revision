/* 1. FizzBuzz (With Loop) */
const fizzBuzz = (limit) => {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
};

/* 2. Palindrome (The "Dot" Connection) */
const isPalindrome = (str) => {
    // split() turns string to array -> ["m","a","d","a","m"]
    // reverse() flips the array -> ["m","a","d","a","m"]
    // join("") turns array back to string -> "madam"
    const reversed = str.split("").reverse().join("");
    return reversed === str ? "Is Palindrome" : "Not Palindrome";
};

/* 3. Array Sum (Clean & Functional) */
const getStats = (marks) => {
    const total = marks.reduce((acc, curr) => acc + curr, 0);
    const avg = total / marks.length;
    return `Total: ${total}, Average: ${avg}`;
};

/* Optimized Vowel Counter */
const countVowels = (str) => {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) { // for...of loop is cleaner!
        if (vowels.includes(char)) count++;
    }
    return count;
};

/* Optimized Find Max */
const findMax = (arr) => {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num; // Compare with current 'max'
    }
    return max;
};