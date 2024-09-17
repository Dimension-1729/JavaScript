//In filter method jo value TRUE hogi keval wohi pass hogi
//Suppose you want to return the value and save it to a variable.
//forEach Doesn't return any value even if you explicitly asked it to.

myArr = ['The','way','to','predict','the','future','is to','create it.']

const value = myArr.forEach( (item) => {
    console.log(item);
    return item;
    
})
console.log(value);     //This will always return undefined even if you have used return keyword in forEach Scope.

const numberArr = [25,2,4,2,269,3,1,2,47,5,47,6,6,9,8,5,78,2,6]

const numb_operation = numberArr.filter( (numb) => numb % 2 == 0)   //Same line arrow function so need curly brackets used, if we open Scope {} here then we have to use return statement.
console.log(numb_operation);

//Using for each

const output = []
numberArr.forEach( (num) => {
    if (num % 2 ==0) {
        output.push(num)
    }
})
console.log(output);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let results_arr = books.filter( (item) => {
    return item.genre == 'Non-Fiction' && item.publish > 1982
  })
console.log(results_arr);
  
results_arr = books.filter( (item) => {
    return item.genre == 'Science' && item.publish >= 2010 && item.edition > 2005 } )
console.log(results_arr);

//If scope open kar rahe hai toh return karna hi padega. [MUST]