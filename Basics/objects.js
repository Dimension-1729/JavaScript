//Singleton
Object.create 

//To declare Symbols
const mySym = Symbol("first_key")

//Object literals
const User1 = {
    name : "Shubhanshu",
    //This is not the way to declare symbol, this would return string data type, not symbol
    mySym : "Key1",
    //to use symbol as a key inside an object
    [mySym] : "Key2",
    surname : "Kannjoia",
    "Father Name" : "Rahul Bali",
    age : 23,
    isLoggedIn : true,
    friends : ["Ashu", "Karan", "Rohan"]
}

//Two methods to get values from objects
console.log(User1.friends[1])

//more pronounced, as this one can deal with strings which are defined inside an object. This can only be accessed by [] notation and not dot operator.
console.log(User1["Father Name"]);

//Lets see the type of both symbol 
console.log(User1.mySym);
console.log(typeof User1.mySym);
console.log(User1[mySym]);
console.log(typeof User1[mySym]);   //why return is string in this case too? not symbol?


//To update values inside an object

User1.surname = "Sharma"
console.log(User1);

//To Freeze values of an object, so no changes can be done

//Object.freeze(User1)

User1.age = 95
console.log(User1);     //age will remain same

//Using Function inside an object, () --> this means it has no parameter

User1.greeting = function(){
    console.log("How are you sir!");
    
}
//This will get us function returnback, function is not executed, we have only received it's reference
console.log(User1.greeting);
//This will give us our desired message 
console.log(User1.greeting()); 

//For using same object as reference inside function using string interpolation``

User1.name = function(){
    console.log(`This user name is, ${this["Father Name"]}`)
    
}

console.log(User1.name());


