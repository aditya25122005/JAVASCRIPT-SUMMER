let obj={
    naam:'sam',
    evs:50,
    CN:90,
    Math:60,
    web:100,
    total: function(){
        return this.evs+this.Math+this.web+this.CN;
    },
    bulao: function(){
        return `${this.naam} ko bulao`
    }
}
console.log(obj.total());
console.log(obj.bulao());
