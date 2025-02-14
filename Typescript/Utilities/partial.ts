interface User{
    id:number;
    name:String;
    email:String;
}

let user:User={
    id:1,
    name:"Pratik",
    email:"pratik@gmail.com",
}

function updateUser(user:User,updates:Partial<User>){
    return {...user,...updates}
}

let updatedUser1=updateUser(user,{email:"pratik83@gmail.com"})

console.log(updatedUser1)