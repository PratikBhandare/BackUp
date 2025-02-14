function closure(){
    let count =0;
    return {
        increment:()=> ++count,
        decrement:()=> --count,
        get:()=> count,

    }

    
}

let inc = closure()
console.log(inc.increment());
console.log(inc.increment());
console.log(inc.decrement());
console.log(inc.get());
// console.log(closure().count);



function multiplier(){
    return function(number){

    }
}