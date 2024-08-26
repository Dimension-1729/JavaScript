//We can pass function as a parameter to another function, a call is made at some point of time

//First Method
function city(Jaipur){
    Jaipur();
}

city(function(){     //Here this is anonymous func
    console.log("City = Jaipur");
    
})

//Second Method, by declaring a name to function, in this we first define the inner function, then just pass the name as an argument

function named() {
    console.log("City is Jaipur");

    
}
city(named)
