//Falsey Values
false, 0, -0, 0n, "",null,undefined,NaN

//Truthy Values
true,1,"any",[], {}, function(){}, '0', "false", " "

//to find if arr is empty

const user = []
if (user.length === 0) {
    console.log('Empty array');
    
}

//for empty object
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {   //This is converting obj to array
    console.log(`${emptyObject} is empty`);
}

//Nullish Coalescing Operator ?? [To get the first defined value of the two]
//when we get values from database and api applications firebase etc....we don't we will get 1 or 2 values or might return null/undefined values for such cases this has been made.

let val1 = 5 ?? 10
console.log(val1);

let val2 = null ?? 15
console.log(val2);

//Errors aye toh hum usse handle kar paye, If I use NaN and null, it will return NaN
let val3 = null ?? undefined ?? 20 ?? 15
console.log(val3);


//Ternary Operator [Shorthand for if-else, only operator that takes 3 operand]. It is used to to evealuate a condition & return one of two values based on true or false.

let age = 15
let myage = age >= 25 ? "Able to vote" : "Not able to vote";
console.log(myage);
