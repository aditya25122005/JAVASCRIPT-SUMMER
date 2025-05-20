//Loops
// for(let i=1;i<=10;i++){
//     console.log(i);
    
// }

for(let i=0;i<=5;i++){
    for(let j=0;j<=5;j++){
        if(i==j){
            break;
        }
        else{
            console.log(i,j);
            
        }
    }
}

let num=123;
let sum=0;
while(num!=0){
let rem=num%10;
sum+=rem;
num/=10;
}
console.log(sum);
let n=100;
while(n>=0){
    console.log(n);
    n-=10;
}


//for-in  //Objects
let obj={
    name:"Rahul",
    age:25,
    city:"Delhi",
    country:"India"

}
for(let i in obj){
    console.log(`${i}--> ${obj[i]}`);
}

//for -of  //Arrays
let arr=[1,2,3,4,5];
for(let i of arr){
    console.log(i);
    
}