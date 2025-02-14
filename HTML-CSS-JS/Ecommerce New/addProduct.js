

document.getElementById('product-form').addEventListener('submit', function (event) {
    
    event.preventDefault();
    const pname = document.getElementById("product-name").value;
    const pid = document.getElementById("product-id").value;
    let pcategory = document.getElementById("product-category").value;
    let pprice = document.getElementById("product-price").value;
    let purl = document.getElementById("img-url").value;
    console.log(products);
    addProduct({id:pid,name:pname,category:pcategory,price:pprice,link:purl})


});

// console.log(pname);
function addProduct(p) {
    products.push(p);
}