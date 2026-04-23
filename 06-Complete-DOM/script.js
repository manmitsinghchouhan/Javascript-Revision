
//Basic-Selection
let div1 = document.querySelector("#text")
let button = document.querySelector("#chg")
let addElm = document.querySelector("#addElm")
let ul = document.querySelector("ul")
let h2 = document.querySelector("h2")
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")

// The "Dark Mode" Starter
// div1.style.backgroundColor = "black"
// div1.style.color ="white"
// div1.innerText =  "DOM Manipulation in Progress!" 


//Event-Interaction
button.addEventListener("click", () => {
    div1.style.backgroundColor = "black"
    div1.style.color ="white"
    div1.innerText =  "DOM Manipulation in Progress!" 
    // div1.classList.toggle("dark-mod") // shortcut
})

// Dynamic-DOM-Builder
addElm.addEventListener("click", ()=>{
    let newli = document.createElement("li")
    newli.innerText = "newadded!"
    ul.append(newli)
})

//Class-Toggle-System
inc.addEventListener("click",()=>{
    let n = Number(h2.innerText)
    n++
    h2.innerText = n;
    if(n>=0){
        h2.classList.remove("color-red")
    }
})

dec.addEventListener("click",()=>{
    let n = Number(h2.innerText) // we can used +h2.innerText is same as Number()
    n--
    h2.innerText = n
    if(n < 0){
        h2.setAttribute("class","color-red")// getAttribute to get Attri and setAttribute set the attri
        // h2.classList.add("color-red")// we used classlist cus it provide a toggle feature
    }
})

