function outer(x) {
    function inner(y) {
        return x + y;

    }
return inner;    
}

//Outer function returns nothing but the inner function, but the argument that I passed in outer still lives inside the inner, even though the execution is over but the value still remains.
const outerReturn = outer(10);
console.log(outerReturn);

//As this outerReturn is now the inner(), and the argument still lives which is x = 10, so when you pass the value of y, it gives 15. 
console.log(outerReturn(5));

//Another self-made e.g of closure function

function age(a) {
    function age_after_5yr(b) {
        return a+b;
    }
    return age_after_5yr;
}
const saved_value = age(30)
console.log(saved_value);

console.log(saved_value(10));

