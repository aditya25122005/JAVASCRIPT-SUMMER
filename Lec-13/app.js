//Promise

// let promise=new Promise(function(resolve,reject){  //this function is immediately called
//     setTimeout(function(){
//         let data='hi This is Promise';
//         let err='oops dikkat aagai';
        
//         reject(err);
//     },3000);
// });
// promise.catch(function(err){
//     console.log(err);
    
// })
// // promise.then(function(data){
// //     console.log(data);
    
// // })




// let promise1= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data='Hi this is a promise';
//         resolve(data)
//     },3000);
// })

// promise1.then(function(data){
//     console.log(data);
    
// })



let p1= new Promise((resolve,reject)=>{
    console.log('3 second ka wait karo...');
    
    setTimeout(()=>{
        resolve();
        // reject();
    },3000)
})
// p1.then().catch()
// p1.then(()=>{
//     console.log("Kaam Ho gaya");
    
// })
// .catch(()=>{
//     console.log("Kaam Ho gaya nahi");
// })

//.then() chaining
p1.then(()=>{
    return new Promise((resolve,reject)=>{
        console.log('Wait promise run kar diya hai');
        setTimeout(()=>{
            console.log("2 second lag gaye bhaisahab");
            resolve();
        },2000);
        
    })
})
.then(()=>{
    console.log("dono Kaam Ho gaya");
})


//Vertical growth