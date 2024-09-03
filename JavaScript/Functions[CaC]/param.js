//Passing objects as parameters
object = {
    firstName : "Rahul",
    lastName : "Bali"
}

function printObj(sample_object) {
    console.log(`First Name is ${sample_object.firstName} and last name is ${sample_object.lastName}`);
    
}

//printObj(object);
printObj({
    firstName : "Sonu",
    lastName : "Kumar"
})
//Passing arrays as parameter 

const marks = [102,516,1612,13,560]

function print_marks(numb) {
    console.log(numb[2])
    
}

//print_marks(marks)

print_marks([5,21,2,51,55])