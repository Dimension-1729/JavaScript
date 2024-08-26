"use strict"; //treat all JS code as newer version

//alert(3+3) //We're using nodejs, not browser where whole thing is encapsulated inside HTML document

//Datatypes:-

let name = "Sunil"
let age = 56
let hasWife = true

//Shows typeof datatype
console.log(typeof name);
console.log(typeof hasWife);

//null is a standalone value, it is a representation of empty value but it is also a datatype; Object

let temp1 = null
let temp2 = ""       //This is not null as type has been defined

console.log(typeof temp1);  //will return object
console.log(typeof temp2);  //will return string

//Similarly undefined simply means a variable who's value has not been defined

let sunilChildren;

console.log(typeof sunilChildren);      //will return undefined as datatype

