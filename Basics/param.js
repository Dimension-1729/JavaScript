//Default Parameters, to safeguard against un-natural value return from function, e.g

const expr1 = function(a,b) {
    return a*(a+b)
}

console.log(expr1(3)); //Suppose we only pass one argument, then it will return NaN as b value is undefined in this case. So to safeguard against it we use default parameters.

//default parameter value for b is 0
function expr2(a,b=0) {
    return a*(a+b);
}

console.log(expr2(10)); //It will not give error, as a default value for other argument, b is there.

//Rest Parameter: allows a function to accept any no. of arguments as an array, uses "..." for syntax. Rules:- 1. Only one parameter is allowed 2. Must be the last parameter

const calc = function(a,...b) {
    console.log(a);
    console.log(b);
    
    
}

//2 will return to a, and rest of it will be stored and returned as an array
calc(2,65,62,2,31,6,2,62,6,5,62,65,6,26,26,2,8,8,99)

//Arrow Functions, more prettier and less line of code, the current de-facto industry.

const add = function(a,b) {
    return a+b;
} 
//Normal Function

const mul = (a,b) => {return a*b};
console.log(mul(2,10));

//Arrow Function

//If only one argument is used, it's even more simpler

let region = a => console.log(a);
console.log(region("Himachal"));

