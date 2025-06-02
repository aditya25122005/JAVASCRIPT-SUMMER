// function counter(){
//     let count=0;

//     function getCount(){
//         return count;
//     }
//     return getCount;
// }
// let counter1= counter();
// console.log(counter1());


// function counter(){
//     let count=0;  
//     return {
//         getCount:function(){  //getcount method
//             return count;
//         }

//     };
// }
// let counter1= counter();
// console.log(counter1.getCount());


//Small application
function counter(){
    let count=0;
    return{
        getCount: function(){
            return count;
        }  ,
        increment: function(){
            count+=1;
        } ,
        decrement: function(){
            count--;
        }  ,
        reset: function(){
            count=0;
        }
    };
}

let counter1=counter();
console.log(counter1.getCount());

counter1.increment();
counter1.increment();

console.log(counter1.getCount());

counter1.decrement();
console.log(counter1.getCount());
