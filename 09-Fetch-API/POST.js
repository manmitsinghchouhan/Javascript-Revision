                                       
async function newUser(){
    const URL = "https://jsonplaceholder.typicode.com/users"

    const data ={
        name: "manmit",
        email:"manmit@example.com"
    }

    try{    
        let response = await fetch(URL,{
            method:"POST" ,
            headers: {
                "content-type":"application/json",
                "My-Custom-Header": "ManmitLearning"
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error(`Error !, Status code ${response.status}`)
        }

        let result =  await response.json()
        console.log("User Created! New ID is: " + result.id)

    }catch(err){
        console.log(err)
    }
}

newUser()



// The Simple Post() 
// async function createPost() {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
    
//     // 1. Define the data we want to send
//     const myData = {
//         title: "Manmit's Journey",
//         body: "I am learning the POST method step-by-step.",
//         userId: 7
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST', // Step 1: Set the method
//             headers: {
//                 'Content-Type': 'application/json' // Step 2: Tell server it's JSON
//             },
//             body: JSON.stringify(myData) // Step 3: Turn object into a string
//         });

//         if (!response.ok) {
//             throw new Error("Post failed with status: " + response.status);
//         }

//         const result = await response.json();
//         console.log("Success! Server returned:", result);

//     } catch (error) {
//         console.log("Error caught:", error.message);
//     }
// }

// createPost();
