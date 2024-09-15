if (true) {         //only executed when the condition is true
    console.log('Block is executed.');
    
    
}

//Strict Equal [Returns true only if value and datatype both are ture]
if (5 === '5') {
    console.log("5 is equal to '5'");
    
    
}

if (5!=5) {
    console.log("if");
    
} else {
    console.log('else');
    
}

//Reverse of strict !==

if (5!== 5) {
    console.log('What is this');
    
}

//Using Comparison
const marks = 500
if (marks < 300) {
    console.log('Above avergae');
    
} else if (marks > 400 ) {
    console.log('90%');
    
}

//implicit scope, no need for scope, same line execution
if (marks == 500) console.log("Implicit type"),
console.log("it can span multiple lines");

    
//nesting of if-else
if ('condition') {
    if (5>2.3) console.log("Implicit nested inside if");
    
    
} else {console.log("Above did not execute.");
}

//&& (and) Returns true if all statement are true
if (5<10 && 2>0.8 && 'ishu' ) {   //string with value is assumed to be true
    console.log("&&");
    
}

// || (or) Returns true if anyone statement is true.
if (2<15 || 56>16 || '') {          //since the middle part was true it executed
    console.log('"" is a false value');
    
} else {
    console.log("Bye");
    
}

