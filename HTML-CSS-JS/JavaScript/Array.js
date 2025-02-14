let arr = new Array();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push("Pratik");
arr.push(1.2);
console.log(arr);
console.log(arr.sort())
ar=[1,2,3,4]
//splice
arr.splice(2,0,30,40,50); // (start, deletCount, Items)
console.log(arr)


//slice
console.log(arr.slice(1,3));
console.log(arr);

// for

for(let item of arr){
    console.log(item);
}

//foreach

arr.forEach(function(item,index,arr){
console.log();
    console.log(item);
    console.log(index);
    // console.log(arr);
})



let arr1 = [1,2,3,4,5];
let [a,b,c,d,e] = arr1;
console.log(a,b,c,d,e);