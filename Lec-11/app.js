// function Person(name,city,ID){
//     this.Name=name;
//     this.City=city;
//     this.id=ID;
// }
// Person.prototype.PrintName=function(){
//     console.log(` My name is ${this.Name} ${this.City}`);
    
// }
// Person.prototype.getName=function(){
//     return(`${this.Name} ${this.City}`)
// }
// let call1=new Person('adi','Kasganj','9870');
// console.log(call1);
// console.log(call1.City);
// console.log(call1.getName());
// console.log(call1.PrintName());

//class syntax
class Person{
    constructor(firstName,LastName,age){
    this.FName=firstName;
    this.LName=LastName;
    this.Age=age;
    }
}
let person2=new Person('raman','deep',24);
console.log(person2);
console.log(person2.City);


class student extends Person{
    constructor(firstName,LastName,age,Roll){
        super(firstName,LastName,age);
        this.roll=Roll;
    }
    
}

let person3=new student('Aditya','maheshwari',19,25);

console.log(person3);
console.log(person3.Age);
console.log(person3.roll);


class fruit{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
    getName(){
        return (`my name is ${this.name}`);
    }
}
let fruit1=new fruit('F1',45,"2kg");
console.log(fruit1);
console.log(fruit1.quantity);
class Apple extends fruit{
    constructor(name,price,quantity,color){
        super(name,price,quantity);
        this.color=color;
    }
    getName(){
        return(`super se bhi upar ${this.name}`)
    }
}
let apple1=new Apple('Apple',45,"2kg","Red");
console.log(apple1);
console.log(apple1.color);


console.log(fruit1.getName());
console.log(apple1.getName());
