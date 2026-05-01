// Basic fetch()


// let URL = "https://jsonplaceholder.typicode.manmit.com/users"

// async function gettingData(){
//     try{
//     let response = await fetch(URL)
//     let data = await response.json()
//     for(let elm of data){
//         console.log(`${elm.id}. Name: ${elm.name}, Email: ${elm.email}`)
//     }}catch(err){
//         console.log("err",err)
//     }
// }
// gettingData()
 

// Basic fetch() --- using promises .then() method 
// let promise = fetch(URL)
// promise.then((res)=>{
//     let data = res.json()
//     return data 
// }).catch((err)=>{
//     console.log(`Error`, err)
// }).then((res)=>{
//     for(let data of res){
//         console.log(`${data.id}. Name: ${data.name}, Email: ${data.email}`)
//     }
// })// it ok to write .then after .catch it will get data from first .then




// Basic Fetch() --- wrong api 

// let URL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=invalid_key"

// async function getWeather() {
//     try{let response = await fetch(URL)
//     if(!response.ok){
//         console.log(`Fetch Failed: Status ${response.status}`)
//         throw new Error("Did find the response"+ response.status)
//     }
//     let data = await response.json()
//     console.log(data)}
//     catch(err){
//         console.log( err)
//     }
    
// }
// getWeather()

// let promise = fetch(URL)
// promise.then((res)=>{
//     let data = res.json()
//     return data 
// }).catch((err)=>{
//     console.log(`Error`, err)
// }).then((res)=>{
//     console.log(res)
// })// it ok to write .then after .catch it will get data from first .then



// Search & Update   ---- get and post together
 
async function getUser1(){
    const URL0 = "https://jsonplaceholder.typicode.com/users/1"

    let response = await fetch(URL0)
    let data = await response.json()
    data.name = "Manmit Singh Chouhan"  
    // console.log(data.name)   
    return data

}

let userdata = getUser1()
// user1.then((res)=>{
//     let data = res
// })
async function updateUser1(){
    let data = await userdata;
    // console.log(data)
    const URL ="https://jsonplaceholder.typicode.com/posts"

    try{
    let response = await fetch(URL,{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    });
    if(!response.ok){
        throw new Error("Error ! Statues code is " + response.status)
    }

    let result = await response.json()
    console.log("User Updated:",result)
    }
    catch(err){
        console.log("error is :",err)
    }
}

updateUser1()


