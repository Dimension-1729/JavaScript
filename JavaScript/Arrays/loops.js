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
