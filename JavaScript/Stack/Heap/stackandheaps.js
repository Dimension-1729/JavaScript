//Stack[Primitive], Heap [Non-primitive]

let myname = "Sushmit"
let hisanotherName = myname
hisanotherName = "Shrey"

console.log(myname);    //This could only mean that only  the coppied data changes and no changes are made to original data, it remains unchanged.
console.log(hisanotherName);

//Example of Heap Memory

let arr1 = {
    email : "shrey.mahal@yahoo",
    id : 27
}

let arr2 = arr1
//As this works on heap memory, it changes both values in arr1 and arr2 due to call by reference method
arr2.email = "cooldudeshrey@proton"

console.log(arr2);

