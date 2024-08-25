//If you push 2 arrays, it would insert as an array at last index.

const class5 = ["Rohan", "Kajol", "Wahab", "Iqbal", "Himanshu"]

const class6 = ['Rajat', 'Richa', 'Kirti', 'Arjun']

//class6.push(class5)
//console.log(class6);

//To get nested elements within an array
//console.log(class6[4][2]); //will get wahab

//concat() to merge values inside single array

console.log(class6.concat(class5));

//or we can use spread operator "...", just as glass shatters, it divides each element of multiple array to a single array

console.log([...class5, ...class6]); //[] to get values inside of an array

//flat = creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const numb_array = [2,3,[5,1,2,[5,1,2,11,[56,1,78111],37],55,1],22]

console.log(numb_array.flat(2)); //parameter is depth

//Array.isArray(), to question whether is array or not

console.log(Array.isArray("Himanshu")); //can take many argument but checks only first, and display result.

//to make array from any datatype, we use "Array.from"

console.log(Array.from("Rajat is Homosexual."));
//inside from we're passing object within curly braces
console.log(Array.from({name: "Kishan"}));      
//it will return empty object, as it is not able to decipher what is being given. You have to tell first, whether keys arrays or value arrays is this or what.

//Array.of :- Returns a new array from a set of elements

const score1 = 55
const score2 = 74
const score3 = 18
const score4 = 98

console.log(Array.of(score1,score2,score3,score4,class6));
