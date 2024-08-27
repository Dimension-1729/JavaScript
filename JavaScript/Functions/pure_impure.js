//Pure Function, for every same input, there will be same output

function sayGreeting (name) {
    return `Hello ${name}`;
}

console.log(sayGreeting('Maulik'))

//Impure Function; For same input it may or may not create the same output as it could depend on a variable and that variable could be well outside its scope

let name = 'Rohit'
function printSurname(sur) {
    return `${name} ${sur}`;

}

console.log(printSurname('Bali'));

//it's output is depenedent on this variable which is out of functions reach
name = "Himanshu"

console.log(printSurname('Semwal'));
