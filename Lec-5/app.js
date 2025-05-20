let obj={
    Name:"Aditya",
    Age:20,
    isMale:true,
    
}
console.log(obj);
console.log(obj.Name);
console.log(obj.Age);

let person={
    //Key:Value
    Name:"Aditya",  //Property-1
    ID:123,         //Property-2
    Age:20,         //Property-3
    Salary:30000,   //Property-4
    isMale:true     //Property-5
};

console.log(person);
console.log(person.Name);
console.log(typeof person);   //Object

// console.log(person[Name]);  // Error name is Not defined

console.log(person['Name']); // Output: Aditya


let person2=person;
console.log(person.Age);  //20
console.log(person2.Age);  //20


person2.Name="Akash";
console.log(person2.Name);
console.log(person.Name);



