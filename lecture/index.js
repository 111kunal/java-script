//  function color() {
//     let element =document.getElementById("spara");
//     element.style.background = "gray";
//  }
//  function color1() {
//     let element =document.getElementById("tpara");
//     element.style.background = "black";
//  }

//  function color3() {
//     let element =document.getElementById("tpara");
//     element.style.background = "red";
//  }
//-----------------------------------------------------
// function changecolor(event){
//    console.log(event);
//    let element = document.getElementById("fpara");
//    element.style.background = "orange";
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changecolor);
//-----------------------------------------------------
// function addcolor(event){
//    console.log(event);
//    let element = document.getElementById("fanchor");
//    element.style.backgroundColor = "red";
// }
// function changecolor(event){
//    console.log(event);
//    let element = document.getElementById("fpara");
//    element.style.background = "orange";
// }
// let anchorelement = document.getElementById("fanchor");
// anchorelement.addEventListener('click', function(event){
//    event.preventDefault();
//    anchorelement.textContent = "click done bhai";
// });
//------------------------------------------------------------------
// let paras = document.querySelectorAll('p');

function msgalert(event){
   alert("you have clicked on:"+ event.target.textContent);
}

// for(let i=0; i<paras.length; i++){
//    let para = paras[i];
//    para.addEventListener('click',msgalert);
// }
//------------------------------------------------------------------

let mydiv = document.getElementById("wrapper");

document.addEventListener('click', msgalert); 