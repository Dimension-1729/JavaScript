//Basic arrow function () => {} , to store it in  a value, we can use const score = () => {}

const addInt = (numb1, numb2) => {
    return numb1+numb2;
}
console.log(addInt(5,8));

//Implicit Return; you don't have to use scope{} and return statement, it's one line function statement.

const add =(a,b) => console.log(a+b);
add(2,8);

/* If we use scope i.e {}, we need to invoke return inside curly braces. But if we use just () in implicit style, we don't need to use return. 
Example; */

const sub = (a,b) => (a-b);
const mul = (a,b) => {return a*b}
console.log(sub(5,2));
console.log(mul(5,2));
 
//Why this is called implcit: because it is understood, there's assumption that we're talking about this function only

//Explicit; here we have to describe something very clearly and directly, we are explicitly declaring

//To return an object we have use paranthesis e.g

let objFunc = (obj1) => ({username : "Karan"},{age: 45})
console.log(objFunc());
