// function Counter(){
//     let count =0;

//     return function(){
//         count++;
//         return count;
//     }
// }
// let c=Counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let day=10;
// switch(day){
//     default:
//         console.log("default");
        
//     case 1:
//         console.log("case 1");
//     case 2:
//         console.log("case 2");
//         break;

// }


// let obj = {
//     name:"Pratik",
//     age:21,
//     city:"Kolhapur"
// }

// console.log(obj.name);





// function OuterFunction(outer){
//     return function InnerFunction(inner){
//         console.log(`Outer: ${outer}`);
//         console.log(`Inner: ${inner}`);
//     }

// }

// const newFunction = OuterFunction("Outer Variable");

// newFunction("inner Variable");


// let message="Hii Pratik";
// document.getElementById("myButton").addEventListener('click',function(){
//     alert(message);
// })
// document.getElementById("myButton").addEventListener('mouseup',function(){
//     document.getElementById("myButton").style.backgroundColor="red"
// })



// create function to create bank account (initial amount)  having three func deposit withdraw get balance



function account(inamount){
    let amount = inamount;
    return{
        deposit:(damount)=>amount+=damount,
        withdraw:(wamount)=>{
            if(wamount<amount){
                amount-=wamount
                
            }
            return console.log("amount is less")
            
        },
           
        get:()=>amount
    }

}

let p1 = account(10000);
console.log(p1.get());
console.log(p1.deposit(1000));
console.log(p1.get());
console.log(p1.withdraw(100000));
console.log(p1.get());