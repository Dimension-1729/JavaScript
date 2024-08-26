/*console.log(5<2); //answer wil be in boolean values
console.log(11>9); //answer wil be in boolean values
console.log(2<=6); //answer wil be in boolean values
console.log(7>=15); //answer wil be in boolean values
console.log(7!=15); //answer wil be in boolean values
console.log(15==15); //answer wil be in boolean values
*/

//Comparison might not result in predictable code
console.log("3" < 1);   //JS doing automatic datatype conversions before compare
console.log("3" < "1");
console.log("09" > 5);

//Usually data must be same before any comparison

/*
Comparison and Equality Operators:-
The reason is that an equality check == and comparisons >,<,>=,<= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false, because they convert null to 0.
*/

console.log(null>0);    //maybe here, in comparison null converts to NAN
console.log(null==0);  //this doesn't convert null to 0 value
console.log(null>=0);
console.log(null<=0);

//undefined will result false in every case
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined <= 0);
console.log(undefined == null);
console.log(undefined > null);
console.log(undefined > null);

//Strict check with === , it checks value as well as data type

console.log("2" == 2);
console.log("2" === 2); //will result false as data type not same

