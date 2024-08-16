const studentName = "Rahul Vishwas"
var studentAge = '22'       //Scope problem, do don't use it either
let studentFather = "Karan Kapoor"
studentMother = "Afzal Begum" //Do not do this way

let sutdentSex;     //We have just created variable and have not assigned value
//studentName = "Ajmal Kasab" // This is not allowed 

/* 
Another way for
multiline comments
*/

/*
Prefer not to use var because of issue in block and functional scope.
e.g:- Value of variable will change if used anywhere with same variable name, same variable name
inside and outside block cannot be determinded i.e why we don't use it nowadays. 
*/

console.table([studentName,studentAge,studentFather,studentMother,sutdentSex]);
