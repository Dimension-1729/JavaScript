//For explicitly defining type of var

const balance = new Number(356.7854)
console.log(balance);
console.log(balance.valueOf()); //it returns only arg

//toString() , converts no. to string

const numb_str = balance.toString()
console.log(numb_str);

//toFixed() , gives decimal you need in a numb, & is rounded off

const updated_balance = balance.toFixed(2)
console.log(updated_balance);

//toPrecision , gives precision values upto the number you enter as parameter

//3 digits pe kaam karega aur round off karke 357
console.log(balance.toPrecision(3));
//Rest of the result it will return in exponential form that means after 2 digit
console.log(balance.toPrecision(2));
//5 digits pe kaam karega last decimals ko round off....round off toh waise bhi last value pe hi hoga
console.log(balance.toPrecision(5));

//toLocaleString(),  returns a string with a language-sensitive representation of the number

const score = 100000000 //too many zeroes to comprehe
console.log(score.toLocaleString('en-IN')); //how we as Indians are used to seeing these numbers.
