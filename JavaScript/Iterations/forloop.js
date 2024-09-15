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

//2 Table 