const src = {
    age:32,
    name:"kunal",
    rollno:23,
}
//clonign using iteration

// const dest = {};
// for(let key in src){
//     let NewKey = key;
//     let NewValue = src[key];
//     dest[NewKey] = NewValue;
// }

// src.age = 45;

// console.log(src);
// console.log(dest);


//cloning using Object.assign method
// const dest = Object.assign({}, src);

// src.age = 45;

// console.log(src);
// console.log(dest);



//cloning using spread operator
// const dest = {...src};

// src.age = 45;

// console.log(src);
// console.log(dest);