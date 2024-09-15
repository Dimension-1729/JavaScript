let days = 'Friday'
switch (days) {
    case 'Monday':
        console.log("Today is monday");
        
        break;
    case 'Tuesday':
        console.log("Today is tuesday");
        
        break;
    case 'wednesday':
        console.log("Today is wednesday");
        
        break;
    case 'Thursday':
        console.log("Today is monday");
        
        break;
    case 'Friday':
        console.log("Today is Friday");
        
        //break;        it will execute all other in the scope, until it encounters break
    case 'Sunday':
        console.log("Today is monday");
        
        break;
    case 'Sexday':
        console.log("Today is monday");
        
        break;

    default:
        break;
}