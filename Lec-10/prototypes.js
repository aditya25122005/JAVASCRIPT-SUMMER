let toDo={
    title:"Buy Flowers",
    description:function(){
        return `You need to ${this.title}  for the party.`;
    }
}
console.log(toDo.title);

console.log(toDo.description());
console.log(toDo.Hardik);  //undefined

console.log(toDo.toString());  //[object Object]  -->Because of prototypes
