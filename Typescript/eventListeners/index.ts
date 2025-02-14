function handleClick(){
    alert("Button is Clicked")
}

let Button = document.getElementById("btn") as HTMLButtonElement


Button.addEventListener("click",handleClick);



//Mouse Events

const div = document.createElement("div");
div.style.backgroundColor="yellow";
div.style.height="200px";
div.style.width="200px";
document.body.appendChild(div);


div.addEventListener("mouseenter",()=>{
    div.style.backgroundColor="blue"
})

div.addEventListener("mouseleave",()=>{
    div.style.backgroundColor="yellow"
})




// Keyboard Events

// document.addEventListener("keyup",()=>{
//     alert("keyUp !!");
// })

// document.addEventListener("keydown",()=>{
//     alert("keyDown !!");
// })

const input = document.getElementById("input");

input?.addEventListener("input",()=>{
    alert("Input is getting !!")
})

input?.addEventListener("submit",()=>{
    event?.preventDefault();

    alert("Input is getting !!")
})


input?.addEventListener("focus",()=>{
    input.style.border="10px";
})
input?.addEventListener("blurr",()=>{
    input.style.border="5px";
})