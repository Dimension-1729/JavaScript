//Variables defined in the nested function cannot be accessed outside the nested functions. But variables defined in the global scope, or it the main function can be accessed inside the nested function that's how the data flows.

//This data flow is valid
function value() {
    x = 10;
    y = 20;
        function sum() {
            return x + y;
        }
    console.log(sum());
       
}



console.log(value())

//This data flow is invalid, as a is defined inside the nested function which is not accessible to upper layers.

function result() {
    const resultantAge = (a + b);
    console.log(resultantAge);
        function ageCalc() {
            const a = 25;
            const b = 50;
            return (a,b);
        }
    ageCalc();
}

//console.log(result());

//More easier way to understand

console.log(a,b,x,y);  //all of these are defined withing the function, so not accessable outside, in global scope
