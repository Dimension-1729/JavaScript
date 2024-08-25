//Declaring or Defining or Creating a function
function print() {
    console.log('printing...');
    
}

//print will return strings if without used by () inside browser terminal
print()

//Function with parameter

function printThis(param) {
    console.log(param);
    
}

printThis('Subharti')

//Declaring function using function expressions

const name = function(first,second) {
    console.log(`First person is ${first}, Second Person is ${second}`);
    
}

name('Ashok','Surya')

//Return Statement
//This also can return to another function, not compulsory to save the value in  a variable first 

function product(a,b) {
    return a*b;
}

console.log(product(2,6))

//To save it's value and return, so we can use this value elsewhere.

const subtract = function(x,y) {
    let result = x - y;
    return result;
}

const display = function() {
    console.log(`The value of subtract function is ${product(4,2)}`);
    
}

console.log(display());


