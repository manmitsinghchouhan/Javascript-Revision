// The Dynamic Task Manager

let ul = document.getElementById("ul")
let taskstore = [];
console.log(taskstore)  

function addtask(title,priority){

    let task={
        id : 1 ,
        title : title,
        priority : priority,
        iscomplete : false
    }
    let elm = document.createElement("li")
    // elm.setAttribute("class",task);
    elm.innerText=title,priority
    console.log(elm)
    ul.append(elm)

    elm.addEventListener("click",()=>{
        task.iscomplete = !task.iscomplete
        elm.classList.toggle("complete")
    })
   
    taskstore.push(task)

}

addtask("I want to code today","high")
addtask("I want to run today","high")





//Ghost User Profile Card


const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const container = document.querySelector("#profile-container")

btn.addEventListener("click",()=>{
    let id = input.value
    console.log(id)
    fetchUserProfile(id)
})

async function fetchUserProfile(userId){
    btn.innerText = "loading..."
    btn.disabled = true;
    try{
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!response.ok){
        throw new Error(`User not Found ${response.status}`)
    }
    let actaulData = await response.json()
    console.log(actaulData)
    profileGeneration(actaulData)

    
    }catch(err){
        console.log(err)
    }
}

function profileGeneration(actData){
    btn.innerText = "Search"
    btn.disabled = false;
    container.innerHTML = `<p>Name : ${actData.name}</p>
    <p>email : ${actData.email}</p>
    <p>Compony Name : ${actData.company.name}</p>`
    
}




//Smart Student Directory

let students = [];
let input = document.querySelector("#input")
const container = document.querySelector("#container")
async function fetchStd() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error(`Page not Found : ${response.status}`)
    }
    let data = await response.json()
    // console.log(data)   
    for(let indx in data ){
        students.push(data[indx])
    }
    // students.push(data)
    }catch(err){
        console.log(err.message)
    }
}
fetchStd()
console.log(students)



input.addEventListener("input",()=>{
    let serchText = input.value
    filterData(serchText)
})

function filterData(text){
    let filtered = students.filter((student)=>{
        return student.address?.city.toLowerCase().includes(text.toLowerCase())
    })
    filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    console.log(filtered)
    renderingData(filtered)  
}

function renderingData(data){
    container.innerHTML = ""

    data.forEach(element => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${element.name}</h3><p>${element.address.city}</p>`;
        container.append(card);
    });
}











