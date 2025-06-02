// function fun(){

// }
// let naam=fun();
// console.log(naam);


function user(user,mail){
    this.userName=user
    this.email=mail
    
}
user.prototype.description=function(){
    return `My name is ${this.userName} and my email is ${this.email}`;
}
let user1= new user('Aditya',"a@gmail.com");
let user2=new user('b',"b@gmail.com");
let user3= new user();
console.log(user1);
console.log(user1.description());

console.log(user2);
console.log(user3);



