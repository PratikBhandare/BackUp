// 1st  Generic Function
function fun<T>(arr:T[]):T{
    let n:T=arr[arr.length-1];
    // let ans:T=n;
    return n;
}

console.log(fun<number>([1,2,3,4,5]));



// 2nd  
interface Product{
    id:number;
    name:String;
    price:number;
}

let p:Product={
    id:1,
    name:"Mobile",
    price:10000,
}

function displayProduct<T>(p:T):T{
    let value:T=p;
    return value;
}

console.log(displayProduct(p));





// 3rd Enum

enum OrderStatus{
    pending="pending",
    shipped="shipped",
    delivered="delivered",
}

fun



