if(5>9){
    console.log("LOL");
    
}
else{
    console.log("POK");
    
}
let a=15;
let b=100;
let c=15;
if(a>=b && a>=c){
    console.log(a +" is Greatest");
}
else if(b>=c){
    console.log(b + " is Greatest");
}
else{
    console.log(c+" is Greatest");
    
}


let age=parseInt( prompt("Enter Your age"));
console.log(age);
console.log(typeof(age));


// if(age<18){
//     console.log("You cannot enter");
    
// }
// else{
//     console.log("You can enter club");
    
//     if(age>21){
//         console.log("You can drink");
        
//     }
//     else{
//         console.log("You cant drink");
        
//     }
// }

if(age<=18){
    console.log("You cannot enter");
}
else if(age>18 && age<21){
    console.log("You can enter but cant drink");
}
else{
    console.log("Can have fun");
}