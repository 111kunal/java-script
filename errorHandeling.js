// try{
//     console.log("start");
//     console.log(a);//this will throw an reference error because a is not defined
//     console.log("end");
// }
// catch(e){ //this block will excute when there is an error in try block
//     console.log("something happend hear",e); // e is the error object that will give us the error message
// }
// finally{ //this block will excute in both the case whether there is an error or not
//     console.log("finally will always excute");}



//lets create a custom error
// try{
//     console.log(a);
// }
// catch(e){
//     throw new Error("this is my error");
// }

// let Errorcode = 100;
// if(Errorcode==100){
//     throw new Error("invalid json")
// }