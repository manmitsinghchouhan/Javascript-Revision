// The Dynamic Task Manager

const taskList = document.getElementById("ul");
const taskStore = [];
function addTask(title, priority) {
    // 1. Create a truly unique ID
    const task = {
        // id: crypto.randomUUID(), // Generates a unique string ID
        id: taskStore.length + 1,
        title,
        priority,
        isCompleted: false
    };

    // 2. Update Data State
    taskStore.push(task);

    // 3. Update UI
    renderTask(task);
}

function renderTask(taskObj) {
    const li = document.createElement("li");
    
    // Use data-attributes to link DOM to Data
    li.setAttribute("data-id", taskObj.id);
    
    // Template literal for cleaner content
    li.innerHTML = `
        <span>${taskObj.title}</span> 
        <small>(${taskObj.priority})</small>
    `;

    // Professional Event Handling
    li.addEventListener("click", () => {
        // Toggle data state
        taskObj.isCompleted = !taskObj.isCompleted;
        
        // Toggle UI state
        li.classList.toggle("complete");
        
        console.log("Updated Task Store:", taskStore);
    });

    taskList.appendChild(li);
}

// Testing the Pro version
addTask("Code with Gemini", "High");
addTask("Debug the Logic", "Medium");



//Ghost User Profile Card

const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const container = document.querySelector("#profile-container")

btn.addEventListener("click",()=>{
    let id = input.value
    console.log(id)
    fetchUserProfile(id)
})

async function fetchUserProfile(userId) {
    // UI Setup
    btn.innerText = "Loading...";
    btn.disabled = true; 
    container.innerHTML = ""; // Clear old profile while loading

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) throw new Error("User Not Found");

        const actualData = await response.json();
        profileGeneration(actualData);

    } catch (err) {
        container.innerHTML = `<p style="color: red;">${err.message}</p>`;
    } finally {
        // This runs NO MATTER WHAT (Success or Error)
        btn.innerText = "Search";
        btn.disabled = false;
    }
}

function profileGeneration(actData){
    btn.innerText = "Search"
    btn.disabled = false;
    container.innerHTML = `<p>Name : ${actData.name}</p>
    <p>email : ${actData.email}</p>
    <p>Compony Name : ${actData.company.name}</p>`
    
}



// Smart Student Directory

const API_URL = "https://jsonplaceholder.typicode.com/users";
const searchInput = document.querySelector("#input");
const resultContainer = document.querySelector("#container");

let studentStore = [];

async function initializeApp() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        // Improvement: Direct assignment instead of manual push loops
        studentStore = await response.json();
        
        renderDisplay(sortData(studentStore));
    } catch (err) {
        resultContainer.innerHTML = `<p>${err.message}</p>`;
    }
}

function sortData(data) {
    // Improvement: Using Spread [...] to sort a copy, keeping original data safe
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
}

function handleSearch(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    const filtered = studentStore.filter(student => {
        const nameMatch = student.name.toLowerCase().includes(term);
        const cityMatch = student.address?.city.toLowerCase().includes(term);
        return nameMatch || cityMatch;
    });

    renderDisplay(sortData(filtered));
}

function renderDisplay(list) {
    resultContainer.innerHTML = "";

    if (list.length === 0) {
        resultContainer.innerHTML = `<p>No students match your search.</p>`;
        return;
    }

    // Improvement: DocumentFragment for better performance (one DOM paint instead of many)
    const fragment = document.createDocumentFragment();

    list.forEach(({ name, address }) => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${name}</h3><p>${address?.city || 'N/A'}</p>`;
        fragment.append(card);
    });

    resultContainer.append(fragment);
}

searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

initializeApp();