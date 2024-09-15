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

let val1 = 5 ?? 10
console.log(val1);
