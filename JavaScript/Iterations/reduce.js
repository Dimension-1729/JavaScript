/*The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).*/

//Basically wo add kar deta hai cummulate kar deta hai, ek accumulator hota hai ek current value

let arb_array = [1,2,3,4,5,6]

const new_array = arb_array.reduce((acc,num) => (acc + num),0)
    //console.log(`Accumulator value: ${acc} and Number is: ${num}`);
    
        //initial value of acc with , laga ke 
//console.log(new_array);

//In Normal Function way

const out = arb_array.reduce(function (acc,num) {
    //console.log(`Accumulator value: ${acc} and Number is: ${num}`);
    return acc + num;
    
},0)      //If no accumulator value is given it takes initial value for the first time execution only for rest value still remains undefined.
//console.log(out);

//Adding value of shopping cart, totalling the amount using reduce and filter

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//Why not this way?
// let total = shoppingCart.filter((item)=> item.price).reduce((acc,price) => (acc+price),0)

let total = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(total);
