interface User{
    id:number;
    name:String;
    email:String;
}
type UserPreview=Pick<User,"name"|"email">

let userPreview:UserPreview={name:"pratik",email:"pratik@gmail.com"}

console.log(userPreview)

