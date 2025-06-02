// arr=['aditya','anurag','akshay','akash'];
// arr.forEach(function(i,idx){
//     console.log(i,idx);
// })


// let marks=[10,15,18,9,28,12,5,4];
// let newMarks=marks.map(function(item,idx){
//     return [item,idx];
// })
// console.log(newMarks);
// let nums=[1,2,3,4,5,6,7,8,9];
// let newNums=nums.filter(function(item){
//     if(item>=5){
//         return true;
//     }
//     return false;
// })
// console.log(nums);
// console.log(newNums);


//sort
// let nums=[1,56,34,12,5];
// let ans=nums.sort();  //lexicographically sort
// console.log(ans);

// let res=nums.sort(function(a,b){
//     return a-b; // Ascending   //b-a for descending
// })

// console.log(res);


let menu=["Chicken Tikka","Veg Biryani","Chicken Biryani","Veg Tikka","Egg Roll"];
let ans=menu.filter(function(item){
    if(!item.includes("Chicken") && !item.includes("Egg")){
        return true;
    }
    return false;
})
console.log(ans);
