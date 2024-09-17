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

const myArr = ["Sushmit", "Shrey", "Malvika", "Mili", "Mahal"]
for (const key in myArr) {
   console.log(key);        //This will only return keys of an array which are usually number like 0,1,2...index numbers
   
}
//to get values
for (const key in myArr) {
   console.log(myArr[key]);       
}

const map = new Map()

map.set('Ward 16', 'Shastri Nagar')  
map.set('Ward 7','Preet Vihar')
map.set('Ward 15','Nirman Vihar')

//Also we cannot iterate a map
for (const key in map) {
    console.log(key);       //There will be no error & no output
    
}