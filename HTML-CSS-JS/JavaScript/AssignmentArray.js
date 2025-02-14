let array=[];
// for(i=0;i<10;i++){
    // let e=prompt(`Enter Number ${i+1}`);
//     array.push(e);
// }
// function second(arr){
//     arr.sort();
//     arr.reverse();
//     console.log(arr[arr.length-2])
// }
// second(array);

// for(i=0;i<10;i++){
//     let e=parseInt(prompt(`Enter Number ${i+1}`));
//     array.push(e);
// }


// function second(arr){
    
//     let secondsmall;
//     let firstsmall=arr[0];
    
//     console.log(arr)
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i])
//         if(arr[0]==firstsmall){
//             continue;
//         }
//         if(arr[i]<firstsmall){
//             secondsmall=firstsmall;
            
//             firstsmall=arr[i];
//         }else if(arr[i]<secondsmall<firstsmall){
//             secondsmall=arr[i];
//         }
//     }
//     console.log(secondsmall);
// }



function second(arr) {
    let firstsmall = Infinity; // Initialize to a large value
    let secondsmall = Infinity; // Initialize to a large value

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstsmall) {
            secondsmall = firstsmall; // Update second smallest
            firstsmall = arr[i]; // Update first smallest
        } else if (arr[i] < secondsmall && arr[i] != firstsmall) {
            secondsmall = arr[i]; // Update second smallest if it's not equal to first smallest
        }
    }

    if (secondsmall === Infinity) {
        console.log("There is no second smallest element.");
    } else {
        console.log(secondsmall);
    }
}


second(array);


second(array);
