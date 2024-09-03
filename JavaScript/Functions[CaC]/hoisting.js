add1(5) //if functions are declared normally, we can call them before declaring, in reality I do believe the call is only made after them being declared though
function add1(numb){
    console.log(numb + 1);
    
}

//addTwo(5)  //This will return error, as we are accessing a function before declaration
const addTwo = function add2(numb){
    console.log(numb+2);
    
}

addTwo(5)