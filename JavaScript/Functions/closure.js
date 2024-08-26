function outer(x) {
    function inner(y) {
        return x + y;

    }
return inner;    
}

//To save the return inner output to a variable.
const outerReturn = outer(10);
console.log(outerReturn);
