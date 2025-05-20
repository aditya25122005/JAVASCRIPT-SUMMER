let obj={
    evs:90,
    CN:90,
    Web:100,
    Maths:10,

    total: function(){
        console.log(90+90+100+10);
    },
    bulao:function(){
        return "call ABC"
        
    }
}                   //method ke case me parenthesis dene honge
console.log(obj.total()); 
console.log(obj.CN);
console.log(obj.bulao());


