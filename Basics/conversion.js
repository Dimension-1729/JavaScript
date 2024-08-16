/*let score = "33ab"  //this will return NAN(not a number), when using type of method.

//2 ways of using typeof
console.log(typeof score);
console.log(typeof (score));

let int_score = Number(score)

console.log(typeof int_score);
console.log(int_score);

//33ab = NAN
// null = 0
//undefined = NAN
//true = 1 / false = 0
*/
//Converting into boolean

let isMale = 0      
let bool_isMale = Boolean(isMale)

console.log(typeof isMale, bool_isMale);
console.log(bool_isMale);

//Empty string, undefine & null will return false while string with value will return true. 

//Conversion to string

let ageofVikas = 55
let ageinText = String(ageofVikas)
console.log(typeof ageinText);
console.log(ageinText);
