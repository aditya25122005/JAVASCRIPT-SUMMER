function someFunction(){
    let userName="Einstein";
    function PrintName(){
        console.log(userName);
    }
    return PrintName;
}
let ans=someFunction();
ans();
