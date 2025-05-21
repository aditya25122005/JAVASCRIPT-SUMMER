//function definition
// function sum(){
//     let n1=10;
//     let n2=30;
//     console.log(n1+n2);
    
// }
// //function calling
// sum();

// function sum(n3){
//     let n1=10;
//     let n2=20;
//     console.log(n1+n2+n3);
    
// }
// sum(30);

// function sum2(){
//     let num1=10;
//     let num2=20;
//     return num1+num2;
// }


// console.log(sum2());

// function sam(num1,num2){
//     return num1+num2;
// }
// console.log(sam(30));


function sam(num1, num2=40){
    console.log(num1);
    console.log(num2);
    

}
console.log(sam(30,50));

function calculate(num){
    if(num>80){
        return "O";
    }
    else if(num>60){
        return "A";
    }
    else if(num>40){
        return "C";
    }
    else{
        return "F";
    }
}
console.log(calculate(89));

//typecasting

function sum2(num1, num2){
    return num1+num2;
}
console.log(sum2(10,20));


function sum2(num1, num2){
    return num1+num2;
}
console.log(sum2('10',true));
let ans=sum2('10',true);
console.log(typeof ans);
