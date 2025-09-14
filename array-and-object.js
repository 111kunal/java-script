// let person ={
//     name:"kunal",
//     age:21,
//     country:"india"
// }

// person.brother = "vinay";

// delete person.country;


// console.log(person.name);
// console.log(person.brother);
// console.log(person.country)

// const student = {
//     name:"kunal",
//     age:21,
//     marks:{maths:23,
//         english:34,
//         hindi:34
//     }
// }

// console.log(student.name);
// console.log(student.age);

// student.grade="A";

// student.marks.english=65;

// console.log(student.marks.english);

// function average(){

// }
//object constructor function

// function student(name,age,marks){
//     this.name = name;
//     this.age = age;
//     this.marks = marks;
// }


// const person1 = new person("kunal",21,23);
// const person2 = new person("vinay",22,23);


//creation of arrays

// let arr=[1,2,"kunal",true];
// console.log(arr);

// console.log(arr[1]);

//const arr = [1,2,"vinay",4,5,"kunal"];
// arr.pop();
// arr.splice(2,0,"kunal");
// console.log(arr);
//using map mathod 
// let a = arr.map((num)=>num*num);
//using filter mathod to get only strings
//##string should be in double quotes
//     let a =arr.filter((num)=>{if(typeof(num)== "string"){
//     return true;
//     }
//     else{
//     return false;
//     }}
// );
// console.log(a);

//using reduce mathod
 let arr = [1,2,3,4,5];
 let a = arr.reduce((acc,cur)=>acc+cur);
 console.log(a);