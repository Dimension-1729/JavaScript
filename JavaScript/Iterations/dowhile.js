//Pehle kaam hoga phir condition check hogi, toh atleast 1 baar toh code execute hoga hi

let index = 1
do {
    console.log(`2 * ${index} = `,2*index );
    index +=1;
} while (index <= 10);

//do while inside do while

let i = 1 
do {
    let j = 1
    do {
        
        console.log(`${i} * ${j} =`, i*j);
        j += 1;
    } while (j <=10);
    i +=1;
} while (i<=20);