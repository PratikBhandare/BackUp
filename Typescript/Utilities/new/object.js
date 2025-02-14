// let value:unknown=42;
// console.log((value as unknown as string).toString())
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var d = new Dog();
if (d instanceof Dog) {
    console.log("YEs");
}
