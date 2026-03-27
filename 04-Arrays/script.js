// Coding Practise 

/* mySkills */

let mySkills =["HTML", "CSS","JS"] // create

//update
mySkills.push("React")
mySkills.unshift("Git")
console.log(mySkills)

let removeSkill = mySkills.pop()//remove

console.log(mySkills)
console.log(removeSkill)

for(let i = 0 ; i < mySkills.length ; i++){
    console.log(mySkills[i])
}//print all with "just" for loop 

/* for of */

for (let skill of mySkills){
    console.log(skill)
}

// the for of loop make it ez to manage and make hard to make mistake 