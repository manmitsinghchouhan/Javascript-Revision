// Pizza order ( async - await problem)

// function preparePizza(){
//     return new Promise((resolve, reject)=>{
//         console.log("Preparing Pizzaaa!!")
//         setTimeout(()=>{
//             let pizzaReady = true
//             if(pizzaReady){
//                     console.log("Enjoy Your Pizza !")
//                 resolve("Success")
//             }else{
//                 reject("error")
//             }
//         },3000)
//     })
// }

// async function orderPizza(){
//     await preparePizza()
// }




// Proper Way to solve  

// const preparePizza = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             success ? resolve("Pizza Ready! 🍕") : reject("Oven Error ❌");
//         }, 3000);
//     });
// };

// async function handleOrder() {
//     try {
//         const status = await preparePizza();
//         console.log(status);
//     } catch (err) {
//         console.error(err);
//     }
// }





// callback problem 

// function steps(num,callback){
//     setTimeout(()=>{
//         if(num==3){
//             console.log("All Steps complete")
//         }else{
//         console.log(`step ${num} complete`)
//         }   
//         if(callback){
//             callback()
//         }
//     },1000)

// }

// steps(1,()=>{
//     steps(2,()=>{
//         steps(3)
//     })
// })






//promise problem

// function checkStock(stockNum){
//     return new Promise((resolve,reject)=>{
//         if(stockNum>0){
//             resolve("In Stock")
//         }else{
//             reject("Not In Stock")
//         }
//     })
// }
// checkStock(1)
// .then((res) => {
//         console.log(res); // Logs "In Stock"
//         console.log("Processing Order...");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// checkStock(0)
//     .catch((err) => {
//         console.log("Error: " + err);
//     });