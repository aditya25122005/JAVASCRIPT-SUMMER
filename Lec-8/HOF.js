//Cond -1
// function a(fn){
//     console.log("Hi I am Inside A");
//     fn();
// }
// function b(){
//     console.log("Hi I am Inside B");
  
// }

// a(b);  // a is Higher Order Function


//Cond-2
// function a(){
//     console.log("Inside a");
//     function b(){
//         console.log("Inside B");
        
//     }
//     return b;
// }

// let temp=a();
// console.log(temp);

//Real life usage
// let arr=['Sam','Samarth',true, false, 10,20];
// function getBoolean(){
// let result=[];
// for(let i of arr){
//     if(typeof i =="boolean"){
//         result.push(i);
//     }
// }
// return result;

// }
// function getString(){
// let result=[];
// for(let i of arr){
//     if(typeof i =="string"){
//         result.push(i);
//     }
// }
// return result;

// }
// function getInt(){

// let result=[];
// for(let i of arr){
//     if(typeof i =="number"){
//         result.push(i);
//     }
// }
// return result;
// }
// console.log(getBoolean(arr));
// console.log(getInt(arr));
// console.log(getString(arr));


//Optimized HOF way
let arr=['Sam','Samarth',true, false, 10,20];
//Check Type only
function getBoolean(item){
    return typeof item=="boolean";
}
function getString(item){
    return typeof item=="string";
}

function getnumber(item){
    return typeof item=="number";
}


// loop and append
function get(arr,fn){
    let res=[];
    for(let i of arr){
        if(fn(i)){
            res.push(i);
        }
    }
    return res;
}
console.log(get(arr,getBoolean));
console.log(get(arr,getString));
console.log(get(arr,getnumber));