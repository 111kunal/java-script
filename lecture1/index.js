// let firstname = 'kunal';

// // console.log(firstname.toUpperCase());
// // console.log(firstname.substring(0,3));

// // for(let i=0;i<firstname.length;i++){
// //     console.log(firstname[i])
// // }
// let sentence = "what is your name and where are you from";
// let words = sentence.split(' ');
// console.log(words);

// console.log(words.join('<'))

let a = document.querySelector('#name');
a.innerHTML = 'hello my name is vinay';

let element = document.createElement('h1');
element.textContent = 'hello how are you';

let bodytag = document.querySelector('body');
bodytag.insertAdjacentElement('afterbegin',element);
