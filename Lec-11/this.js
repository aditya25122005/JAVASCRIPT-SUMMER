//regular invokation
// function fn(){
//     console.log(this);
    
// }
// fn();

//Method invocation
let obj={
    Name:'Aditya',
    fn:function(){
        console.log(this);
    }

}
let MyFun=obj.fn;
MyFun();//Direct function call so this is pointing to Window 


//question
let obj2={
    fn:function(){
        function calculate(){
        console.log(this);
        }
        calculate();  //Direct calling
        
    }
}
obj2.fn();
//In this case this will point to Window

//3. constructor function calling

function CreateObj(){
    this.x=20;
    this.y=45;
}
let o1=new CreateObj();
console.log(o1.x);
//this will point to newly created object

//4. indirect calling .call(), .apply(), .bind()
let obj1={
    a:20,
    fn:function(a,b,c){
        console.log(this,a,b,c);
    }
}
let object1={
    a:50
}
let obj3={
    name:"aditya"
}
// obj1.fn(); 

// obj1.fn.call(obj3,1,2,3)
// obj1.fn.call(obj1,1,2,3);
// obj1.fn.apply(object1);  // this will point to object1

obj1.fn.apply(obj3,[10,20,30])
obj1.fn.call(obj3,1,2,3)


//bind
let o3={
    fn:
    function(){
        console.log(this);
        
    }
}
o3.fn();

let Myfun=o3.fn.bind(o3);
Myfun();  // No window object because it is binded and it will always point to o3 no matter how it is called
