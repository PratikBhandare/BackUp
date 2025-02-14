class product{

    name:String;
    price:number;
    isAvailable:boolean;
    category:number;
    constructor(productName:String,price:number,isAvailable:boolean,category:number){

        this.name=productName;
        this.price=price;
        this.isAvailable=isAvailable;
        this.category=category;

    }
}
enum category{
    Electronics,
    Clothing,
    Grocery,

}

let p1=new product("Mobile",20000,true,category.Electronics);
let p2=new product("Shirt",10000,true,category.Clothing);
let p3=new product("Sugar",50000,true,category.Grocery);

console.log(p2);