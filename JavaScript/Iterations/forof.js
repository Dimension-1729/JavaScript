//Array loops are so common, because most of the data you get from applications or database comes in form of arrays.

// ['','','',''] Strings inside arrays
//[{},{},{},{}]  Objects inside arrays

//for-of loop

let names = ["Sameeksha", "Smriti", "Divit","OmRaj"]
for (const element of names) {
    console.log(`Person name is: ${element}`);
    
}

//for-of for string
const sentence = "Bsdke se 7 saal me ek book complete nhi hui"

for (const element of sentence) {
    if (element === " ") {
        continue
    } else {
        console.log(`Character is: ${element}`);
        
    }
}

//for-of loops on map

//for creating a new map
const map = new Map()
//set(key, value)
map.set('Ward 16', 'Shastri Nagar')  
map.set('Ward 7','Preet Vihar')
map.set('Ward 15','Nirman Vihar')
console.log(map);

for (const element of map) {
    console.log(element);
    
}
//Destructuring of Array
//Syntax for, if you need key and value pair separately
for (const [key,value] of map) {
    console.log(`Key: ${key} and Value: ${value}`);
    
}

//for-of loop on object

const capital_cities = {
    "Uttar Pradesh" : "Meerut",
    "Himachal Pradesh" : "Shimla",
    "Punjab" : "Chandigargh",
    "Rajasthan" : "Jaipur"
}

//console.log(capital_cities);

//Object not iterable using for-of loop
// for (const element of capital_cities) {
//     console.log(element);
    
// }

for (const key in capital_cities) {
    console.log(`State: ${key} and City: ${capital_cities[key]}`);
}