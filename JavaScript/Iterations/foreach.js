//Array ke hi prototype me inject kar rakha hai....ussi ki hi property ka hissa hai...kyunki pata hai array ayenge toh loop toh lagane hi padenge

myArr = ['The','way','to','predict','the','future','is to','create it.']

//call back ka matlb hai bas mujhe ek function dedo

//wo samjh jayega ke word har baar...ek-ek karke array se lana hai, function as a parameter ek ek karke layega word...and apko jo uspe karna hai wo function ki body me kar do. 
//call back function has no name...aur kyunki ye function array ke andar chal raha toh array provide kr rha hai isse parameters

myArr.forEach( function (word) {console.log(`Word:- ${word}`);
})

//Using arrow function inside foreach

myArr.forEach( (item) => {console.log(`Arrow Output:- ${item}`);
})

//By referencing a function which is defined elsewhere

function print(item) {
    console.log(`Reference Value is: ${item}`);
    
}
myArr.forEach( print )      //We have to give reference of function not execute it right here like print()

//All other access properties that it has[ ye leke chal raha hai saari values har item pe...kab kahan zarurat pad jaye]

// myArr.forEach( (item,index,myArr) => {
//     console.log(item, index, myArr);
    
// })

//Parsing Data through multiple objects

const course = [
    {
        'Course Name' : 'Python',
        'Fees' : 5000
    },
    {
        'Course Name' : 'Perl',
        'Fees' : 8563
    },
    {
        'Course Name' : 'C++',
        'Fees' : 5656
    },
    {
        'Course Name' : 'Java',
        'Fees' : 6000
    }
]

course.forEach ( (item) => {
    console.log(item["Course Name"]);
    
})

//forEach Doesn't return any value even if you explicitly asked it to.