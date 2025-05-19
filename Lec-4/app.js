// console.log("Hello");
// let a=[6,"Hello",true,undefined, null,[[100,[2,3]],10,11,12],70]
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a);
// console.log(a.length);
// console.log(typeof(a[2]));

// console.log(10); console.log(20); console.log(30);
// console.log(a[5][0][1][0]);



// let arr=[1,2,3,4,5];
// arr.push(20);
// console.log(arr);

// arr.pop();
// console.log(arr);
// console.log(arr.indexOf(4)); // gives index of 4


// console.log(arr);
// //unshift
// let ans2=arr.unshift(100);  //ength of array
// console.log(arr);
// console.log(ans2);
// let ans3=arr.shift()
// console.log(ans3);
// console.log(arr);


let arr=[1,2,3,4,5,6,7,8];
console.log(arr.slice(2));  // 2nd index se last tak 
console.log(arr.slice(2,4));  // 2nd index se 4th index-1

console.log(arr.splice(2,4,"ggg","kk"));
console.log(arr);
let arr1=[1,2,3];
let arr2=[4,7];

//Split
let s="Hi My name is Aditya";
let words=s.split(" ");
console.log(words);
let a=words.join(" ");
console.log(a);
console.log(typeof(a));





//concat

let a1=["KKR","PBKS","DC"];
let a2=["CSK",'MI', "SRH"];
let a3=a1.concat(a2);
console.log(a3);  //[ 'KKR', 'PBKS', 'DC', 'CSK', 'MI', 'SRH' ]

let s1="RAM";
let s2="SHYAM";
let s3=s1.concat(s2);
console.log(s3);



//includes
console.log(arr1.includes(5));
console.log(arr1.includes(2));
console.log(s1.includes("RA"));
console.log(a1.includes("KK"));




//indexof

console.log(s1.indexOf('A'));  //1
console.log(a1.indexOf(1));  //-1
console.log(a1.indexOf("DC"));  //2


//reverse
let b=[1,5,'T'];
b.reverse()
console.log(b);

//Arrays are reference Type
let array=[1,2,3];
console.log(array);
let array2=array;
console.log(array2);

array2[0]=10;
console.log(array);
console.log(array2);





