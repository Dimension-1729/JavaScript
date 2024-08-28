//Recursion means a function that refer or call itself.

function foo() {
    console.log('foo');
    foo();
    
}

//foo();      //THis will return Max. call stack size exceeded

//another way to create recursion

//const zap = function boo() {
    //boo();


//zap(); //zap is now a method.

//Using recursion fetchwater

function fetchWater(count) {
    if (count === 0) {
        console.log("No more water left.");
        return;
        
    }
    console.log("Water......");
    
    fetchWater(count - 1)
}

fetchWater(165);