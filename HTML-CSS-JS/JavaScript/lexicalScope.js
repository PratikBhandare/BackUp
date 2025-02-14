function Outer(){
    let OuterVarisble="Outer";

    function inner(){
        let innerV = OuterVarisble;
        console.log(innerV);
    }
    inner();
}

Outer();