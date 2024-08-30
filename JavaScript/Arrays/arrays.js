//array is defined in [] brackets.

const myarray = [1,5,65,5,"Shashank",'Sunil']
console.log(myarray[4]);

//This method automatically puts [] brackets, when using new keyword to define array.

const newarray = new Array(5,6,7,6,1) //no need for [] brackets here
console.log(newarray[2]);

//Array Methods

//add element to last of array
newarray.push(11)   
console.log(newarray);

//removes last element from array
newarray.pop()  
console.log(newarray);

 //add element to start of arr
newarray.unshift(11)   
console.log(newarray);

//removes first element
newarray.shift()    
console.log(newarray);

//returns in boolean, true or fals
console.log(myarray.includes("Shashank"));  

//returns index of element
console.log(myarray.indexOf(65));  
console.log(myarray.indexOf(125)); //will return -1  

//join() ;converts array into list

console.log(myarray.join()); 

//Slice() and Splice() Method

const count_array = [1,2,3,4,5,6,7,8]

console.log("Slice Result:",count_array.slice(0,5));  //0 is included but 5 is not included
console.log("Original Array:- ", count_array, " Original Array Remains Un-changed in slice operation.");

//Splice()

console.log("Splice Result:",count_array.splice(0,5));  //0 is included but 5 is not included
console.log("Original Array:- ", count_array, " Original Array is changed in splice operation. It now gets split after operation.");
