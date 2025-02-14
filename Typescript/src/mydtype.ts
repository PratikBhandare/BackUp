interface address{
    city:String;
    pincode:number;
}

interface coordinates{
    lattitude:number;
    longitude:number;
}


type location =address & coordinates;
let myLocation : location;

myLocation={
    city:"Kolhapur",
    pincode:416012,
    lattitude:1232,
    longitude:2123123,

}

console.log(myLocation);


type directions = "Up"|"Down"|"Left"|"Right";

let dir1:directions="Up";
// let dir2:directions="Dont Know";   //Error



interface User{
    readonly id:number;
    name:String;
    email?:String; // Optional 
}

const user:User={
    id:1,
    name:"Pratik"
}

// user.id=2; // Error (ReadOnly)



// const myFunction=(id:number,name="sohan",email?:string):void=>{
//     console.log(id,name,email);
// }

// const myFunction2=(id:number,name="sohan",email?:string):void=>console.log(id,name,email);



// const myFunction=(id:number,name:string):void;

// const myFunction=(id:number,name:string,email:string):void=>console.log(id,name,email);





function addData(data1 : string, data2 : string) : string; 
  
function addData(data1 : number, data2 : number,data3:number): number; 

function addData(data1 : String, data2 : number): number; 
  
function addData(data1? : any, data2? : any, data3?:any){ 
    return data1+ data2 + data3; 
} 
  
console.log(addData("Hello ", "GeeksforGeeks"));   
console.log(addData("Hello ", 1));   
console.log(addData(20, 30, 10));