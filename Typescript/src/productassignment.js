var product = /** @class */ (function () {
    function product(productName, price, isAvailable, category) {
        this.name = productName;
        this.price = price;
        this.isAvailable = isAvailable;
        this.category = category;
    }
    return product;
}());
var category;
(function (category) {
    category[category["Electronics"] = 0] = "Electronics";
    category[category["Clothing"] = 1] = "Clothing";
    category[category["Grocery"] = 2] = "Grocery";
})(category || (category = {}));
var p1 = new product("Mobile", 20000, true, category.Electronics);
var p2 = new product("Shirt", 10000, true, category.Clothing);
var p3 = new product("Sugar", 50000, true, category.Grocery);
console.log(p2);
