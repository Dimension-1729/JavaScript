let name = "Sushmit"
let age = "17"
/*
//Both of them are outdated
console.log(name + " was" + age);
//or another way we use commas
console.log(name, " is", age);
*/

//New way is; string interpolation using backticks & placeholders just like I did in python

console.log(`My name is ${name} and my age is ${age}`);

const fullName = new String('shrey kumar mahal')
console.log(fullName.__proto__);  //This return all prototypes available, you can use without using proto
//String Methods
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(8));
console.log(fullName.indexOf('m'));

//Substring [Cannot be used for negative indexes]
const str1 = fullName.substring(5,17)
console.log(str1);

//Slice [Can be used with negative indexes]
const str2 = fullName.slice(0, -5)
console.log(str2);

//trim() will remove empty spaces from user entered fields from star and end, not in the middle because that could be useful

const user_entry = "     Fancy L       APTOP"
const trim_entry = user_entry.trim()
console.log(trim_entry);

//Replace method for replacing char spacing in a url before diplaying it to user, so more readable

const url = 'www.inkjet.com/chaudhary%x89sons/images'

const newurl = url.replace('%x89', '-')
console.log(newurl);

//include to find whether char or word is present or not

console.log(newurl.includes('kumar'));

//split() to split the given string by space, or at a specific character

const split_result = url.split('/')
console.log(split_result);

//valueof() only returns object value or args
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"



