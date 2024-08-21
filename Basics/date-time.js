//Creating object with instance current_date
let current_date = new Date() 
console.log(current_date);      //Unreadable format

//Converting to string
//Display date and time in more readable manner
console.log(current_date.toString());   

//Returns only date as string datatype
console.log(current_date.toDateString());


console.log(current_date.toISOString()); //in ISO format

console.log(current_date.toJSON());  //in JSON format

//Returns time in string format
console.log(current_date.toLocaleTimeString());

//An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on
console.log(current_date.getDay());

//As per locale/region you want to specify
console.log(current_date.toLocaleDateString("en-IN"));

//Methods to create specific dates

let mydate = new Date(2024, 10, 11) //since month count starts from 0, Nov = 10!
console.log(mydate.toLocaleDateString("en-IN"));

//Date along with time

let someonedob = new Date(1993, 5, 25, 03, 52)
console.log(someonedob.toLocaleString("en-IN"));

//Another method in yy-mm-dd
let bdayDate = new Date("2020-06-15")
console.log(bdayDate.toDateString());

//Similarly for mm-dd-yy (we prefer it most)

//Timestamps [When comparing 2 values, who locked in first, response times of user.]

const mytimestamp = Date.now()
console.log(mytimestamp); //tells time in "ms" from 1st jan 1970 [the epoch]

//COnverting date to "ms" so we can compare, comparison should alwaye be in ms
console.log(mydate.getTime());

//Converting Milli-seconds to seconds, just divide by 1000

console.log(Math.floor(Date.now()/1000));

//Converting my elapsed time since birth in sec

//This program is giving time since epoch to my DOB
let birthday = new Date(1995,10,11)
let bdayInSeconds = birthday.getTime()
console.log(bdayInSeconds/1000);

//This gives my DOB in seconds, we just subtracted the
console.log(Math.floor((mytimestamp - bdayInSeconds)/1000));
