var c;
console.log(c);
c=3;
console.log(c);
{
    console.log("Inside Block")
    var c;
    console.log(c)
}

// var b=1;// it doest show error time of writing but shows runtime

console.log("let Before ini")
let a;
console.log(a);
a=1;
console.log(a);
// let a
{
    console.log("Inside Block")
    // let a;
    console.log(a);
}


const b=0;
console.log("Const Before ini")
console.log(b);
{
    console.log("Inside Block")
    // const b=0;
    console.log(b);
}



