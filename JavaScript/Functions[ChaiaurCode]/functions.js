//What if thier data type is mismatched

function addNumb(a,b) {
    return a+b;
}

console.log(addNumb(2,3))
console.log(addNumb(2,'g'))
console.log(addNumb(2,null))

//When you don't pass any argument, the value is undefined

console.log(addNumb());  //NaN

//Return function usage, function to check whether a user logged in or not

function userLogged(user = "Karan")  {
    if (user === undefined) {
        console.log("Please enter username.")
        return;
    }
    return `${user} is logged in.`
}

console.log(userLogged("Hitesh"))
console.log(userLogged())


//!, this is not symbol, it converts true to false and vice versa. 
//Undefined and "" are considered as false value in JS. So we can re-write; 

//if (!user) {            //same as user==undefined
    //code to execute
 