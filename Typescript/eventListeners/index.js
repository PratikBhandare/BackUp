function handleClick() {
    alert("Button is Clicked");
}
var Button = document.getElementById("btn");
Button.addEventListener("click", handleClick);
//Mouse Events
var div = document.createElement("div");
div.style.backgroundColor = "yellow";
div.style.height = "200px";
div.style.width = "200px";
document.body.appendChild(div);
div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "blue";
});
div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "yellow";
});
// Keyboard Events
// document.addEventListener("keyup",()=>{
//     alert("keyUp !!");
// })
// document.addEventListener("keydown",()=>{
//     alert("keyDown !!");
// })
var input = document.getElementById("input");
input === null || input === void 0 ? void 0 : input.addEventListener("input", function () {
    alert("Input is getting !!");
});
input === null || input === void 0 ? void 0 : input.addEventListener("submit", function () {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    alert("Input is getting !!");
});
input === null || input === void 0 ? void 0 : input.addEventListener("focus", function () {
    input.style.border = "10px";
});
input === null || input === void 0 ? void 0 : input.addEventListener("blurr", function () {
    input.style.border = "5px";
});
