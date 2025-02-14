let arr=[1,0,4,2,0]
let e=[]
let z=[];

for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        z.push(arr[i]);
    }
    else{
        e.push(arr[i]);
    }
}
// e.sort();

let result=[...e,...z];

//Result
console.log("Resulted Array: ",result);
console.log("Original Array",arr);