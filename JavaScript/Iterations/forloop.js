for (let i = 0; i < 20; i++) {
    console.log(`${i} times executed`);
    ;
    
}

//if-else inside for loop
for (let i = 0; i <=5; i++) {
    if (i == 4) {
        console.log("Tu Chutiya hai kya?");
        
    };
    console.log(`Iteration number is ${i}`);
    
    
}

//for loop inside for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop Number is ${i}`);
    
    for (let j = 0; j <=5; j++) {
        console.log(`Inner Loop Number is ${j} and Outer Loop Number is ${i}`);
        
    };
    
}

//Print 2 table using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = `,2*i);
    ;
    
}

//Printing all tables upto 20 using for loop
for (let i = 1; i <=20; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} =`, i*j);
        
    };
    
}

//for loop on array elements

let myArr = ['Why', 'You', 'Are', ['Here','and'],'okay']

//if I use <= array length then it will go outside the array, and give undefined as one more element
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
    
}

//break & continue[Ek baar condition skip kar deta hai] keywords if some specific condition arises, we can stop the loop

for (let index = 0; index <= 10; index++) {
    if (index == 7) {
        console.log('7 detected, exitting...');
        break
    };
    console.log(`The number is ${index}`);
    
}

//continue method
for (let index = 20; index <=45; index++) {
    if (index == 31) {
        console.log(`Item at index is ${index}`);
        continue
    }
    console.log(`Index number: ${index}`);
    
}