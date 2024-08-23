//This is a singleton object, would return {}
const devapp = new Object()

//Whatever values we give to object will print.
devapp.id = 4516
devapp.name = "Zonal Dep"
devapp.isVer4 = false

console.log(devapp); 

//This is a literal object, would also return {}

const finapp = {}
console.log(finapp);

//Nesting within objects, and access

let region = {
    country: {
        India: {
            UttarPradesh: {
                Meerut: {
                    Saket: "Gole-Market"
                }
            }
        }
    }
}

console.log(region.country.India);
