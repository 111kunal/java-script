
// let firstpromise = new Promise((resolve, reject ) => {
//     console.log("kunal");
//     reject(new Error("internal server error"));
// });

// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("kunal");
//    resolve("completed finally");
//     // reject(new Error("Internal Server Error"));
// });

// function display(some){
//     document.getElementById('text').textContent = some;
// }

// function calculator(num1, num2, mycallback){
//     let sum = num1 + num2;
//     mycallback(sum);
// }

// calculator(3, 5, display);

// let firstpromise = new Promise((resolve, reject) => {
//     // resolve(1011);   //condition in which it will show fullfilled 
//     // reject(new Error("segmentation error occured")); //condition in which it will show error
    
//    setTimeout(function saymyname() {
//     console.log("hello my name is kunal");
//     resolve(1);
//    }, 10000);  
// });

//using methods in promises 
// let promise1 = new Promise((resolve, reject) => {
//     let state = false;
//     if(state){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });

// promise1.then((message)=>{
//     console.log("the msg is :" + message);
// }).catch((error)=>{
//     console.error("error is :" + error);
// }).finally(() =>{
//     console.log("this will run always.");
// })


//handeling multipel promises
let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "first");
})
let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000, "second");
})
let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 5000, "third");
})

Promise.all([promise1,promise2,promise3])
.then((values) => {
    console.log(values);
})