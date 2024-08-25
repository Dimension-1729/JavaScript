let marks = 76
let neg_marks = -marks

//Basic maths operations
// console.log(neg_marks);
// console.log(marks/2);
// console.log(marks+4);
// console.log(marks*2);
// console.log((marks-70)**3);     //cube root
// console.log(marks%10);  //will return remainder

//Concate 2 strings

let firstname = "Abhishek"
let lastname = " Kumar Yadav"

console.log(firstname+lastname);

//In both cases they're being converted to sring that means string data type must have precendence
let str1 = 1 + "2";
console.log(str1);
console.log(typeof str1);

let str2 = "3" + 1;
console.log(str2);
console.log(typeof str2);

//Some complex operations
console.log("1"+2+2);       //each char is treated as string
console.log(1+2+"2");       //as compiler executes goes one at a time, first summation then string? In ECMA script, primitive types conversion, there is this favouring mechanism.


//Smarty-ass, operator precedence~confusing code

console.log(true);
console.log(+true);     //this will return 1, increment hote hi wo number ho gya
console.log("");        //it gives empty value
console.log(+"");       //this will give 0




