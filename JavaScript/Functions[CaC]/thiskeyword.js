//this refers to context to which we're referring to

const newObj = {
    username : "Ashok",
    age : 45,
    message : function(){       //this is called anonymous function
        console.log(`${this.username}, Welcome User.`)
        console.log(this); //this refers to local obj
        ;
        
    }
}

newObj.message()
newObj.username = "Ashutosh"
newObj.message()
console.log(this); //there is no context in global so it returns an empty object

function this_holds_so_much_more_inf(){
    console.log(this);
    
}
this_holds_so_much_more_inf()