let ismale = true;
const arr = [1,2,3,4,5];
console.log(typeof(arr));

function showAlert(){
    alert("This is Alert Function !!");
}


function red(){
    let element=document.querySelector("body");
    element.style.backgroundColor='red';
}

function green(){
    let element=document.querySelector("body");
    element.style.backgroundColor='green';
}

function blue(){
    let element=document.querySelector("body");
    element.style.backgroundColor='blue';
}

function yellow(){
    let element=document.querySelector("body");
    element.style.backgroundColor='yellow';
}


function circleArea(){
    let p=prompt("enter value");
    
    let e=document.getElementById("showarea");
    e.innerHTML=3.14*p*p;
}

function ComfirmBox(){
    let c = comfirm("Are you want to Grow ?")
    console.log(c);
}

function add(){
    let n1= parseInt(document.getElementById("noinp1").value);
    let n2 =parseInt(document.getElementById("noinp2").value);
    console.log(n1,n2);
    var re= (n1+n2);
    document.getElementById("showres").innerHTML=re;
}

function evencheck(){
    let n = prompt("Enter Number");
    if(n%2==0){
        alert("Number is Even !!")
    }else{
        alert("Number is Odd !!")
    }

}


function dispname(){
    alert(document.getElementById("name").value+" "+"you are "+document.getElementById("age").value+ " Years Old !!")



}

function isleap(y){

    if(y%4==0 && y%100==0){
        return true;
    }else if(y%400){
        return true;
    }else return false;

}

// function validDate(){
//     let day=parseInt(document.getElementById("day").value);
//     let month=parseInt(document.getElementById("month").value);
//     let year=parseInt(document.getElementById("year").value);

//     if(day<=31){
//         if(month<=12){
//             if(month==2){
//                 if(isleap(year)){
//                     if(day==29){
//                         console.log("Valid")
//                     }else{
//                         console.log("Not Valid")
//                     }
//                 }else if(day>=28){
//                     console.log("Not Valid")
//                 }else{
//                     console.log("Valid")
//                 };
//             }else{
//                 console.log("Not valid")
//             }


//         }else{
//             console.log("not valid");
//         }
//     }else{
//         console.log("not valid");
//     }

// }






function validDate() {
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    if (month < 1 || month > 12) {
        console.log("Not valid");
        alert("Not Valid !!");
        return;
    }

    if (day < 1 || day > 31) {
        console.log("Not valid");
        alert("Not Valid !!");
        return;
    }

    if (month == 2) {
        if (isLeap(year)) {
            if (day > 29) {
                console.log("Not valid");
                alert("Not Valid !!");
            } else {
                console.log("Valid");
                alert("Valid!!");
            }
        } else {
            if (day > 28) {
                console.log("Not valid");
                alert("Not Valid !!");
            } else {
                console.log("Valid");
                alert("Valid!!");
            }
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            console.log("Not valid");
            alert("Not Valid !!");
        } else {
            console.log("Valid");
            alert("Valid!!");
        }
    } else {
        console.log("Valid");
        alert("Valid!!");
    }
}

function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
