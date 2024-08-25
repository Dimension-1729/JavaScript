//Nested functions, nested function invoke/call needs to be within the parent function body

function outter() {
    console.log("Outter Function");
        function inner() {
            console.log("Inner Function");
            
        }
    inner() //Function needs to be called in order to print console log, earlier it was just declared.

}

console.log(outter());


//Nested Functions using Fat Arrow Syntax

const outside = param => {console.log(param);
    const inside = id =>{console.log(id);
    }

    inside('Inside Arrow')
}

outside('Outside Arrow')