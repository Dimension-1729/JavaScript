/*To condense, use-cases; 
1. Handling variable-length function arguments (Allows function to accept an indefinite no. of args without explicitly specifying each one)
2. Array Destructuring(breaking array & capturing elements into separate array variable)
*/

//Variable-length function args
function sum(...numbers){
    return numbers.reduce((total,sum) => total+sum,0);
}
//We can pass any number of arguments now
console.log(sum(10,50,20,10));
console.log(sum(25,16,1,1,5,21,18,161,61,6,1,6));

//Array Destructuring

const [first,second,...rest] = ["Knife","Cat","Lion","Mouse","Elephant","Snail"]


console.log(first);
console.log(second);
console.log(rest);