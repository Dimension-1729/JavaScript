var name = 'Rohit'
const id = 4516
let age = 27

function details() {
    console.log(name,id,age);
    
}

details()

//Now let's say we defined variables inside a function, and we try to access them outside

function business() {
    let b_name = "Incraft"
    const gst = "GP645126"
}

console.log(b_name);  //Return error
