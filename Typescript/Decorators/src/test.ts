const greet=(target:Function)=>{
    target.prototype.greet=function(){
        console.log("Hello")
    }

    target.prototype.greet=function(){
        console.log("Say")
    }

    target.prototype.p="p"
}

@greet
class MyClass{

}

const m1=new MyClass();
(m1 as any).greet();
console.log((m1 as any).p);
// (m1 as any).say();