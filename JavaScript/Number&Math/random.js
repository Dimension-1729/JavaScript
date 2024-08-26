//Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random());

console.log(Math.floor((Math.random() * 10) + 1));

//If we are given a range, min and max values and usring random to generate values in b/w them

const min = 1000
const max = 2000

const random_func = (Math.floor(Math.random() * (1000))) + 1000;

console.log(random_func.toPrecision(4));



