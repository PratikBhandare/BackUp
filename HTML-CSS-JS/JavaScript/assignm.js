function Discount(){
    let d = 10;
    return {
        setdiscount:(n)=> d=n,
        getdiscount:()=> d,
        caldiscount:(amount)=>{
            let discountprice =(amount*d)/100;
            let finalPrice = amount-discountprice;
            return finalPrice;
        }
    }
}

// let p1=Discount().caldiscount(100);
// console.log(p1);

(function(){
    console.log(Discount().caldiscount(100));
    Discount().setdiscount(12);
    console.log(Discount().caldiscount(100));
}())