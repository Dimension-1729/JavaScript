//Immediately Invoked Function Expressions ; Uses:- 1. Jaise hi File Start ho waise hi hamara database ke connection ho jaye.
//2. Global scope se humme pollution nhi chahiye aur variables ka

(function () {
    console.log("This is an IIFE function type.");
    
})();  //IIFE doesn't know where to end context, so to avoid such situations we use ";" to end such context

//This extra parenthesis just executes the code block, no name required.


//Function ko wrap kar ke parenthesis me ussi ke baad execution call (Function Define)(Function Call)

//Named IIFE
(function db_message(){
    console.log(`DB Connected`);
    
})();

//no name arrow function as IIFE type/ Un-named IIFE

(() => {
    console.log(`DB-2 Connected.`);
    
}) (); //ye () ....andar wale anonymous function ko execute kr rha hai

//to pass arguments

((name) => {
    console.log(`${name} DB Connection Successful.`);
    
}) ("Azure")