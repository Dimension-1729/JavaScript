//executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const numb = [2,6,5,2,8,10];

//What this reduce method is doing is, it's taking too parameters[total and sum], and it's going one by one on every value of array numb, with starting value from 0.
const sumValue = numb.reduce((total,sum) => total+sum,0);

console.log(sumValue);
