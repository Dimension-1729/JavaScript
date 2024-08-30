//Spread[Expands], used for expanding iterables like array into individual elements. Allows us to merge, copy or pass array elements to functions without explicitly iterating through them

//Example-1
const arr = [1,2,3,4,5]
const newArr = [10,20,...arr]   //No indexing or loops are required
console.log(newArr);

//Example-2 [Passing args to functions]
function sum(a,b,c){
    return a+b+c;
}

const integers = [1,2,3,4,5]
console.log(sum(...integers));

//Copying Arrays

const orignal = [2,3,5,6]
const copied = [100,200,...orignal]

console.log(copied);
