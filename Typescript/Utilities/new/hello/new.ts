function throwError1(message:String):never{
    console.log(message);
    throw Error()
}

throwError1("Hello");
console.log("Hello2");

