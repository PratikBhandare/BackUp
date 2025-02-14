
// Enum for Role
enum role{
    Admin="Admin",
    Manager="Manager",
    Employee="Employee",
}


//Interface
interface U{
    ID:number,
    Name:String,
    Email:String,
    role:role|String,
    PhoneNo?:number,

}
//creating Users array to store the users
let Users:U[]=[];
// function createUser(ID:number,Name:String,Email:String,role:role|String,PhoneNo?:number,):U{
//     let u:U={
//         ID:ID,
//         Name:Name,
//         Email:Email,
//         role:role,
//         PhoneNo:PhoneNo,

//     }
//     Users.push(u);
//     return u;
// }


function createUser(user:U):U{
    let u:U=user
    Users.push(u);
    return u;
}

// filtering Users
function filterUser(role:role|String):void{
    for(let i =0;i<Users.length;i++){
        if(Users[i].role===role){
            console.log(Users[i])
        }
    }
}


// creating Users
// let u1=createUser(1,"Pratik","pratik@gmail.com",role.Manager,9637810053)
let u1=createUser({ID:1,Name:"Pratik",Email:"pratik@gmail.com",role:role.Manager,PhoneNo:9637810053})
let u2=createUser({ID:2,Name:"Rahul",Email:"rahul@gmail.com",role:"Admin",PhoneNo:9089674523})
console.log(u1);
console.log(Users);



console.log("Filtered Users")
filterUser("Manager");
filterUser("Admin");

