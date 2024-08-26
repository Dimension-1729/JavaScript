//return functions

function returnFunc() {
    return function() {
        console.log("this Function");
        
    }
}
console.log(returnFunc()());  //two paranthesis will execute twice, i.e it will execute the return function
