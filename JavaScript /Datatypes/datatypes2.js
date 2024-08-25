//Using Symbols 
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);  //No two symbols can ever be same, even if they have same value inside of them

//Using big int, use n after number

const bigNumber = 16516516515616516548n 
console.log(typeof bigNumber);

//Arrays = [] , is also an object datatype

let heros = ["Spiderman", "ironman", "plumberman"]
console.log(typeof heros);

//Objects = {}
let student = { name: "Ananya Kumari", Age : 21}
console.log(typeof student);

//We can treat functions as a variable in JS


//let print = function(_console.log("I am a function"));

//console.log(print);
