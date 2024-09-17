//map me sab hi return hota hai

let numbers = [2,5,3,6,8,5,14,17]

const out1 = numbers.map( (num) => num + 10 )
//console.log(out1);

//Chaining [We can add methods on top of another methods, first ka output second ka input, second ka output third ka input and so on]

const out2 = numbers.map ( (num) => num * 10).map( (num) => num/2).filter( (num) => num >= 20 )     //no return as all the code is in one line

//Another way to write, more clean
// .map ( (num) => num * 10)
// .map( (num) => num/2)
// .filter( (num) => num >= 20 )

console.log(out2);
