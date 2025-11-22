// let element = document.getElementById('fpara');
// let selement = document.getElementById('spara');

// function change(){
//     let fpara = document.getElementById('fpara');
//     fpara.style.background = "blue";
// }

// function print(){
//     let spara = document.createElement('p');
//     spara.textContent = "hello my name is kunal";
//     document.body.appendChild(spara);
// }
// setTimeout(() => {
//     print();
// }, 3000);

// setTimeout(() => {
//     change();
// }, 5000);

//------------------------------------------------------------

// function print1(){
//     setTimeout(() => {
//         console.log("vinay");
//     }, 3000);
// }

// console.log("hello");
// print1();
// console.log("kunal");

// Blocking example
function fullname(){
    console.log("kunal");
}

console.log("Start");
setTimeout(fullname,3000); 
console.log("End");
