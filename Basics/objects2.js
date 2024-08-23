//This is a singleton object, would return {}
const devapp = new Object()

//Whatever values we give to object will print.
devapp.id = 4516
devapp.name = "Zonal Dep"
devapp.isVer4 = false

console.log(devapp); 

//This is a literal object, would also return {}

const finapp = {}
console.log(finapp);

//Nesting within objects, and access

let region = {
    country: {
        India: {
            UttarPradesh: {
                Meerut: {
                    Saket: "Gole-Market"
                }
            }
        }
    }
}

console.log(region.country.India);

//The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.


console.log(region.country.Africa?.India);

//Method to merge two objects
const animal = {1: "Tiger", 2: "Lion", 3: "Rhino"}
const birds = {4: "Peacock", 5: "Sparrow", 6: "Owl"}
const reptiles = {1: "Snakes", 2: "Lizzard", 3: "Allegator"}

const allSpecies = Object.assign(animal, birds);    //why is this not working? >> Because keys should be unique.

console.log(allSpecies);

//Ye saari values animal me jayengi.

//Old array type method, but here each entry is an object

object1 = {animal, birds}
console.log(object1);

//Using Spread operator to combine 2 or more objects

object2 = {...animal,...devapp}
console.log(object2);

//How data comes from database, multiple objects inside array separated by commas; e.g:

mongo_db_id246 = [
    {key1: "Value1"},
    {key2: "Value1"},
    {key3: "Value13"},
    {key4: "Value135"},
    {key5: "Value535"},
]

console.log(mongo_db_id246[2]);

//To extract keys
console.log(Object.keys(mongo_db_id246));

//To extract only values
console.log(Object.values(devapp));

//Each key value pair is turned into an array
console.log(Object.entries(mongo_db_id246));

//To query an object we use Object.hasOwnProperty(value)

console.log(devapp.hasOwnProperty('isVer4')); //string should be in inverted commas

